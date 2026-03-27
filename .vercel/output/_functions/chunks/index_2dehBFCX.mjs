import { c as createComponent } from './astro-component_D32vvvse.mjs';
import { l as createRenderInstruction, r as renderTemplate, n as renderSlot, o as renderHead, u as unescapeHTML, h as addAttribute, m as maybeRenderHead, p as renderComponent } from './entrypoint_Cm6JRxTM.mjs';
import { c as checkNesting, e as elements, g as getElementsByCategory, V as VOID_ELEMENTS, a as getDisplayType } from './html-nesting_C7_vN9Zl.mjs';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const SITE = "https://caniwrap.com";
  const defaults = {
    title: "Can I Wrap? — HTML Element Nesting Checker",
    description: "Check if you can nest one HTML element inside another according to the HTML specification. Instant lookup for content model rules, with code examples and MDN references."
  };
  const { title = defaults.title, description = defaults.description } = Astro2.props;
  const canonical = Astro2.props.canonical ?? new URL(Astro2.url.pathname, SITE).href;
  const ogImage = Astro2.props.ogImage ?? `${SITE}/og-image.png`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Can I Wrap?",
    url: SITE,
    description: defaults.description,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    browserRequirements: "Requires JavaScript",
    featureList: [
      "HTML element nesting validation",
      "Content model lookup",
      "Code examples",
      "MDN reference links",
      "HTML nesting quiz"
    ]
  };
  return renderTemplate(_a || (_a = __template(['<html lang="en" style="color-scheme: light"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="color-scheme" content="light"><title>', '</title><meta name="description"', '><link rel="canonical"', '><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="theme-color" content="#1C1917"><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Can I Wrap? — Check HTML element nesting rules"><meta property="og:site_name" content="Can I Wrap?"><meta property="og:locale" content="en_US"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:image:alt" content="Can I Wrap? — Check HTML element nesting rules"><!-- SEO extras --><meta name="robots" content="index, follow"><meta name="author" content="caniwrap.com"><meta name="generator"', '><!-- JSON-LD --><script type="application/ld+json">', "<\/script>", "</head> <body> ", " </body></html>"])), title, addAttribute(description, "content"), addAttribute(canonical, "href"), addAttribute(canonical, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(Astro2.generator, "content"), unescapeHTML(JSON.stringify(jsonLd)), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/midudev/Dev/caniwrap.com/src/layouts/Layout.astro", void 0);

const $$PixelHeart = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PixelHeart;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(className, "class")} viewBox="0 0 8 6" fill="#dc2626" xmlns="http://www.w3.org/2000/svg" style="image-rendering:pixelated" aria-hidden="true"> <rect x="1" y="0" width="2" height="1"></rect> <rect x="5" y="0" width="2" height="1"></rect> <rect x="0" y="1" width="8" height="2"></rect> <rect x="1" y="3" width="6" height="1"></rect> <rect x="2" y="4" width="4" height="1"></rect> <rect x="3" y="5" width="2" height="1"></rect> </svg>`;
}, "/Users/midudev/Dev/caniwrap.com/src/components/PixelHeart.astro", void 0);

async function fetchSponsors() {
  return [];
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const sponsors = await fetchSponsors();
  const SITE = "https://caniwrap.com";
  const urlChild = Astro2.url.searchParams.get("child") || "";
  const urlParent = Astro2.url.searchParams.get("parent") || "";
  const hasCombo = !!(urlChild && urlParent && elements[urlChild] && elements[urlParent]);
  let pageTitle = "Can I Wrap? — HTML Element Nesting Checker";
  let pageDesc = "Check if you can nest one HTML element inside another according to the HTML specification.";
  let ogImage = `${SITE}/og-image.png`;
  if (hasCombo) {
    const result = checkNesting(urlChild, urlParent);
    const verdict = result.valid === "yes" ? "Yes!" : result.valid === "no" ? "No!" : "It depends";
    pageTitle = `Can <${urlChild}> go inside <${urlParent}>? ${verdict} — Can I Wrap?`;
    pageDesc = result.explanation.replace(/<[^>]+>/g, "");
    ogImage = `${SITE}/api/og.png?child=${urlChild}&parent=${urlParent}`;
  }
  const categoryDefs = [
    {
      id: "flow",
      name: "Flow content",
      desc: "The broadest category. Most elements that can appear inside <body> are flow content. This includes block-level elements, inline elements, and everything in between.",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#flow_content"
    },
    {
      id: "phrasing",
      name: "Phrasing content",
      desc: "Text and inline-level elements. A subset of flow content. Elements like <p>, <h1>, and <button> only accept phrasing content as children.",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#phrasing_content"
    },
    {
      id: "interactive",
      name: "Interactive content",
      desc: "Elements designed for user interaction. An important rule: interactive content cannot be nested inside other interactive content (e.g. no <button> inside <a>).",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#interactive_content"
    },
    {
      id: "embedded",
      name: "Embedded content",
      desc: "Elements that import external resources or insert content from another markup language into the document.",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#embedded_content"
    },
    {
      id: "heading",
      name: "Heading content",
      desc: "Elements that define the title of a section. These are restricted from appearing inside elements like <address> or <dt>.",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#heading_content"
    },
    {
      id: "sectioning",
      name: "Sectioning content",
      desc: "Elements that create a section in the document outline, defining the scope of <header> and <footer> elements.",
      mdn: "https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#sectioning_content"
    }
  ];
  const displayGroups = [
    { type: "block", label: "Block", color: "#c2410c" },
    { type: "inline", label: "Inline", color: "#0369a1" },
    { type: "inline-block", label: "Inline replaced", color: "#7c3aed" },
    { type: "list-item", label: "List item", color: "#b45309" },
    { type: "table", label: "Table", color: "#0f766e" },
    { type: "none", label: "Hidden", color: "#78716c" }
  ];
  function groupByDisplay(tags) {
    return displayGroups.map((g) => ({ ...g, tags: tags.filter((t) => getDisplayType(t) === g.type) })).filter((g) => g.tags.length > 0);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDesc, "ogImage": ogImage, "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-stone-50 text-stone-900 font-sans antialiased" data-astro-cid-j7pv25f6> <main class="max-w-[680px] mx-auto px-5 py-14 md:py-24" data-astro-cid-j7pv25f6> <!-- Hero --> <header class="text-center mb-14" data-astro-cid-j7pv25f6> <h1 class="font-serif text-5xl md:text-[3.5rem] leading-tight tracking-tight mb-3 text-stone-900" data-astro-cid-j7pv25f6>
Can I Wrap?
</h1> <p class="text-stone-400 text-lg font-light" data-astro-cid-j7pv25f6>
Can you nest an HTML element inside another?
</p> <a href="/quiz" class="quiz-cta" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6><path d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8" data-astro-cid-j7pv25f6></path><path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8" data-astro-cid-j7pv25f6></path><path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5" data-astro-cid-j7pv25f6></path><path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0" data-astro-cid-j7pv25f6></path><path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5" data-astro-cid-j7pv25f6></path><path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10" data-astro-cid-j7pv25f6></path></svg>
Take the HTML Nesting Quiz
<span class="quiz-cta-arrow" data-astro-cid-j7pv25f6>→</span> </a> </header> <!-- Selector --> <div class="selector-grid mb-4" id="selector" data-astro-cid-j7pv25f6> <div class="relative" data-astro-cid-j7pv25f6> <label for="child-input" class="block text-[11px] uppercase tracking-[0.1em] text-stone-400 mb-2 font-medium" data-astro-cid-j7pv25f6>
Child
</label> <div class="tag-input-wrapper" id="child-wrapper" data-astro-cid-j7pv25f6> <span class="bracket" data-astro-cid-j7pv25f6>&lt;</span> <input type="text" id="child-input" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="child-dropdown" placeholder="button" autocomplete="off" autocapitalize="off" spellcheck="false" data-astro-cid-j7pv25f6> <span class="bracket" data-astro-cid-j7pv25f6>&gt;</span> </div> <div id="child-dropdown" role="listbox" aria-label="Child element suggestions" class="dropdown hidden" data-astro-cid-j7pv25f6></div> </div> <div class="flex flex-col items-center justify-end pb-3 gap-1" data-astro-cid-j7pv25f6> <span class="text-stone-300 text-sm select-none font-light" data-astro-cid-j7pv25f6>inside</span> <button id="swap-btn" class="swap-btn" title="Swap elements" aria-label="Swap child and parent elements" data-astro-cid-j7pv25f6> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6> <path d="M20 10h-16l5.5 -6" data-astro-cid-j7pv25f6></path><path d="M4 14h16l-5.5 6" data-astro-cid-j7pv25f6></path> </svg> </button> </div> <div class="relative" data-astro-cid-j7pv25f6> <label for="parent-input" class="block text-[11px] uppercase tracking-[0.1em] text-stone-400 mb-2 font-medium" data-astro-cid-j7pv25f6>
Parent
</label> <div class="tag-input-wrapper" id="parent-wrapper" data-astro-cid-j7pv25f6> <span class="bracket" data-astro-cid-j7pv25f6>&lt;</span> <input type="text" id="parent-input" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="parent-dropdown" placeholder="a" autocomplete="off" autocapitalize="off" spellcheck="false" data-astro-cid-j7pv25f6> <span class="bracket" data-astro-cid-j7pv25f6>&gt;</span> </div> <div id="parent-dropdown" role="listbox" aria-label="Parent element suggestions" class="dropdown hidden" data-astro-cid-j7pv25f6></div> </div> </div> <!-- Reset --> <div class="flex justify-end" data-astro-cid-j7pv25f6> <button id="reset-btn" class="reset-btn hidden" type="button" aria-label="Clear selection" data-astro-cid-j7pv25f6> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6><path d="M18 6L6 18" data-astro-cid-j7pv25f6></path><path d="M6 6l12 12" data-astro-cid-j7pv25f6></path></svg>
Clear
</button> </div> <!-- Result --> <div id="result" class="mb-14" aria-live="polite" data-astro-cid-j7pv25f6></div> <!-- Popular checks --> <section class="mb-16" data-astro-cid-j7pv25f6> <h2 class="text-[11px] uppercase tracking-[0.1em] text-stone-400 mb-4 font-medium" data-astro-cid-j7pv25f6>
Popular checks
</h2> <div class="flex flex-wrap gap-2" id="popular-pills" data-astro-cid-j7pv25f6> <button class="pill" data-check="div,span" data-astro-cid-j7pv25f6>div → span</button> <button class="pill" data-check="a,button" data-astro-cid-j7pv25f6>a → button</button> <button class="pill" data-check="button,a" data-astro-cid-j7pv25f6>button → a</button> <button class="pill" data-check="p,p" data-astro-cid-j7pv25f6>p → p</button> <button class="pill" data-check="ul,li" data-astro-cid-j7pv25f6>ul → li</button> <button class="pill" data-check="div,p" data-astro-cid-j7pv25f6>div → p</button> <button class="pill" data-check="button,button" data-astro-cid-j7pv25f6>button → button</button> <button class="pill" data-check="img,button" data-astro-cid-j7pv25f6>img → button</button> <button class="pill" data-check="h1,p" data-astro-cid-j7pv25f6>h1 → p</button> <button class="pill" data-check="span,div" data-astro-cid-j7pv25f6>span → div</button> <button class="pill" data-check="form,form" data-astro-cid-j7pv25f6>form → form</button> <button class="pill" data-check="a,a" data-astro-cid-j7pv25f6>a → a</button> <button class="pill" data-check="li,div" data-astro-cid-j7pv25f6>li → div</button> <button class="pill" data-check="div,a" data-astro-cid-j7pv25f6>div → a</button> <button class="pill" data-check="input,label" data-astro-cid-j7pv25f6>input → label</button> <button class="pill" data-check="td,div" data-astro-cid-j7pv25f6>td → div</button> </div> </section> <!-- Content categories --> <section class="border-t border-stone-200 pt-10" id="categories" data-astro-cid-j7pv25f6> <h2 class="font-serif text-2xl mb-2 text-stone-800" data-astro-cid-j7pv25f6>Content categories</h2> <p class="text-stone-400 text-[15px] mb-8 leading-relaxed" data-astro-cid-j7pv25f6>
Every HTML element belongs to zero or more content categories that define where it can appear and what it can contain.
          Each element's <strong class="text-stone-500 font-medium" data-astro-cid-j7pv25f6>content model</strong> specifies which categories it accepts as children.
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories" target="_blank" rel="noopener" class="text-stone-500 underline underline-offset-2 decoration-stone-300 hover:decoration-stone-500 transition-colors" data-astro-cid-j7pv25f6>Learn more on MDN →</a> </p> <div class="space-y-6" data-astro-cid-j7pv25f6> ${categoryDefs.map((cat) => {
    const tags = getElementsByCategory(cat.id);
    const groups = groupByDisplay(tags);
    return renderTemplate`<section${addAttribute(cat.id, "id")} class="cat-section" data-astro-cid-j7pv25f6> <div class="cat-header" data-astro-cid-j7pv25f6> <h3 class="cat-title" data-astro-cid-j7pv25f6> <a${addAttribute(cat.mdn, "href")} target="_blank" rel="noopener" data-astro-cid-j7pv25f6>${cat.name} <span class="cat-count" data-astro-cid-j7pv25f6>${tags.length}</span></a> </h3> </div> <p class="cat-desc" data-astro-cid-j7pv25f6>${cat.desc}</p> <div class="cat-groups" data-astro-cid-j7pv25f6> ${groups.map((group) => renderTemplate`<div class="cat-group" data-astro-cid-j7pv25f6> <span class="cat-group-label"${addAttribute(`--label-color: ${group.color}`, "style")} data-astro-cid-j7pv25f6>${group.label}</span> <div class="cat-group-tags" data-astro-cid-j7pv25f6> ${group.tags.map((tag) => renderTemplate`<button class="cat-tag"${addAttribute(tag, "data-child")}${addAttribute(`${elements[tag].desc}${VOID_ELEMENTS.has(tag) ? " · void element" : ""}`, "data-tip")} data-astro-cid-j7pv25f6>
&lt;${tag}&gt;${VOID_ELEMENTS.has(tag) && renderTemplate`<span class="void-dot" title="Void element" data-astro-cid-j7pv25f6></span>`} </button>`)} </div> </div>`)} </div> </section>`;
  })} </div> </section> <!-- Footer --> <footer class="mt-12 pt-8 border-t border-stone-200 text-center hero-reveal" style="animation-delay: 400ms;" data-astro-cid-j7pv25f6> <p class="hero-footer-text text-[0.6875rem] text-zinc-400 mb-4" data-astro-cid-j7pv25f6>
Built by <a href="https://midu.dev" class="hero-footer-link text-zinc-600 font-semibold hover:text-black transition-colors no-underline" data-astro-cid-j7pv25f6>midudev</a> with the support of
</p> ${sponsors.length > 0 && renderTemplate`<div class="flex items-center justify-center -space-x-1.5 mb-4" data-astro-cid-j7pv25f6> ${sponsors.map((s, i) => renderTemplate`<a${addAttribute(`https://github.com/${s.login}`, "href")} target="_blank" rel="noopener noreferrer" class="sponsor-avatar relative hover:z-10"${addAttribute(`--i: ${i}`, "style")} data-astro-cid-j7pv25f6> <img${addAttribute(`https://avatars.githubusercontent.com/u/${s.id}?s=64`, "src")}${addAttribute(s.login, "alt")} width="32" height="32" class="size-8 rounded-full border-2 border-white shadow-sm" loading="lazy" data-astro-cid-j7pv25f6> <span class="sponsor-tip" data-astro-cid-j7pv25f6>@${s.login}</span> </a>`)} <a href="https://github.com/sponsors/midudev" target="_blank" rel="noopener noreferrer" class="hero-add-sponsor relative hover:z-10 transition-transform hover:scale-110 flex items-center justify-center size-8 rounded-full border-2 border-dashed border-zinc-300 bg-zinc-50 text-zinc-400 hover:border-zinc-400 hover:text-zinc-600" title="Support this project" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6><path d="M12 5l0 14" data-astro-cid-j7pv25f6></path><path d="M5 12l14 0" data-astro-cid-j7pv25f6></path></svg> </a> </div>`} <a href="https://github.com/sponsors/midudev" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-[0.6875rem] text-zinc-400 hover:text-pink-600 transition-colors no-underline group" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "PixelHeart", $$PixelHeart, { "class": "w-3.5 h-[11px]", "data-astro-cid-j7pv25f6": true })}
Support this project on GitHub Sponsors
</a> <p class="mt-4 text-[0.625rem] text-stone-400" data-astro-cid-j7pv25f6>
Data sourced from the
<a href="https://html.spec.whatwg.org/multipage/" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-stone-600 transition-colors" data-astro-cid-j7pv25f6>HTML Living Standard</a>
and
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-stone-600 transition-colors" data-astro-cid-j7pv25f6>MDN Web Docs</a>.
</p> </footer> </main> </div> ` })}  ${renderScript($$result, "/Users/midudev/Dev/caniwrap.com/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/midudev/Dev/caniwrap.com/src/pages/index.astro", void 0);

const $$file = "/Users/midudev/Dev/caniwrap.com/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
