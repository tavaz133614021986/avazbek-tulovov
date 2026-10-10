/* =========================================================
   Avazbek Tulovov — main script
   ========================================================= */
(function () {
  const CFG = window.SITE_CONFIG || {};
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ui = k => window.I18N.ui(k);
  const pick = (o, f) => window.I18N.pick(o, f);

  /* ---------- Analytics (faqat ID berilganda) ---------- */
  function loadAnalytics() {
    if (CFG.GA_ID) {
      const s = document.createElement("script");
      s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(CFG.GA_ID);
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { dataLayer.push(arguments); };
      gtag("js", new Date()); gtag("config", CFG.GA_ID);
    }
    if (CFG.META_PIXEL_ID) {
      !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s) }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
      fbq("init", CFG.META_PIXEL_ID); fbq("track", "PageView");
    }
  }
  function track(name, params) {
    if (window.gtag) gtag("event", name, params || {});
    if (window.fbq) fbq("trackCustom", name, params || {});
  }

  /* ---------- Rasmlar: mavjud bo‘lsa yuklanadi, bo‘lmasa dizayn fon qoladi ---------- */
  function loadImages() {
    $$("[data-img]").forEach(el => {
      const img = new Image();
      img.onload = () => { el.style.backgroundImage = `url("${img.src}")`; el.classList.add("is-loaded"); };
      img.src = el.dataset.img;
    });
  }

  /* ---------- Hero video (faqat katta ekranda, fayl mavjud bo‘lsa) ---------- */
  function heroVideo() {
    const v = $(".hero__video");
    if (!v || reduced || innerWidth < 900 || (navigator.connection && navigator.connection.saveData)) return;
    fetch(v.dataset.src, { method: "HEAD" }).then(r => {
      if (!r.ok) return;
      v.src = v.dataset.src;
      v.addEventListener("canplay", () => v.classList.add("is-ready"), { once: true });
      v.play().catch(() => {});
    }).catch(() => {});
  }

  /* ---------- Nav ---------- */
  function nav() {
    const n = $("#nav"); if (!n) return;
    const isPage = document.body.classList.contains("page");
    let last = scrollY;
    const onScroll = () => {
      const y = scrollY;
      if (!isPage) n.classList.toggle("is-solid", y > innerHeight * 0.85);
      n.classList.toggle("is-hidden", y > 400 && y > last && !n.classList.contains("is-open"));
      last = y;
    };
    addEventListener("scroll", onScroll, { passive: true }); onScroll();

    const burger = $(".burger");
    burger && burger.addEventListener("click", () => {
      const open = n.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    $$(".mnav a").forEach(a => a.addEventListener("click", () => {
      n.classList.remove("is-open"); burger.setAttribute("aria-expanded", false); document.body.style.overflow = "";
    }));

    // Faol bo‘lim
    const links = $$(".nav__links a[href^='#']");
    if (!links.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) links.forEach(l => l.classList.toggle("is-active", l.getAttribute("href") === "#" + e.target.id));
    }), { rootMargin: "-45% 0px -50% 0px" });
    links.forEach(l => { const t = $(l.getAttribute("href")); t && io.observe(t); });
  }

  /* ---------- Scroll reveal ---------- */
  let revealIO;
  function reveal(scope = document) {
    const els = $$(".reveal:not(.is-in)", scope);
    if (reduced || !("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("is-in")); return; }
    revealIO = revealIO || new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-in"); revealIO.unobserve(e.target);
    }), { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    // Bir guruhdagi elementlar ketma-ket chiqadi
    const groups = new Map();
    els.forEach(el => {
      const p = el.parentElement; const i = groups.get(p) || 0; groups.set(p, i + 1);
      el.style.setProperty("--d", Math.min(i * 0.08, 0.48) + "s");
      revealIO.observe(el);
    });
  }

  /* ---------- Ekrandan tashqaridagi doimiy animatsiyalarni to‘xtatish ---------- */
  function pauseOffscreen() {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle("is-offscreen", !e.isIntersecting)));
    $$(".hero, .podcast").forEach(el => io.observe(el));
  }

  /* ---------- Counters ---------- */
  function counters() {
    const els = $$("[data-count]"); if (!els.length) return;
    const run = el => {
      const to = +el.dataset.count, from = el.hasAttribute("data-plain") ? to - 14 : 0, dur = 1600, t0 = performance.now();
      const step = t => {
        const p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.round(from + (to - from) * e);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (reduced || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } }), { threshold: 0.6 });
    els.forEach(el => io.observe(el));
  }

  /* ---------- Timeline progress + hero parallax ---------- */
  function scrollFx() {
    const tl = $("#timeline"), fill = $(".timeline__fill");
    const pattern = $(".hero__pattern"), content = $(".hero__content");
    let ticking = false;
    const update = () => {
      ticking = false;
      if (tl && fill) {
        const r = tl.getBoundingClientRect(), vh = innerHeight;
        const p = Math.min(Math.max((vh * 0.6 - r.top) / r.height, 0), 1);
        fill.style.height = (p * 100) + "%";
      }
      if (!reduced && content && scrollY < innerHeight) {
        const y = scrollY;
        content.style.transform = `translate3d(0, ${y * 0.25}px, 0)`;
        content.style.opacity = Math.max(1 - y / (innerHeight * 0.75), 0);
        if (pattern) pattern.style.translate = `0 ${y * 0.12}px`;
      }
    };
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  /* ---------- Social icons ---------- */
  const ICONS = {
    telegram: '<path fill="currentColor" d="M21.9 4.3 18.7 19.4c-.2 1.1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.3-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.2 13 1.4 11.5c-1-.3-1.1-1 .2-1.5L20.5 2.8c.9-.3 1.6.2 1.4 1.5Z"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor"/>',
    youtube: '<path fill="currentColor" d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .6 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-4.8 31 31 0 0 0-.4-4.8ZM9.7 15V9l5.8 3-5.8 3Z"/>',
    linkedin: '<path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4v-11Z"/>',
    facebook: '<path fill="currentColor" d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.25-1.46 1.5-1.46h1.55V4.47A20 20 0 0 0 14.3 4.3c-2.2 0-3.8 1.35-3.8 3.83v2.37H8v3h2.5V21h3Z"/>',
    x: '<path fill="currentColor" d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z"/>'
  };
  function socials() {
    const s = CFG.SOCIAL || {};
    const box = $("#socials");
    if (box) box.innerHTML = Object.keys(ICONS).filter(k => s[k]).map(k =>
      `<a href="${esc(s[k])}" target="_blank" rel="noopener" aria-label="${k}"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[k]}</svg></a>`).join("");
    $$("[data-social]").forEach(a => {
      const url = s[a.dataset.social];
      if (url) a.href = url; else if (a.dataset.social === "youtube") a.href = "#media";
      if (!url) a.removeAttribute("target");
    });
  }

  /* ---------- Data ---------- */
  const cache = {};
  function getJSON(url) {
    return cache[url] = cache[url] || fetch(url, { cache: "no-cache" }).then(r => r.ok ? r.json() : {}).catch(() => ({}));
  }
  const UZ_MONTHS = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"];
  function fmtDate(d) {
    if (!d) return "";
    const dt = new Date(d); if (isNaN(dt)) return d;
    const L = window.I18N.lang;
    if (L === "uz") return `${dt.getDate()}-${UZ_MONTHS[dt.getMonth()]}, ${dt.getFullYear()}`;
    return dt.toLocaleDateString(L === "ru" ? "ru-RU" : "en-US", { day: "numeric", month: "long", year: "numeric" });
  }
  const readTime = t => Math.max(1, Math.round(String(t || "").split(/\s+/).length / 200));
  const sortByDate = arr => arr.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

  /* ---------- Media ---------- */
  let mediaFilter = "all";
  function ytId(u) {
    if (!u) return "";
    const m = String(u).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
    return m ? m[1] : (/^[\w-]{11}$/.test(u) ? u : "");
  }
  function renderMedia() {
    const grid = $("#mediaGrid"); if (!grid) return;
    getJSON("content/media.json").then(data => {
      const items = sortByDate((data.items || []).filter(i => mediaFilter === "all" || i.type === mediaFilter));
      if (!items.length) { grid.innerHTML = `<p class="empty">${ui("empty")}</p>`; return; }
      grid.innerHTML = items.slice(0, 9).map((it, i) => {
        const id = ytId(it.youtube);
        const thumb = it.thumbnail || (id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : "");
        const title = esc(pick(it, "title"));
        const href = it.url || (id ? `https://www.youtube.com/watch?v=${id}` : "#");
        return `<article class="mcard" style="animation-delay:${i * 60}ms">
          <div class="mcard__thumb">
            ${thumb ? `<img src="${esc(thumb)}" alt="${title}" loading="lazy" decoding="async">` : `<span class="mcard__ph">${esc((ui("types")[it.type] || "").slice(0, 2))}</span>`}
            ${id ? `<button class="mcard__play" data-yt="${id}" aria-label="${ui("watch")}: ${title}"><svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg></button>` : ""}
          </div>
          <div class="mcard__meta"><span>${esc(ui("types")[it.type] || it.type)}</span>${it.date ? `<span>· ${fmtDate(it.date)}</span>` : ""}</div>
          <h3>${id ? title : `<a href="${esc(href)}" target="_blank" rel="noopener">${title}</a>`}</h3>
        </article>`;
      }).join("");
    });
  }
  function mediaEvents() {
    const tabs = $("#mediaTabs");
    tabs && tabs.addEventListener("click", e => {
      const b = e.target.closest("button[data-filter]"); if (!b) return;
      $$("button", tabs).forEach(x => x.classList.toggle("is-active", x === b));
      mediaFilter = b.dataset.filter; renderMedia();
    });
    document.addEventListener("click", e => {
      const b = e.target.closest("[data-yt]"); if (!b) return;
      const box = b.parentElement;
      box.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${b.dataset.yt}?autoplay=1&rel=0" title="YouTube" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
      track("media_play", { video: b.dataset.yt });
    });
  }

  /* ---------- Blog ---------- */
  let postFilter = "all";
  function postCard(p, i) {
    const body = pick(p, "body");
    return `<a class="bcard" href="post.html?slug=${encodeURIComponent(p.slug)}" style="animation-delay:${i * 70}ms">
      ${p.cover ? `<div class="bcard__cover" style="background-image:url('${esc(p.cover)}')"></div>` : ""}
      <div class="bcard__meta"><span class="bcard__cat">${esc(ui("cats")[p.category] || p.category || "")}</span><span>${readTime(body)} ${ui("minRead")}</span></div>
      <h3>${esc(pick(p, "title"))}</h3>
      <p>${esc(pick(p, "excerpt"))}</p>
      <span class="link-arrow">${ui("readMore")}</span>
    </a>`;
  }
  function renderPosts() {
    const latest = $("#latestPosts"), all = $("#allPosts"), article = $("#article");
    if (!latest && !all && !article) return;
    getJSON("content/posts.json").then(data => {
      const posts = sortByDate((data.posts || []).filter(p => !p.draft));
      if (latest) latest.innerHTML = posts.length ? posts.slice(0, 3).map(postCard).join("") : `<p class="empty">${ui("empty")}</p>`;
      if (all) {
        const f = $("#postFilters");
        if (f) {
          const cats = ["all"].concat(Object.keys(ui("cats")).filter(c => posts.some(p => p.category === c)));
          f.innerHTML = cats.map(c => `<button data-cat="${c}" class="${c === postFilter ? "is-active" : ""}">${c === "all" ? ui("all") : ui("cats")[c]}</button>`).join("");
        }
        const list = posts.filter(p => postFilter === "all" || p.category === postFilter);
        all.innerHTML = list.length ? list.map(postCard).join("") : `<p class="empty">${ui("empty")}</p>`;
      }
      if (article) renderArticle(article, posts);
    });
  }
  function renderArticle(el, posts) {
    const slug = new URLSearchParams(location.search).get("slug");
    const p = posts.find(x => x.slug === slug);
    if (!p) { el.innerHTML = `<a class="back" href="insights.html" data-i18n="blog.back">${esc(backLabel())}</a><p class="empty">${ui("notFound")}</p>`; return; }
    const title = pick(p, "title"), excerpt = pick(p, "excerpt"), body = pick(p, "body");
    const md = window.marked ? window.marked.parse(body) : esc(body).replace(/\n/g, "<br>");
    const html = window.DOMPurify ? window.DOMPurify.sanitize(md) : md;
    el.innerHTML = `
      <a class="back" href="insights.html">${esc(backLabel())}</a>
      <div class="article__meta"><span>${esc(ui("cats")[p.category] || "")}</span><span>${fmtDate(p.date)}</span><span>${readTime(body)} ${ui("minRead")}</span></div>
      <h1>${esc(title)}</h1>
      ${excerpt ? `<p class="article__excerpt">${esc(excerpt)}</p>` : ""}
      ${p.cover ? `<img class="article__cover" src="${esc(p.cover)}" alt="${esc(title)}">` : ""}
      <div class="article__body">${html}</div>`;
    document.title = title + " — Avazbek Tulovov";
    const d = $('meta[name="description"]'); if (d) d.content = excerpt;
    upsertLd({ "@context": "https://schema.org", "@type": "Article", headline: title, description: excerpt, datePublished: p.date, inLanguage: window.I18N.lang, author: { "@type": "Person", name: "Avazbek Tulovov", url: "https://mysite.uz/" } });
  }
  function backLabel() { return { uz: "← Barcha maqolalar", ru: "← Все статьи", en: "← All articles" }[window.I18N.lang]; }
  function upsertLd(obj) {
    let s = $("#ld-article");
    if (!s) { s = document.createElement("script"); s.type = "application/ld+json"; s.id = "ld-article"; document.head.appendChild(s); }
    s.textContent = JSON.stringify(obj);
  }
  function postEvents() {
    const f = $("#postFilters");
    f && f.addEventListener("click", e => {
      const b = e.target.closest("button[data-cat]"); if (!b) return;
      postFilter = b.dataset.cat; renderPosts();
    });
  }

  /* ---------- Contact form (Netlify Forms, AJAX) ---------- */
  function form() {
    const f = $("#contactForm"); if (!f) return;
    const status = $("#formStatus");
    f.addEventListener("submit", e => {
      e.preventDefault();
      const btn = f.querySelector("button[type=submit]"); btn.disabled = true;
      fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(new FormData(f)).toString() })
        .then(r => { if (!r.ok) throw 0; status.textContent = ui("sent"); f.reset(); track("contact_submit"); if (window.fbq) fbq("track", "Lead"); })
        .catch(() => { status.innerHTML = esc(ui("sendError")); })
        .finally(() => { btn.disabled = false; });
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener("langchange", () => { renderMedia(); renderPosts(); });
  document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.classList.remove("no-js");
    loadAnalytics(); loadImages(); nav(); socials(); mediaEvents(); postEvents(); form();
    reveal(); counters(); scrollFx(); heroVideo(); pauseOffscreen();
    const y = $("#year"); if (y) y.textContent = new Date().getFullYear();
    requestAnimationFrame(() => setTimeout(() => document.body.classList.add("is-loaded"), 80));
  });
})();
