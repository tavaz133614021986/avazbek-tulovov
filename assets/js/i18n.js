/* =========================================================
   I18N — UZ / RU / EN
   O‘zbekcha matn HTML ichida yozilgan (asl manba).
   Bu yerda faqat rus va ingliz tarjimalari + dinamik UI matnlari.
   ========================================================= */
(function () {
  const DICT = {
    ru: {
      "meta.title": "Авазбек Туловов — предприниматель в образовании, основатель Registan",
      "meta.desc": "Авазбек Туловов — основатель образовательных проектов Registan, предприниматель и стратег. Строит современную образовательную экосистему Узбекистана.",

      "nav.about": "Обо мне", "nav.journey": "Путь", "nav.projects": "Проекты", "nav.vision": "Видение",
      "nav.media": "Медиа", "nav.insights": "Мысли", "nav.contact": "Связаться",

      "hero.eyebrow": "Основатель Registan · Ташкент, Узбекистан",
      "hero.cta1": "Обо мне", "hero.cta2": "Мои проекты",

      "about.eyebrow": "01 — История основателя",
      "about.title": "От одного учебного центра — к целой образовательной экосистеме.",
      "about.p1": "В 2014 году Registan начинался как небольшой учебный центр. Цель была простой: давать ученику не обещания, а реальный результат.",
      "about.p2": "Уже тогда Авазбек Туловов понял главное: образование — это не просто услуга, а ответственность, влияющая на судьбы поколений. Поэтому Registan с самого начала строился как система — на чётких стандартах, измеримых результатах и сильных преподавателях.",
      "about.p3": "Сегодня Registan — одна из крупнейших образовательных сетей Узбекистана: десятки филиалов, тысячи учеников и сеть современных частных школ. Но главное достижение не в цифрах, а в масштабируемой модели качества, которая опирается на процессы, а не на отдельных людей.",
      "about.p4": "Сегодня Авазбек Туловов как предприниматель, стратег и руководитель ищет ответ на один вопрос: <em>какая система образования нужна, чтобы молодёжь Узбекистана могла конкурировать в лучших университетах и компаниях мира?</em>",
      "stats.s1": "год основания Registan", "stats.s2": "лет опыта управления в образовании",
      "stats.s3": "филиалов — стратегическая цель до 2031 года", "stats.n4": "Тысячи", "stats.s4": "учеников обучаются в системе Registan",

      "focus.eyebrow": "02 — Профессиональные направления",
      "focus.title": "Пять направлений, на которых строятся большие системы.",
      "focus.f1": "Создание и масштабирование новых проектов в сфере образования.",
      "focus.f2": "Стратегия, система управления и KPI для крупных образовательных организаций.",
      "focus.f3": "Модель современной частной школы, академическое качество и результаты учеников.",
      "focus.f4": "Развитие руководителей и нового поколения молодых лидеров.",
      "focus.f5": "Эффективное управление образовательными организациями через CRM, LMS, аналитику и искусственный интеллект.",
      "focus.f6t": "Сотрудничество", "focus.f6": "Обращайтесь по стратегическим проектам, консалтингу и партнёрству.", "focus.f6cta": "Связаться",

      "journey.eyebrow": "03 — Мой путь", "journey.title": "Более десяти лет последовательного пути.",
      "journey.t1": "Основан Registan Learning Center",
      "journey.d1": "Первый центр по английскому языку, IELTS, математике и подготовке абитуриентов. Здесь родилась модель образования, ориентированная на результат.",
      "journey.y2": "Следующие годы", "journey.t2": "Расширение в новые города и регионы",
      "journey.d2": "Registan стал крупной образовательной сетью с десятками филиалов, работающих по единому стандарту качества.",
      "journey.t3": "Создана сеть частных школ",
      "journey.d3": "Современная модель школы для воспитания самостоятельно мыслящих лидеров, способных конкурировать на международном уровне.",
      "journey.t4": "Международные образовательные направления",
      "journey.d4": "Развиваются направления Cambridge, IELTS, SAT, IGCSE и A-Level.",
      "journey.t5": "Экосистема — на новый уровень",
      "journey.d5": "100+ филиалов и дальнейшее расширение образовательной экосистемы Registan в Узбекистане и за рубежом.",

      "projects.eyebrow": "04 — Проекты", "projects.title": "Проекты, которые строят будущее образования.",
      "projects.rl": "Ключевой результат", "projects.more": "Подробнее",
      "projects.k1": "Сеть учебных центров",
      "projects.d1": "Одна из крупнейших образовательных сетей Узбекистана: английский язык, IELTS, математика, подготовка к поступлению в университеты и международным экзаменам.",
      "projects.r1": "Десятки филиалов · тысячи учеников · цель 2031 — 100+ филиалов",
      "projects.k2": "Сеть частных школ",
      "projects.d2": "Современная школа, объединяющая национальную программу и международные стандарты. Цель — воспитать не просто отличников, а самостоятельно мыслящих лидеров.",
      "projects.r2": "Системное поступление выпускников в ведущие университеты мира",
      "projects.k3": "Проект глубоких бесед",
      "projects.d3": "Глубокие беседы с предпринимателями, учёными, учителями и людьми, влияющими на общество, — о первых шагах за большими результатами.",
      "projects.r3": "Источник вдохновения и реального опыта для нового поколения",
      "projects.k4": "Международное образование",
      "projects.d4": "Развитие программ Cambridge, IELTS, SAT, IGCSE и A-Level в Узбекистане и системная подготовка молодёжи к поступлению в ведущие университеты мира.",
      "projects.r4": "Образование международного уровня — в самом Узбекистане",

      "phil.eyebrow": "05 — Философия образования",
      "phil.intro": "Для Авазбека Туловова образование — не просто бизнес. Знания, труд, потенциал и результат должны стоять выше финансовых возможностей.",
      "phil.p1": "Качество важнее количества.", "phil.p2": "Сильное образование начинается с сильного учителя.",
      "phil.p3": "Результат должен быть измеримым.", "phil.p4": "Система должна опираться не на людей, а на чёткие стандарты и процессы.",
      "phil.p5": "Готовить ребёнка нужно не только к экзамену, но и к жизни.", "phil.p6": "Школа формирует не только знания, но и дисциплину, ответственность и лидерство.",

      "vision.eyebrow": "06 — Видение",
      "vision.text": "Образование будущего — это сочетание масштабируемого качества, сильных учителей и технологий. Цель Авазбека Туловова — построить систему, в которой молодёжь Узбекистана сможет конкурировать в любой точке мира.",
      "vision.v1": "Масштабировать качественное образование", "vision.v2": "Создать поколение сильных учителей",
      "vision.v3": "Развивать международное образование в Узбекистане", "vision.v4": "Повышать качество обучения с помощью технологий и AI",
      "vision.v5": "Готовить молодёжь Узбекистана к лучшим университетам мира",

      "podcast.lead": "Глубокие беседы о том, какие первые шаги, решения, ошибки и ценности стоят за большими результатами.",
      "podcast.g1": "Предприниматели", "podcast.g2": "Учёные", "podcast.g3": "Учителя", "podcast.g4": "Представители религиозной и просветительской сферы",
      "podcast.g5": "Спортсмены", "podcast.g6": "Люди, влияющие на общество",
      "podcast.yt": "Смотреть на YouTube", "podcast.all": "Все выпуски",

      "media.eyebrow": "08 — Медиа", "media.title": "Беседы, выступления и публикации.",
      "media.all": "Все", "media.interview": "Интервью", "media.talk": "Выступления", "media.article": "Статьи", "media.event": "Мероприятия",

      "insights.eyebrow": "09 — Insights", "insights.title": "Мысли об образовании, бизнесе и лидерстве.", "insights.all": "Все статьи",

      "contact.eyebrow": "10 — Контакты", "contact.title": "Давайте строить вместе.",
      "contact.lead": "Для сотрудничества, медиа и профессиональных обращений.",
      "contact.name": "Имя", "contact.email": "Email или телефон", "contact.topic": "Тип обращения", "contact.message": "Сообщение",
      "contact.o1": "Сотрудничество", "contact.o2": "Медиа и интервью", "contact.o3": "Выступление / мероприятие", "contact.o4": "Профессиональная консультация", "contact.o5": "Другое",
      "contact.send": "Отправить",

      "footer.tag": "Предприниматель в образовании · Основатель Registan", "footer.rights": "Все права защищены.",

      "blog.title": "Insights", "blog.lead": "Статьи и мысли Авазбека Туловова об образовании, бизнесе, менеджменте, воспитании детей, лидерстве и личном развитии.",
      "blog.back": "← Все статьи", "blog.home": "← На главную"
    },

    en: {
      "meta.title": "Avazbek Tulovov — Education Entrepreneur, Founder of Registan",
      "meta.desc": "Avazbek Tulovov — founder of Registan education projects, education entrepreneur and strategist building a modern education ecosystem in Uzbekistan.",

      "nav.about": "About", "nav.journey": "Journey", "nav.projects": "Projects", "nav.vision": "Vision",
      "nav.media": "Media", "nav.insights": "Insights", "nav.contact": "Contact",

      "hero.eyebrow": "Founder of Registan · Tashkent, Uzbekistan",
      "hero.cta1": "About Me", "hero.cta2": "My Projects",

      "about.eyebrow": "01 — Founder story",
      "about.title": "From a single learning center to an entire education ecosystem.",
      "about.p1": "In 2014, Registan began as a small learning center. The goal was simple: give students real results, not promises.",
      "about.p2": "Even then, Avazbek Tulovov understood one thing clearly: education is not just a service — it is a responsibility that shapes the lives of generations. That is why Registan was built as a system from day one — on clear standards, measurable results and strong teachers.",
      "about.p3": "Today Registan is one of the largest education networks in Uzbekistan: dozens of branches, thousands of students and a growing network of modern private schools. But the real achievement is not the numbers — it is a scalable model of quality built on processes, not on individuals.",
      "about.p4": "Today, as an entrepreneur, strategist and leader, Avazbek Tulovov is focused on one question: <em>what kind of education system does Uzbekistan need for its young people to compete at the world’s best universities and companies?</em>",
      "stats.s1": "Registan founded", "stats.s2": "years leading education organizations",
      "stats.s3": "branches — strategic goal by 2031", "stats.n4": "Thousands", "stats.s4": "of students learning within the Registan system",

      "focus.eyebrow": "02 — Areas of expertise",
      "focus.title": "Five disciplines behind building large systems.",
      "focus.f1": "Creating and scaling new ventures in education.",
      "focus.f2": "Strategy, management systems and KPIs for large education organizations.",
      "focus.f3": "Modern private school models, academic quality and student outcomes.",
      "focus.f4": "Developing executives and the next generation of young leaders.",
      "focus.f5": "Running education organizations more effectively with CRM, LMS, analytics and AI.",
      "focus.f6t": "Partnership", "focus.f6": "Reach out about strategic projects, advisory and partnerships.", "focus.f6cta": "Get in touch",

      "journey.eyebrow": "03 — My Journey", "journey.title": "More than a decade of consistent building.",
      "journey.t1": "Registan Learning Center founded",
      "journey.d1": "The first center for English, IELTS, mathematics and university admissions prep — where the results-driven education model was born.",
      "journey.y2": "The years that followed", "journey.t2": "Expansion to new cities and regions",
      "journey.d2": "Registan grew into a major education network with dozens of branches running on a single quality standard.",
      "journey.t3": "A network of private schools",
      "journey.d3": "A modern school model raising independent thinkers and leaders who can compete internationally.",
      "journey.t4": "International education tracks",
      "journey.d4": "Developing Cambridge, IELTS, SAT, IGCSE and A-Level programs.",
      "journey.t5": "Taking the ecosystem to the next level",
      "journey.d5": "100+ branches and further expansion of the Registan education ecosystem across Uzbekistan and internationally.",

      "projects.eyebrow": "04 — Projects", "projects.title": "Projects building the future of education.",
      "projects.rl": "Key outcome", "projects.more": "Learn More",
      "projects.k1": "Learning center network",
      "projects.d1": "One of Uzbekistan’s largest education networks: English, IELTS, mathematics, university admissions and international exam preparation.",
      "projects.r1": "Dozens of branches · thousands of students · 2031 goal — 100+ branches",
      "projects.k2": "Private school network",
      "projects.d2": "A modern school combining the national curriculum with international standards. The goal: not just top grades, but independent-thinking leaders.",
      "projects.r2": "Making admission to top global universities a systematic outcome",
      "projects.k3": "Conversation series",
      "projects.d3": "In-depth conversations with entrepreneurs, scientists, teachers and changemakers about the first steps behind great results.",
      "projects.r3": "Inspiration and real-world experience for a new generation",
      "projects.k4": "International education",
      "projects.d4": "Developing Cambridge, IELTS, SAT, IGCSE and A-Level programs in Uzbekistan and systematically preparing young people for the world’s leading universities.",
      "projects.r4": "International-standard education — right here in Uzbekistan",

      "phil.eyebrow": "05 — Education philosophy",
      "phil.intro": "For Avazbek Tulovov, education is not just a business. Knowledge, hard work, potential and results must matter more than financial means.",
      "phil.p1": "Quality matters more than quantity.", "phil.p2": "Great education starts with a great teacher.",
      "phil.p3": "Results must be measured.", "phil.p4": "Systems should rely on clear standards and processes, not on individuals.",
      "phil.p5": "Prepare children not only for exams, but for life.", "phil.p6": "A school builds discipline, responsibility and leadership — not just knowledge.",

      "vision.eyebrow": "06 — Vision",
      "vision.text": "The future of education is the combination of scalable quality, strong teachers and technology. Avazbek Tulovov’s goal is to build a system that allows Uzbekistan’s youth to compete anywhere in the world.",
      "vision.v1": "Scaling high-quality education", "vision.v2": "Building a generation of strong teachers",
      "vision.v3": "Expanding international education in Uzbekistan", "vision.v4": "Raising learning quality with technology and AI",
      "vision.v5": "Preparing Uzbek youth for the world’s best universities",

      "podcast.lead": "Deep conversations revealing the first steps, decisions, mistakes and values behind great achievements.",
      "podcast.g1": "Entrepreneurs", "podcast.g2": "Scientists", "podcast.g3": "Teachers", "podcast.g4": "Religious & educational leaders",
      "podcast.g5": "Athletes", "podcast.g6": "People shaping society",
      "podcast.yt": "Watch on YouTube", "podcast.all": "All episodes",

      "media.eyebrow": "08 — Media", "media.title": "Conversations, talks and publications.",
      "media.all": "All", "media.interview": "Interviews", "media.talk": "Talks", "media.article": "Articles", "media.event": "Events",

      "insights.eyebrow": "09 — Insights", "insights.title": "Thoughts on education, business and leadership.", "insights.all": "All articles",

      "contact.eyebrow": "10 — Contact", "contact.title": "Let’s build together.",
      "contact.lead": "For partnerships, media and professional inquiries.",
      "contact.name": "Name", "contact.email": "Email or phone", "contact.topic": "Inquiry type", "contact.message": "Message",
      "contact.o1": "Partnership", "contact.o2": "Media & interviews", "contact.o3": "Speaking / event", "contact.o4": "Professional advisory", "contact.o5": "Other",
      "contact.send": "Send message",

      "footer.tag": "Education Entrepreneur · Founder of Registan", "footer.rights": "All rights reserved.",

      "blog.title": "Insights", "blog.lead": "Articles and reflections by Avazbek Tulovov on education, business, management, parenting, leadership and personal growth.",
      "blog.back": "← All articles", "blog.home": "← Back to home"
    }
  };

  /* Dinamik UI matnlari (JS orqali chiziladigan qismlar) */
  const UI = {
    uz: {
      readMore: "O‘qish", minRead: "daqiqa", empty: "Hozircha materiallar yo‘q.", notFound: "Maqola topilmadi.",
      sent: "Rahmat! Xabaringiz yuborildi.", sendError: "Xatolik. Iltimos, Telegram orqali yozing: @avazbek_tulovov",
      all: "Barchasi", watch: "Tomosha qilish", open: "Ochish",
      cats: { education: "Ta’lim", business: "Biznes", management: "Menejment", parenting: "Farzand tarbiyasi", leadership: "Liderlik", growth: "Shaxsiy rivojlanish" },
      types: { podcast: "Podcast", interview: "Intervyu", talk: "Chiqish", article: "Maqola", event: "Tadbir" }
    },
    ru: {
      readMore: "Читать", minRead: "мин", empty: "Пока материалов нет.", notFound: "Статья не найдена.",
      sent: "Спасибо! Ваше сообщение отправлено.", sendError: "Ошибка. Пожалуйста, напишите в Telegram: @avazbek_tulovov",
      all: "Все", watch: "Смотреть", open: "Открыть",
      cats: { education: "Образование", business: "Бизнес", management: "Менеджмент", parenting: "Воспитание детей", leadership: "Лидерство", growth: "Личное развитие" },
      types: { podcast: "Подкаст", interview: "Интервью", talk: "Выступление", article: "Статья", event: "Мероприятие" }
    },
    en: {
      readMore: "Read", minRead: "min read", empty: "No materials yet.", notFound: "Article not found.",
      sent: "Thank you! Your message has been sent.", sendError: "Something went wrong. Please message on Telegram: @avazbek_tulovov",
      all: "All", watch: "Watch", open: "Open",
      cats: { education: "Education", business: "Business", management: "Management", parenting: "Parenting", leadership: "Leadership", growth: "Personal growth" },
      types: { podcast: "Podcast", interview: "Interview", talk: "Talk", article: "Article", event: "Event" }
    }
  };

  const LANGS = ["uz", "ru", "en"];
  const store = {
    get() { try { return localStorage.getItem("lang"); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem("lang", v); } catch (e) {} }
  };
  const original = new Map();   // uz (asl HTML) matnlari
  let meta = null;

  function detect() {
    const q = new URLSearchParams(location.search).get("lang");
    if (LANGS.includes(q)) return q;
    const s = store.get();
    if (LANGS.includes(s)) return s;
    return (window.SITE_CONFIG && window.SITE_CONFIG.DEFAULT_LANG) || "uz";
  }

  function apply(lang) {
    if (!meta) {
      const d = document.querySelector('meta[name="description"]');
      meta = { title: document.title, desc: d ? d.content : "" };
    }
    document.querySelectorAll("[data-i18n]").forEach(el => {
      if (!original.has(el)) original.set(el, el.innerHTML);
      const key = el.getAttribute("data-i18n");
      const val = lang !== "uz" && DICT[lang] && DICT[lang][key];
      el.innerHTML = val || original.get(el);
    });
    const t = lang !== "uz" && DICT[lang]["meta.title"];
    const d = lang !== "uz" && DICT[lang]["meta.desc"];
    if (!document.body.hasAttribute("data-keep-title")) document.title = t || meta.title;
    const md = document.querySelector('meta[name="description"]');
    if (md && !document.body.hasAttribute("data-keep-title")) md.content = d || meta.desc;

    document.documentElement.lang = lang;
    document.querySelectorAll(".lang button").forEach(b => b.classList.toggle("is-active", b.dataset.lang === lang));
    I18N.lang = lang;
    store.set(lang);
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  const I18N = {
    lang: "uz",
    ui(key) { return (UI[I18N.lang] || UI.uz)[key]; },
    // CMS maydonlaridan joriy tildagi qiymatni olish: obj.title_ru → obj.title_uz fallback
    pick(obj, field) { return obj[field + "_" + I18N.lang] || obj[field + "_uz"] || obj[field] || ""; },
    set: apply
  };
  window.I18N = I18N;

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => {
      apply(b.dataset.lang);
      const u = new URL(location.href); u.searchParams.set("lang", b.dataset.lang);
      history.replaceState(null, "", u);
    }));
    apply(detect());
  });
})();
