import type { APIRoute } from 'astro';
import { Resvg } from '@resvg/resvg-js';
import { checkNesting, elements } from '../../data/html-nesting';

/**
 * System-font mapping (closest match to the site's web fonts):
 *   Instrument Serif  →  Georgia
 *   DM Sans           →  Helvetica Neue
 *   JetBrains Mono    →  Menlo
 */
const SERIF = 'Georgia, serif';
const SANS = "'Helvetica Neue', 'Helvetica', sans-serif";
const MONO = 'Menlo, monospace';

function renderPng(svg: string): Buffer {
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
    font: { loadSystemFonts: true },
  });
  return Buffer.from(resvg.render().asPng());
}

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function htmlToPlain(html: string) {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

function wrapLines(text: string, max: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let cur = '';
  for (const w of words) {
    if (cur && (cur + ' ' + w).length > max) {
      lines.push(cur);
      cur = w;
    } else {
      cur = cur ? cur + ' ' + w : w;
    }
  }
  if (cur) lines.push(cur);
  return lines.slice(0, 2);
}

const VERDICT = {
  yes:     { bg: '#f0fdf4', fg: '#166534', label: 'Yes, you can!' },
  no:      { bg: '#fef2f2', fg: '#991b1b', label: "No, you can't" },
  depends: { bg: '#fffbeb', fg: '#92400e', label: 'It depends' },
} as const;

function selectorSvg(child: string, parent: string, y: number) {
  const labelY = y - 14;
  const textY = y + 40;
  return `
  <text x="305" y="${labelY}" font-family="${SANS}" font-size="11" fill="#a8a29e" text-anchor="middle" letter-spacing="1.2" font-weight="500">CHILD</text>
  <rect x="170" y="${y}" width="270" height="62" rx="14" fill="white" stroke="#78716c" stroke-width="1.5"/>
  <text x="305" y="${textY}" font-family="${MONO}" font-size="24" text-anchor="middle"><tspan fill="#57534e">&lt;</tspan><tspan dx="3" fill="#1c1917">${esc(child)}</tspan><tspan dx="3" fill="#57534e">&gt;</tspan></text>

  <text x="600" y="${y + 26}" font-family="${SANS}" font-size="15" fill="#d6d3d1" text-anchor="middle" font-weight="300">inside</text>
  <rect x="578" y="${y + 33}" width="44" height="30" rx="8" fill="white" stroke="#e7e5e4" stroke-width="1"/>
  <g transform="translate(591, ${y + 38}) scale(0.75)">
    <path d="M20 10h-16l5.5-6" fill="none" stroke="#a8a29e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4 14h16l-5.5 6" fill="none" stroke="#a8a29e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <text x="895" y="${labelY}" font-family="${SANS}" font-size="11" fill="#a8a29e" text-anchor="middle" letter-spacing="1.2" font-weight="500">PARENT</text>
  <rect x="760" y="${y}" width="270" height="62" rx="14" fill="white" stroke="#78716c" stroke-width="1.5"/>
  <text x="895" y="${textY}" font-family="${MONO}" font-size="24" text-anchor="middle"><tspan fill="#57534e">&lt;</tspan><tspan dx="3" fill="#1c1917">${esc(parent)}</tspan><tspan dx="3" fill="#57534e">&gt;</tspan></text>`;
}

function verdictIconSvg(valid: 'yes' | 'no' | 'depends', cx: number, cy: number, r: number) {
  const fg = VERDICT[valid].fg;
  if (valid === 'yes') {
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fg}"/>
    <path d="M${cx - 6} ${cy}l4 4 8-8" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`;
  }
  if (valid === 'no') {
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fg}"/>
    <path d="M${cx - 5} ${cy - 5}l10 10M${cx + 5} ${cy - 5}l-10 10" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`;
  }
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fg}"/>
  <text x="${cx}" y="${cy + 6}" font-family="${SANS}" font-size="18" fill="white" text-anchor="middle" font-weight="700">?</text>`;
}

function resultCardSvg(valid: 'yes' | 'no' | 'depends', lines: string[], y: number) {
  const v = VERDICT[valid];
  const h = 95 + lines.length * 26;
  let svg = `
  <rect x="170" y="${y}" width="860" height="${h}" rx="18" fill="${v.bg}"/>
  ${verdictIconSvg(valid, 224, y + 44, 18)}
  <text x="254" y="${y + 55}" font-family="${SERIF}" font-size="36" fill="${v.fg}">${v.label}</text>`;
  for (let i = 0; i < lines.length; i++) {
    svg += `\n  <text x="206" y="${y + 85 + i * 24}" font-family="${SANS}" font-size="15" fill="#57534e">${esc(lines[i])}</text>`;
  }
  return svg;
}

function buildResultSvg(
  child: string,
  parent: string,
  valid: 'yes' | 'no' | 'depends',
  explanation: string,
): string {
  const lines = wrapLines(htmlToPlain(explanation), 78);
  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#fafaf9"/>
  <text x="600" y="100" font-family="${SERIF}" font-size="52" fill="#1c1917" text-anchor="middle" letter-spacing="-0.5">Can I Wrap?</text>
  ${selectorSvg(child, parent, 148)}
  ${resultCardSvg(valid, lines, 256)}
  <text x="600" y="575" font-family="${MONO}" font-size="18" fill="#a8a29e" text-anchor="middle">caniwrap.com</text>
</svg>`;
}

export function buildDefaultSvg(): string {
  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#fafaf9"/>
  <text x="600" y="118" font-family="${SERIF}" font-size="76" fill="#1c1917" text-anchor="middle" letter-spacing="-1">Can I Wrap?</text>
  <text x="600" y="162" font-family="${SANS}" font-size="22" fill="#a8a29e" text-anchor="middle" font-weight="300">Can you nest an HTML element inside another?</text>
  ${selectorSvg('button', 'a', 216)}
  ${resultCardSvg('no', [
    '<a> is interactive content and cannot contain other',
    'interactive elements like <button>.',
  ], 326)}
  <text x="600" y="575" font-family="${MONO}" font-size="18" fill="#a8a29e" text-anchor="middle">caniwrap.com</text>
</svg>`;
}

export const GET: APIRoute = async ({ url }) => {
  const child = url.searchParams.get('child') || '';
  const parent = url.searchParams.get('parent') || '';

  let svg: string;
  if (child && parent && elements[child] && elements[parent]) {
    const result = checkNesting(child, parent);
    svg = buildResultSvg(child, parent, result.valid, result.explanation);
  } else {
    svg = buildDefaultSvg();
  }

  return new Response(renderPng(svg), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, s-maxage=31536000',
    },
  });
};
