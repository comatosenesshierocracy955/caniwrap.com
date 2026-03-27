const FP = ["flow", "phrasing"];
const FPI = ["flow", "phrasing", "interactive"];
const FPIE = ["flow", "phrasing", "interactive", "embedded"];
const FPE = ["flow", "phrasing", "embedded"];
const F = ["flow"];
const FS = ["flow", "sectioning"];
const FH = ["flow", "heading"];
const MFP = ["metadata", "flow", "phrasing"];
const NONE = [];
const FI = ["flow", "interactive"];
const elements = {
  // ── Inline text semantics (flow + phrasing) ──
  a: { cats: FPI, content: "transparent", noDesc: ["@interactive"], desc: "Hyperlink" },
  abbr: { cats: FP, content: "phrasing", desc: "Abbreviation" },
  b: { cats: FP, content: "phrasing", desc: "Bring attention" },
  bdi: { cats: FP, content: "phrasing", desc: "Bidirectional isolate" },
  bdo: { cats: FP, content: "phrasing", desc: "Bidirectional override" },
  br: { cats: FP, content: "void", desc: "Line break" },
  cite: { cats: FP, content: "phrasing", desc: "Citation" },
  code: { cats: FP, content: "phrasing", desc: "Code fragment" },
  data: { cats: FP, content: "phrasing", desc: "Machine-readable data" },
  dfn: { cats: FP, content: "phrasing", noDesc: ["dfn"], desc: "Definition" },
  em: { cats: FP, content: "phrasing", desc: "Emphasis" },
  i: { cats: FP, content: "phrasing", desc: "Idiomatic text" },
  kbd: { cats: FP, content: "phrasing", desc: "Keyboard input" },
  mark: { cats: FP, content: "phrasing", desc: "Highlighted text" },
  q: { cats: FP, content: "phrasing", desc: "Inline quotation" },
  ruby: { cats: FP, content: "phrasing", also: ["rt", "rp"], desc: "Ruby annotation" },
  s: { cats: FP, content: "phrasing", desc: "Strikethrough" },
  samp: { cats: FP, content: "phrasing", desc: "Sample output" },
  small: { cats: FP, content: "phrasing", desc: "Side comment" },
  span: { cats: FP, content: "phrasing", desc: "Inline container" },
  strong: { cats: FP, content: "phrasing", desc: "Strong importance" },
  sub: { cats: FP, content: "phrasing", desc: "Subscript" },
  sup: { cats: FP, content: "phrasing", desc: "Superscript" },
  time: { cats: FP, content: "phrasing", desc: "Date/time" },
  u: { cats: FP, content: "phrasing", desc: "Unarticulated annotation" },
  var: { cats: FP, content: "phrasing", desc: "Variable" },
  wbr: { cats: FP, content: "void", desc: "Word break opportunity" },
  // ── Text-level edits (transparent) ──
  del: { cats: FP, content: "transparent", desc: "Deleted text" },
  ins: { cats: FP, content: "transparent", desc: "Inserted text" },
  // ── Interactive / form elements ──
  button: { cats: FPI, content: "phrasing", noDesc: ["@interactive"], desc: "Clickable button" },
  input: { cats: FPI, content: "void", desc: "Input field" },
  label: { cats: FPI, content: "phrasing", noDesc: ["label"], desc: "Form label" },
  select: { cats: FPI, content: "specific", children: ["option", "optgroup", "hr", "script", "template"], desc: "Dropdown list" },
  textarea: { cats: FPI, content: "text", desc: "Multi-line text input" },
  details: { cats: FI, content: "flow", also: ["summary"], desc: "Disclosure widget" },
  dialog: { cats: F, content: "flow", desc: "Dialog box" },
  // ── Embedded content ──
  audio: { cats: FPIE, content: "transparent", also: ["source", "track"], desc: "Audio content" },
  canvas: { cats: FPE, content: "transparent", desc: "Drawing surface" },
  embed: { cats: FPIE, content: "void", desc: "External plugin content" },
  iframe: { cats: FPIE, content: "nothing", desc: "Inline frame" },
  img: { cats: FPE, content: "void", desc: "Image" },
  object: { cats: FPIE, content: "transparent", desc: "External object" },
  picture: { cats: FPE, content: "specific", children: ["source", "img", "script", "template"], desc: "Responsive image container" },
  svg: { cats: FPE, content: "specific", children: [], desc: "SVG vector graphic" },
  video: { cats: FPIE, content: "transparent", also: ["source", "track"], desc: "Video content" },
  // ── Sections & grouping (flow only) ──
  address: { cats: F, content: "flow", noDesc: ["@heading", "@sectioning", "header", "footer", "address"], desc: "Contact information" },
  article: { cats: FS, content: "flow", desc: "Independent article" },
  aside: { cats: FS, content: "flow", desc: "Tangential content" },
  blockquote: { cats: F, content: "flow", desc: "Block quotation" },
  div: { cats: F, content: "flow", desc: "Generic block container" },
  figure: { cats: F, content: "flow", also: ["figcaption"], desc: "Self-contained figure" },
  footer: { cats: F, content: "flow", noDesc: ["header", "footer", "main"], desc: "Section footer" },
  form: { cats: F, content: "flow", noDesc: ["form"], desc: "Input form" },
  header: { cats: F, content: "flow", noDesc: ["header", "footer", "main"], desc: "Section header" },
  hr: { cats: F, content: "void", desc: "Thematic break" },
  main: { cats: F, content: "flow", desc: "Main content" },
  nav: { cats: FS, content: "flow", desc: "Navigation links" },
  p: { cats: F, content: "phrasing", desc: "Paragraph" },
  pre: { cats: F, content: "phrasing", desc: "Preformatted text" },
  search: { cats: F, content: "flow", desc: "Search section" },
  section: { cats: FS, content: "flow", desc: "Generic section" },
  // ── Headings ──
  h1: { cats: FH, content: "phrasing", desc: "Heading level 1" },
  h2: { cats: FH, content: "phrasing", desc: "Heading level 2" },
  h3: { cats: FH, content: "phrasing", desc: "Heading level 3" },
  h4: { cats: FH, content: "phrasing", desc: "Heading level 4" },
  h5: { cats: FH, content: "phrasing", desc: "Heading level 5" },
  h6: { cats: FH, content: "phrasing", desc: "Heading level 6" },
  hgroup: { cats: FH, content: "specific", children: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "script", "template"], desc: "Heading group" },
  // ── Lists ──
  ul: { cats: F, content: "specific", children: ["li", "script", "template"], desc: "Unordered list" },
  ol: { cats: F, content: "specific", children: ["li", "script", "template"], desc: "Ordered list" },
  li: { cats: NONE, content: "flow", desc: "List item" },
  dl: { cats: F, content: "specific", children: ["dt", "dd", "div", "script", "template"], desc: "Description list" },
  dt: { cats: NONE, content: "flow", noDesc: ["@heading", "@sectioning", "header", "footer"], desc: "Description term" },
  dd: { cats: NONE, content: "flow", desc: "Description details" },
  menu: { cats: F, content: "specific", children: ["li", "script", "template"], desc: "Toolbar menu" },
  // ── Tables ──
  table: { cats: F, content: "specific", children: ["caption", "colgroup", "thead", "tbody", "tfoot", "tr", "script", "template"], desc: "Data table" },
  caption: { cats: NONE, content: "flow", noDesc: ["table"], desc: "Table caption" },
  colgroup: { cats: NONE, content: "specific", children: ["col", "template"], desc: "Column group" },
  col: { cats: NONE, content: "void", desc: "Table column" },
  thead: { cats: NONE, content: "specific", children: ["tr", "script", "template"], desc: "Table head group" },
  tbody: { cats: NONE, content: "specific", children: ["tr", "script", "template"], desc: "Table body group" },
  tfoot: { cats: NONE, content: "specific", children: ["tr", "script", "template"], desc: "Table foot group" },
  tr: { cats: NONE, content: "specific", children: ["td", "th", "script", "template"], desc: "Table row" },
  td: { cats: NONE, content: "flow", desc: "Table data cell" },
  th: { cats: NONE, content: "flow", noDesc: ["@heading", "@sectioning", "header", "footer"], desc: "Table header cell" },
  // ── Form-related ──
  fieldset: { cats: F, content: "flow", also: ["legend"], desc: "Form field group" },
  legend: { cats: NONE, content: "phrasing", also: ["h1", "h2", "h3", "h4", "h5", "h6", "hgroup"], desc: "Fieldset legend" },
  datalist: { cats: FP, content: "phrasing", also: ["option"], desc: "Predefined options" },
  optgroup: { cats: NONE, content: "specific", children: ["option", "script", "template"], desc: "Option group" },
  option: { cats: NONE, content: "text", desc: "Select option" },
  output: { cats: FP, content: "phrasing", desc: "Calculation result" },
  progress: { cats: FP, content: "phrasing", noDesc: ["progress"], desc: "Progress indicator" },
  meter: { cats: FP, content: "phrasing", noDesc: ["meter"], desc: "Scalar measurement" },
  // ── No-category children ──
  figcaption: { cats: NONE, content: "flow", desc: "Figure caption" },
  summary: { cats: NONE, content: "phrasing", also: ["h1", "h2", "h3", "h4", "h5", "h6", "hgroup"], desc: "Disclosure summary" },
  rt: { cats: NONE, content: "phrasing", desc: "Ruby text component" },
  rp: { cats: NONE, content: "text", desc: "Ruby fallback parenthesis" },
  source: { cats: NONE, content: "void", desc: "Media source" },
  track: { cats: NONE, content: "void", desc: "Timed text track" },
  // ── Scripting ──
  script: { cats: MFP, content: "text", desc: "Executable script" },
  noscript: { cats: MFP, content: "flow", desc: "No-script fallback" },
  template: { cats: MFP, content: "flow", desc: "Content template" },
  // ── Document structure ──
  html: { cats: NONE, content: "specific", children: ["head", "body"], desc: "Document root element" },
  head: { cats: NONE, content: "specific", children: ["title", "meta", "link", "style", "script", "noscript", "template", "base"], desc: "Document metadata container" },
  body: { cats: NONE, content: "flow", desc: "Document body" },
  title: { cats: NONE, content: "text", desc: "Document title" },
  base: { cats: NONE, content: "void", desc: "Base URL for relative URLs" },
  link: { cats: NONE, content: "void", desc: "External resource link" },
  meta: { cats: NONE, content: "void", desc: "Document metadata" },
  style: { cats: NONE, content: "text", desc: "Embedded CSS styles" },
  // ── Other ──
  map: { cats: FP, content: "transparent", desc: "Image map" },
  area: { cats: FP, content: "void", desc: "Image map region" },
  slot: { cats: FP, content: "transparent", desc: "Web component slot" }
};
const VOID_ELEMENTS = /* @__PURE__ */ new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "source",
  "track",
  "wbr"
]);
const displayTypes = {
  a: "inline",
  abbr: "inline",
  area: "inline",
  b: "inline",
  bdi: "inline",
  bdo: "inline",
  br: "inline",
  cite: "inline",
  code: "inline",
  data: "inline",
  datalist: "inline",
  del: "inline",
  dfn: "inline",
  em: "inline",
  i: "inline",
  ins: "inline",
  kbd: "inline",
  label: "inline",
  map: "inline",
  mark: "inline",
  meter: "inline",
  output: "inline",
  progress: "inline",
  q: "inline",
  ruby: "inline",
  rp: "inline",
  rt: "inline",
  s: "inline",
  samp: "inline",
  small: "inline",
  span: "inline",
  slot: "inline",
  strong: "inline",
  sub: "inline",
  sup: "inline",
  time: "inline",
  u: "inline",
  var: "inline",
  wbr: "inline",
  address: "block",
  article: "block",
  aside: "block",
  blockquote: "block",
  dd: "block",
  details: "block",
  dialog: "block",
  div: "block",
  dl: "block",
  dt: "block",
  fieldset: "block",
  figcaption: "block",
  figure: "block",
  footer: "block",
  form: "block",
  h1: "block",
  h2: "block",
  h3: "block",
  h4: "block",
  h5: "block",
  h6: "block",
  header: "block",
  hgroup: "block",
  hr: "block",
  legend: "block",
  main: "block",
  menu: "block",
  nav: "block",
  noscript: "block",
  ol: "block",
  optgroup: "block",
  option: "block",
  p: "block",
  pre: "block",
  search: "block",
  section: "block",
  summary: "block",
  ul: "block",
  audio: "inline-block",
  button: "inline-block",
  canvas: "inline-block",
  embed: "inline-block",
  iframe: "inline-block",
  img: "inline-block",
  input: "inline-block",
  object: "inline-block",
  picture: "inline-block",
  select: "inline-block",
  svg: "inline-block",
  textarea: "inline-block",
  video: "inline-block",
  table: "table",
  caption: "table",
  col: "table",
  colgroup: "table",
  thead: "table",
  tbody: "table",
  tfoot: "table",
  tr: "table",
  td: "table",
  th: "table",
  script: "none",
  template: "none",
  source: "none",
  track: "none",
  html: "block",
  head: "none",
  body: "block",
  title: "none",
  base: "none",
  link: "none",
  meta: "none",
  style: "none",
  li: "list-item"
};
function getDisplayType(tag) {
  return displayTypes[tag] || "block";
}
const BROWSER_NOTES = {
  "p,p": "The HTML parser auto-closes an open <code>&lt;p&gt;</code> when it encounters another <code>&lt;p&gt;</code> start tag. They become siblings, not nested.",
  "div,p": "Block elements like <code>&lt;div&gt;</code> trigger <code>&lt;p&gt;</code> auto-close because <code>&lt;p&gt;</code> only accepts phrasing content.",
  "ul,p": "<code>&lt;p&gt;</code> auto-closes when the parser encounters <code>&lt;ul&gt;</code> because lists are not phrasing content.",
  "ol,p": "<code>&lt;p&gt;</code> auto-closes when the parser encounters <code>&lt;ol&gt;</code> because lists are not phrasing content.",
  "table,p": "<code>&lt;p&gt;</code> auto-closes when the parser encounters <code>&lt;table&gt;</code> because tables are not phrasing content.",
  "h1,p": "<code>&lt;p&gt;</code> auto-closes when the parser encounters a heading because headings are not phrasing content.",
  "h2,p": "<code>&lt;p&gt;</code> auto-closes when the parser encounters a heading because headings are not phrasing content.",
  "h3,p": "<code>&lt;p&gt;</code> auto-closes when the parser encounters a heading because headings are not phrasing content.",
  "h4,p": "<code>&lt;p&gt;</code> auto-closes when the parser encounters a heading because headings are not phrasing content.",
  "h5,p": "<code>&lt;p&gt;</code> auto-closes when the parser encounters a heading because headings are not phrasing content.",
  "h6,p": "<code>&lt;p&gt;</code> auto-closes when the parser encounters a heading because headings are not phrasing content.",
  "a,a": "The parser closes the outer <code>&lt;a&gt;</code> before opening the inner one via the Adoption Agency Algorithm.",
  "button,button": "The parser auto-closes the outer <code>&lt;button&gt;</code> when it encounters another — interactive content cannot nest.",
  "a,button": "Interactive elements cannot nest. Browsers render this but event handling and accessibility become unpredictable.",
  "button,a": "Interactive elements cannot nest. Browsers render this but event handling and accessibility become unpredictable.",
  "form,form": "Nested forms are forbidden by the spec. The parser ignores the inner <code>&lt;form&gt;</code> tag entirely.",
  "label,label": "Nested labels create ambiguous associations — the browser cannot determine which form control each label targets.",
  "div,span": "The parser auto-closes <code>&lt;span&gt;</code> when it encounters block content like <code>&lt;div&gt;</code>. Inline elements cannot contain block elements.",
  "header,header": "Browsers render this but the semantics are invalid — <code>&lt;header&gt;</code> cannot be a descendant of another <code>&lt;header&gt;</code>.",
  "footer,footer": "Browsers render this but the semantics are invalid — <code>&lt;footer&gt;</code> cannot be a descendant of another <code>&lt;footer&gt;</code>."
};
const CATEGORY_LABELS = {
  flow: "flow",
  phrasing: "phrasing",
  interactive: "interactive",
  heading: "heading",
  sectioning: "sectioning",
  embedded: "embedded",
  metadata: "metadata"
};
function getMdnUrl(tag) {
  const headingTags = ["h1", "h2", "h3", "h4", "h5", "h6"];
  if (headingTags.includes(tag)) {
    return "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements";
  }
  return `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${tag}`;
}
function getExampleContent(tag) {
  const map = {
    a: "Link text",
    button: "Click me",
    p: "Hello world",
    span: "text",
    div: "...",
    h1: "Title",
    h2: "Subtitle",
    h3: "Heading",
    h4: "Heading",
    h5: "Heading",
    h6: "Heading",
    li: "Item",
    td: "Cell",
    th: "Header",
    em: "emphasized",
    strong: "important",
    code: "code()",
    pre: "preformatted text",
    blockquote: "A quote...",
    label: "Label text",
    caption: "Table caption",
    figcaption: "Figure caption",
    summary: "Summary text",
    legend: "Legend text",
    option: "Option",
    small: "fine print",
    cite: "Reference",
    q: "quote",
    abbr: "HTML",
    dfn: "term",
    kbd: "Enter",
    samp: "output",
    mark: "highlighted",
    time: "2025-01-01",
    data: "Value",
    b: "bold",
    i: "italic",
    s: "deleted",
    u: "annotated",
    sub: "sub",
    sup: "sup",
    var: "x",
    dt: "Term",
    dd: "Definition",
    output: "Result",
    nav: "...",
    header: "...",
    footer: "...",
    main: "...",
    section: "...",
    article: "...",
    aside: "...",
    form: "...",
    fieldset: "...",
    figure: "...",
    details: "...",
    dialog: "...",
    address: "...",
    search: "...",
    table: "...",
    thead: "...",
    tbody: "...",
    tfoot: "...",
    tr: "...",
    rt: "text",
    rp: "(",
    bdi: "text",
    bdo: "text",
    ruby: "漢字",
    meter: "",
    progress: "",
    select: "\n    <option>Option</option>\n  ",
    textarea: "Text content",
    ul: "\n    <li>Item</li>\n  ",
    ol: "\n    <li>Item</li>\n  ",
    dl: "\n    <dt>Term</dt>\n    <dd>Def</dd>\n  ",
    hgroup: "\n    <h2>Title</h2>\n  ",
    colgroup: "\n    <col />\n  ",
    picture: '\n    <img src="photo.jpg" alt="..." />\n  ',
    datalist: '\n    <option value="opt" />\n  ',
    optgroup: "\n    <option>Opt</option>\n  ",
    menu: "\n    <li>Action</li>\n  "
  };
  return map[tag] ?? "...";
}
function getExampleAttrs(tag) {
  const map = {
    a: ' href="#"',
    img: ' src="photo.jpg" alt="..."',
    input: ' type="text"',
    form: ' action="/submit"',
    iframe: ' src="page.html"',
    video: ' src="video.mp4" controls',
    audio: ' src="audio.mp3" controls',
    embed: ' src="file.pdf"',
    object: ' data="file.swf"',
    canvas: ' width="300" height="150"',
    source: ' src="media.mp4" type="video/mp4"',
    track: ' src="subs.vtt" kind="subtitles"',
    area: ' shape="rect" coords="0,0,50,50" href="#"',
    label: ' for="input-id"',
    select: "",
    textarea: ' rows="3"',
    meter: ' value="0.7"',
    progress: ' value="70" max="100"',
    time: ' datetime="2025-01-01"',
    data: ' value="42"',
    col: ' span="2"',
    link: ' rel="stylesheet" href="style.css"',
    meta: ' name="description" content="..."',
    script: ' type="module"',
    abbr: ' title="HyperText Markup Language"',
    blockquote: ' cite="https://example.com"',
    q: ' cite="https://example.com"',
    ol: ' type="1"'
  };
  return map[tag] ?? "";
}
function generateCodeExample(childTag, parentTag) {
  const childIsVoid = VOID_ELEMENTS.has(childTag);
  const parentIsVoid = VOID_ELEMENTS.has(parentTag);
  if (parentIsVoid) {
    return `<${parentTag}${getExampleAttrs(parentTag)} />
<!-- Void elements can't have children -->`;
  }
  const childStr = childIsVoid ? `<${childTag}${getExampleAttrs(childTag)} />` : `<${childTag}${getExampleAttrs(childTag)}>${getExampleContent(childTag)}</${childTag}>`;
  const parentAttrs = getExampleAttrs(parentTag);
  return `<${parentTag}${parentAttrs}>
  ${childStr}
</${parentTag}>`;
}
function formatSpecificChildren(children) {
  return children.filter((c) => c !== "script" && c !== "template").map((c) => `<${c}>`).join(", ");
}
function checkNesting(childTag, parentTag) {
  const parentDef = elements[parentTag];
  const childDef = elements[childTag];
  if (!parentDef || !childDef) {
    return {
      valid: "no",
      reason: "unknown",
      explanation: "One or both elements are not in our database.",
      codeExample: "",
      parentMdn: getMdnUrl(parentTag),
      childMdn: getMdnUrl(childTag)
    };
  }
  const code = generateCodeExample(childTag, parentTag);
  const noteKey = `${childTag},${parentTag}`;
  const browserNote = BROWSER_NOTES[noteKey];
  const baseMdns = { parentMdn: getMdnUrl(parentTag), childMdn: getMdnUrl(childTag) };
  if (parentDef.content === "void") {
    return {
      valid: "no",
      reason: "void",
      explanation: `<strong>&lt;${parentTag}&gt;</strong> is a void element and cannot have any children.`,
      codeExample: code,
      browserNote,
      ...baseMdns
    };
  }
  if (parentDef.content === "nothing") {
    return {
      valid: "no",
      reason: "nothing",
      explanation: `<strong>&lt;${parentTag}&gt;</strong> does not accept any content. Its content model is "nothing".`,
      codeExample: code,
      browserNote,
      ...baseMdns
    };
  }
  if (parentDef.content === "text") {
    return {
      valid: "no",
      reason: "text-only",
      explanation: `<strong>&lt;${parentTag}&gt;</strong> only accepts plain text content, not HTML elements.`,
      codeExample: code,
      browserNote,
      ...baseMdns
    };
  }
  if (parentDef.content === "specific") {
    if (parentDef.children?.length === 0) {
      return {
        valid: "no",
        reason: "own-content-model",
        explanation: `<strong>&lt;${parentTag}&gt;</strong> has its own content model and does not accept standard HTML elements as direct children.`,
        codeExample: code,
        browserNote,
        ...baseMdns
      };
    }
    if (!parentDef.children?.includes(childTag)) {
      const allowed = formatSpecificChildren(parentDef.children || []);
      return {
        valid: "no",
        reason: "not-allowed-child",
        explanation: `<strong>&lt;${parentTag}&gt;</strong> only accepts these direct children: ${allowed}. <strong>&lt;${childTag}&gt;</strong> is not in that list.`,
        codeExample: code,
        browserNote,
        ...baseMdns
      };
    }
    if (parentDef.noDesc) {
      const restriction = checkRestrictions(childTag, childDef, parentTag, parentDef);
      if (restriction) return { ...restriction, codeExample: code, browserNote, ...baseMdns };
    }
    return {
      valid: "yes",
      reason: "specific-child",
      explanation: `<strong>&lt;${childTag}&gt;</strong> is an allowed child of <strong>&lt;${parentTag}&gt;</strong>.`,
      codeExample: code,
      browserNote,
      ...baseMdns
    };
  }
  if (parentDef.content === "transparent") {
    if (parentDef.noDesc) {
      const restriction = checkRestrictions(childTag, childDef, parentTag, parentDef);
      if (restriction) return { ...restriction, codeExample: code, browserNote, ...baseMdns };
    }
    if (parentDef.also?.includes(childTag)) {
      return {
        valid: "yes",
        reason: "also-accepted",
        explanation: `<strong>&lt;${childTag}&gt;</strong> is explicitly allowed as a child of <strong>&lt;${parentTag}&gt;</strong>.`,
        codeExample: code,
        browserNote,
        ...baseMdns
      };
    }
    if (childDef.cats.includes("phrasing")) {
      return {
        valid: "yes",
        reason: "phrasing-in-transparent",
        explanation: `<strong>&lt;${childTag}&gt;</strong> is <em>phrasing</em> content, which is always valid inside <strong>&lt;${parentTag}&gt;</strong> (transparent content model).`,
        codeExample: code,
        browserNote,
        ...baseMdns
      };
    }
    if (childDef.cats.includes("flow")) {
      return {
        valid: "depends",
        reason: "transparent-context",
        explanation: `<strong>&lt;${parentTag}&gt;</strong> has a <em>transparent content model</em>: it inherits the content model of its parent. <strong>&lt;${childTag}&gt;</strong> is <em>flow</em> content (not <em>phrasing</em>), so it's only valid if <strong>&lt;${parentTag}&gt;</strong> is placed inside a flow content context (e.g. a &lt;div&gt;). If <strong>&lt;${parentTag}&gt;</strong> were inside a &lt;p&gt; or &lt;span&gt;, this would be invalid.`,
        codeExample: code,
        browserNote,
        ...baseMdns
      };
    }
    if (childDef.cats.length === 0) {
      return {
        valid: "no",
        reason: "no-category",
        explanation: `<strong>&lt;${childTag}&gt;</strong> does not belong to any standard content category. It can only be used as a child of specific elements (like &lt;${getTypicalParent(childTag)}&gt;).`,
        codeExample: code,
        browserNote,
        ...baseMdns
      };
    }
    return {
      valid: "depends",
      reason: "transparent-unknown",
      explanation: `<strong>&lt;${parentTag}&gt;</strong> has a transparent content model. The result depends on the context where <strong>&lt;${parentTag}&gt;</strong> is used.`,
      codeExample: code,
      browserNote,
      ...baseMdns
    };
  }
  if (parentDef.content === "flow") {
    const allowed = childDef.cats.includes("flow") || parentDef.also?.includes(childTag);
    if (!allowed) {
      if (childDef.cats.length === 0) {
        return {
          valid: "no",
          reason: "no-category",
          explanation: `<strong>&lt;${childTag}&gt;</strong> does not belong to any content category. It can only be used inside its specific parent (like &lt;${getTypicalParent(childTag)}&gt;), not inside <strong>&lt;${parentTag}&gt;</strong>.`,
          codeExample: code,
          browserNote,
          ...baseMdns
        };
      }
      return {
        valid: "no",
        reason: "not-flow",
        explanation: `<strong>&lt;${parentTag}&gt;</strong> accepts <em>flow</em> content, but <strong>&lt;${childTag}&gt;</strong> is not flow content.`,
        codeExample: code,
        browserNote,
        ...baseMdns
      };
    }
    if (parentDef.noDesc) {
      const restriction = checkRestrictions(childTag, childDef, parentTag, parentDef);
      if (restriction) return { ...restriction, codeExample: code, browserNote, ...baseMdns };
    }
    const catList = childDef.cats.map((c) => `<em>${CATEGORY_LABELS[c]}</em>`).join(", ");
    return {
      valid: "yes",
      reason: "flow-accepted",
      explanation: `<strong>&lt;${parentTag}&gt;</strong> accepts <em>flow</em> content and <strong>&lt;${childTag}&gt;</strong> is ${catList} content.`,
      codeExample: code,
      browserNote,
      ...baseMdns
    };
  }
  if (parentDef.content === "phrasing") {
    const allowed = childDef.cats.includes("phrasing") || parentDef.also?.includes(childTag);
    if (!allowed) {
      if (childDef.cats.includes("flow") && !childDef.cats.includes("phrasing")) {
        return {
          valid: "no",
          reason: "not-phrasing",
          explanation: `<strong>&lt;${parentTag}&gt;</strong> only accepts <em>phrasing</em> content (inline-level elements). <strong>&lt;${childTag}&gt;</strong> is <em>flow</em> content (block-level), not <em>phrasing</em>.`,
          codeExample: code,
          browserNote,
          ...baseMdns
        };
      }
      if (childDef.cats.length === 0) {
        return {
          valid: "no",
          reason: "no-category",
          explanation: `<strong>&lt;${childTag}&gt;</strong> does not belong to any content category. It can only be used inside its specific parent (like &lt;${getTypicalParent(childTag)}&gt;), not inside <strong>&lt;${parentTag}&gt;</strong>.`,
          codeExample: code,
          browserNote,
          ...baseMdns
        };
      }
      return {
        valid: "no",
        reason: "not-phrasing-generic",
        explanation: `<strong>&lt;${parentTag}&gt;</strong> only accepts <em>phrasing</em> content. <strong>&lt;${childTag}&gt;</strong> is not phrasing content.`,
        codeExample: code,
        browserNote,
        ...baseMdns
      };
    }
    if (parentDef.noDesc) {
      const restriction = checkRestrictions(childTag, childDef, parentTag, parentDef);
      if (restriction) return { ...restriction, codeExample: code, browserNote, ...baseMdns };
    }
    return {
      valid: "yes",
      reason: "phrasing-accepted",
      explanation: `<strong>&lt;${parentTag}&gt;</strong> accepts <em>phrasing</em> content and <strong>&lt;${childTag}&gt;</strong> is <em>phrasing</em> content.`,
      codeExample: code,
      browserNote,
      ...baseMdns
    };
  }
  return {
    valid: "no",
    reason: "unknown-model",
    explanation: "Could not determine the validity of this combination.",
    codeExample: code,
    browserNote,
    ...baseMdns
  };
}
function checkRestrictions(childTag, childDef, parentTag, parentDef) {
  if (!parentDef.noDesc) return null;
  for (const forbidden of parentDef.noDesc) {
    if (forbidden.startsWith("@")) {
      const category = forbidden.slice(1);
      if (childDef.cats.includes(category)) {
        return {
          valid: "no",
          reason: "forbidden-category",
          explanation: `<strong>&lt;${parentTag}&gt;</strong> cannot contain <em>${CATEGORY_LABELS[category]}</em> content descendants. <strong>&lt;${childTag}&gt;</strong> is <em>${CATEGORY_LABELS[category]}</em> content, so this combination is invalid.`
        };
      }
    } else if (forbidden === childTag) {
      return {
        valid: "no",
        reason: "forbidden-element",
        explanation: `<strong>&lt;${parentTag}&gt;</strong> cannot contain <strong>&lt;${childTag}&gt;</strong> as a descendant. This restriction is explicitly defined in the HTML specification.`
      };
    }
  }
  return null;
}
function getTypicalParent(tag) {
  const map = {
    li: "ul, ol",
    dt: "dl",
    dd: "dl",
    tr: "tbody, table",
    td: "tr",
    th: "tr",
    thead: "table",
    tbody: "table",
    tfoot: "table",
    caption: "table",
    colgroup: "table",
    col: "colgroup",
    option: "select",
    optgroup: "select",
    legend: "fieldset",
    figcaption: "figure",
    summary: "details",
    source: "video, audio, picture",
    track: "video, audio",
    rt: "ruby",
    rp: "ruby",
    head: "html",
    body: "html",
    title: "head",
    base: "head",
    link: "head",
    meta: "head",
    style: "head"
  };
  return map[tag] ?? "...";
}
function getElementsByCategory(category) {
  return Object.entries(elements).filter(([, def]) => def.cats.includes(category)).map(([tag]) => tag).sort();
}

export { VOID_ELEMENTS as V, getDisplayType as a, checkNesting as c, elements as e, getElementsByCategory as g };
