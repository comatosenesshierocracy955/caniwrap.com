import{g as _,e as b,c as D,T as N,E as j,a as V,V as O,b as q}from"./html-nesting.Bq7XjhV2.js";const h=document.getElementById("child-input"),m=document.getElementById("parent-input"),w=document.getElementById("child-wrapper"),y=document.getElementById("parent-wrapper"),U=document.getElementById("child-dropdown"),W=document.getElementById("parent-dropdown"),f=document.getElementById("result"),C=document.getElementById("swap-btn"),A=document.getElementById("reset-btn");let i=null,o=null,I=0;const B=_();function x(e){const t=a=>a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return e.replace(/(<!--[\s\S]*?-->)|(<\/?)(\w[\w-]*)((?:\s+[\w-]+(?:="[^"]*")?)*)\s*(\/?>)/g,(a,r,d,l,u,v)=>{if(r)return`<span class="hl-comment">${t(r)}</span>`;const g=(u||"").replace(/([\w-]+)(="[^"]*")?/g,(s,n,c)=>{if(!n)return t(s);let p=`<span class="hl-attr">${t(n)}</span>`;if(c){const M=c.slice(1);p+=`=<span class="hl-string">${t(M)}</span>`}return p});return`${t(d)}<span class="hl-tag">${t(l)}</span>${g}${t(v)}`})}function P(e,t,a,r,d){let l=-1;function u(s=""){const n=s.toLowerCase().trim(),c=n?B.filter(p=>p.startsWith(n)||b[p].desc.toLowerCase().includes(n)):B;if(c.length===0||c.length===1&&c[0]===n){a.classList.add("hidden"),e.setAttribute("aria-expanded","false"),e.removeAttribute("aria-activedescendant");return}l=-1,e.removeAttribute("aria-activedescendant"),a.innerHTML=c.map(p=>`<div role="option" id="${r}-opt-${p}" class="autocomplete-option" data-tag="${p}">
            <span class="tag-name"><span class="tag-bracket">&lt;</span><span class="tag-el">${p}</span><span class="tag-bracket">&gt;</span></span>
            <span class="tag-desc">${b[p].desc}</span>
          </div>`).join(""),a.classList.remove("hidden"),e.setAttribute("aria-expanded","true")}function v(s){e.value=s,t.classList.add("has-value"),a.classList.add("hidden"),e.setAttribute("aria-expanded","false"),e.removeAttribute("aria-activedescendant"),d(s),T()}e.addEventListener("input",()=>{const s=e.value.toLowerCase().trim();t.classList.toggle("has-value",s.length>0),u(e.value),b[s]&&(d(s),T())}),e.addEventListener("focus",()=>u(e.value)),e.addEventListener("keydown",s=>{const n=a.querySelectorAll(".autocomplete-option");if(s.key==="ArrowDown")s.preventDefault(),l=Math.min(l+1,n.length-1),g(n);else if(s.key==="ArrowUp")s.preventDefault(),l=Math.max(l-1,0),g(n);else if(s.key==="Enter")if(s.preventDefault(),l>=0&&n[l]){const c=n[l].dataset.tag;v(c)}else{const c=e.value.toLowerCase().trim();b[c]&&v(c)}else s.key==="Escape"&&(a.classList.add("hidden"),e.setAttribute("aria-expanded","false"),e.removeAttribute("aria-activedescendant"))});function g(s){s.forEach((n,c)=>n.classList.toggle("active",c===l)),l>=0&&s[l]?(s[l].scrollIntoView({block:"nearest"}),e.setAttribute("aria-activedescendant",s[l].id)):e.removeAttribute("aria-activedescendant")}return a.addEventListener("click",s=>{const n=s.target.closest("[data-tag]");n&&v(n.dataset.tag)}),document.addEventListener("click",s=>{!e.contains(s.target)&&!a.contains(s.target)&&(a.classList.add("hidden"),e.setAttribute("aria-expanded","false"))}),{selectTag:v}}function L(){if(!i||!o){f.innerHTML="";return}const e=D(i,o);Q(e,i,o),Y(),T()}function Y(){if(!i||!o)return;const e=new URL(window.location.href);e.searchParams.set("child",i),e.searchParams.set("parent",o),window.history.replaceState({},"",e.toString()),document.title=`Can <${i}> go inside <${o}>? — Can I Wrap?`}function T(){const e=!!i||!!o||h.value.trim()!==""||m.value.trim()!=="";A.classList.toggle("hidden",!e)}function K(){i=null,o=null,h.value="",m.value="",w.classList.remove("has-value"),y.classList.remove("has-value"),h.setAttribute("aria-expanded","false"),m.setAttribute("aria-expanded","false"),h.removeAttribute("aria-activedescendant"),m.removeAttribute("aria-activedescendant"),f.innerHTML="",A.classList.add("hidden");const e=new URL(window.location.href);e.searchParams.delete("child"),e.searchParams.delete("parent"),window.history.replaceState({},"",e.toString()),document.title="Can I Wrap? — HTML Element Nesting Checker"}async function G(){const e=f.querySelector(".copy-link-btn");if(e)try{await navigator.clipboard.writeText(window.location.href);const t=e.innerHTML;e.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg> Copied!',setTimeout(()=>{e.innerHTML=t},2e3)}catch{}}async function F(){const e=f.querySelector(".share-til-btn");if(!e||!i||!o)return;const t=D(i,o),a=t.valid==="yes"?"can":t.valid==="no"?"can't":"might be able to",r=t.valid==="yes"?"✅":t.valid==="no"?"🤯":"🤔",d=`TIL you ${a} put a <${i}> inside a <${o}> in HTML ${r}

${window.location.href}`;try{await navigator.clipboard.writeText(d);const l=e.innerHTML;e.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg> Copied!',setTimeout(()=>{e.innerHTML=l},2e3)}catch{}}const S={inline:{label:"Inline",color:"#0369a1"},block:{label:"Block",color:"#c2410c"},"inline-block":{label:"Inline replaced",color:"#7c3aed"},table:{label:"Table",color:"#0f766e"},"list-item":{label:"List item",color:"#b45309"},none:{label:"Hidden",color:"#78716c"}},z={flow:"Flow content",phrasing:"Phrasing content",transparent:"Transparent (inherits parent)",void:"No children (void)",text:"Text only",nothing:"No content",specific:"Specific children only"};function H(e,t){const a=b[e],r=q(e),d=S[r]||S.block,l=O.has(e),u=z[a.content]||a.content,v=a.cats.length>0?a.cats.map(n=>`<a href="#${n}" class="el-cat-badge">${n}</a>`).join(""):'<span class="el-cat-badge el-cat-none">no category</span>',g=t==="parent"?`<div class="el-card-model">
        <span class="el-card-model-label">Accepts</span>
        <span class="el-card-model-value">${u}</span>
      </div>`:"";return`
    <div class="el-card" data-role="${t}">
      <span class="el-card-role">${t==="parent"?"Parent":"Child"}</span>
      <div class="el-card-top">
        <span class="el-card-tag">&lt;${e}&gt;</span>
        <span class="el-card-display" style="--dc: ${d.color}">${d.label}</span>
      </div>
      <span class="el-card-desc">${a.desc}${l?' · <span class="el-void">void</span>':""}</span>
      <div class="el-card-cats">${v}</div>
      ${g}
    </div>
  `}function J(e,t,a){const r=V(e,t);if(!r&&!a)return"";const d=r?`
    <div class="browser-parsing-diff">
      <div class="browser-parsing-panel">
        <div class="browser-parsing-label">Your code</div>
        <pre class="browser-parsing-code"><code>${x(r.wrote)}</code></pre>
      </div>
      <div class="browser-parsing-arrow">→</div>
      <div class="browser-parsing-panel">
        <div class="browser-parsing-label">Resulting DOM</div>
        <pre class="browser-parsing-code"><code>${x(r.sees)}</code></pre>
      </div>
    </div>
  `:"";return`
    <div class="browser-parsing">
      <div class="browser-parsing-header">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
        How the browser handles this
      </div>
      ${a?`<p class="browser-parsing-note">${a}</p>`:""}
      ${d}
    </div>
  `}function Q(e,t,a){const r=e.valid==="yes"?"result-yes":e.valid==="no"?"result-no":"result-depends",d=e.valid==="yes"?"✓":e.valid==="no"?"✗":"?",l=e.valid==="yes"?"Yes, you can!":e.valid==="no"?"No, you can't":"It depends on context",u=e.valid==="yes"?"Valid HTML":e.valid==="no"?"Invalid HTML":"Context-dependent",v=["flow","phrasing","interactive","heading","sectioning","embedded"],g=e.explanation.replace(/<em>(\w+)<\/em>/g,(X,k)=>v.includes(k)?`<a href="#${k}" class="cat-link">${k}</a>`:`<em>${k}</em>`),s=`${t},${a}`,n=j[s],c=N.has(s),p=J(t,a,e.browserNote),M=c?'<span class="tricky-badge"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 9l.01 0" /><path d="M15 9l.01 0" /><path d="M10 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /></svg> Tricky!</span>':"";f.innerHTML=`
    <div class="result-card ${r}">
      <div class="verdict"><span class="verdict-icon">${d}</span> ${l}${M}</div>
      ${n?`<div class="easter-egg">${n}</div>`:""}
      <p class="explanation">${g}</p>

      <div class="el-cards">
        ${H(a,"parent")}
        ${H(t,"child")}
      </div>

      ${p}
      ${e.codeExample?`<div class="code-block">
              <div class="code-header">${u}</div>
              <pre><code>${x(e.codeExample)}</code></pre>
            </div>`:""}
      <div class="references">
        <a href="${e.childMdn}" target="_blank" rel="noopener">MDN: &lt;${t}&gt; ↗</a>
        <a href="${e.parentMdn}" target="_blank" rel="noopener">MDN: &lt;${a}&gt; ↗</a>
        <button type="button" class="copy-link-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
          Copy link
        </button>
        <button type="button" class="share-til-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
          Share TIL
        </button>
      </div>
    </div>
  `}f.addEventListener("click",e=>{e.target.closest(".copy-link-btn")?G():e.target.closest(".share-til-btn")&&F()});P(h,w,U,"child",e=>{i=e,L()});P(m,y,W,"parent",e=>{o=e,L()});C.addEventListener("click",()=>{I+=180;const e=C.querySelector("svg");e&&(e.style.transform=`rotate(${I}deg)`);const t=i;i=o,o=t,h.value=i||"",m.value=o||"",w.classList.toggle("has-value",!!i),y.classList.toggle("has-value",!!o),L()});A.addEventListener("click",K);document.querySelectorAll("[data-check]").forEach(e=>{e.addEventListener("click",()=>{const[t,a]=e.dataset.check.split(",");i=t,o=a,h.value=t,m.value=a,w.classList.add("has-value"),y.classList.add("has-value"),L(),f.scrollIntoView({behavior:"smooth",block:"nearest"})})});document.querySelectorAll(".cat-tag[data-child]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.child;i=t,h.value=t,w.classList.add("has-value"),o&&L(),T(),h.focus(),window.scrollTo({top:0,behavior:"smooth"})})});const R=new URLSearchParams(window.location.search),$=R.get("child"),E=R.get("parent");$&&E&&b[$]&&b[E]&&(i=$,o=E,h.value=$,m.value=E,w.classList.add("has-value"),y.classList.add("has-value"),L());
