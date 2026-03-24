const PRODUCTS = {
  leadhunter: {
    ru: {
      title: 'LeadHunter',
      subtitle: 'Поиск и захват горячих лидов в Telegram',
      intro: 'Мониторит чаты и каналы, находит горячие запросы и отвечает персонализированным сообщением от вашего имени.',
      problem: 'Бизнес теряет заявки там, где люди отвечают слишком поздно или вообще не отвечают.',
      capabilities: ['Мониторинг чатов', 'Квалификация запроса', 'Персональный reply', 'Передача в CRM'],
      steps: ['1. Подключаем источники', '2. Настраиваем фильтры', '3. Собираем сценарий ответа', '4. Запускаем и измеряем'],
      usecase: 'Подходит для агентств, сервисов и B2B-команд, которым важно быстро ловить горячий спрос.',
      result: 'Меньше потерянных лидов, быстрее первый ответ, выше конверсия в диалог.',
    },
    en: {
      title: 'LeadHunter',
      subtitle: 'Find and capture hot Telegram leads',
      intro: 'Monitors chats and channels, finds hot requests, and replies in your voice on your behalf.',
      problem: 'Businesses lose requests where people respond too late or not at all.',
      capabilities: ['Chat monitoring', 'Request qualification', 'Personal reply', 'CRM handoff'],
      steps: ['1. Connect sources', '2. Set filters', '3. Design reply logic', '4. Launch and measure'],
      usecase: 'Best for agencies, services, and B2B teams that need to catch demand fast.',
      result: 'Fewer lost leads, faster first response, higher conversion into conversation.',
    }
  },
  'digital-broker': {
    ru: {
      title: 'Digital Broker',
      subtitle: 'Брокер заявок и предложений',
      intro: 'Квалифицирует входящий поток, сравнивает варианты и помогает менеджеру вести сделку без потери контекста.',
      problem: 'Когда заявки приходят хаотично, менеджеры тратят время на ручную сортировку и пересылки.',
      capabilities: ['Квалификация заявки', 'Сравнение условий', 'Deal prep', 'Routing в CRM'],
      steps: ['1. Смотрим поток', '2. Определяем критерии', '3. Настраиваем правила', '4. Проверяем на реальных кейсах'],
      usecase: 'Подходит там, где важно сравнить предложения, собрать контекст и быстро принять решение.',
      result: 'Меньше шума, быстрее принятие решений, чище pipeline.',
    },
    en: {
      title: 'Digital Broker',
      subtitle: 'Broker for requests and offers',
      intro: 'Qualifies inbound flow, compares options, and helps the manager move the deal without losing context.',
      problem: 'When requests come in chaotically, teams spend time sorting and forwarding them manually.',
      capabilities: ['Lead qualification', 'Offer comparison', 'Deal prep', 'CRM routing'],
      steps: ['1. Inspect flow', '2. Set criteria', '3. Configure rules', '4. Test on real cases'],
      usecase: 'Best when you need to compare offers, structure context, and make decisions quickly.',
      result: 'Less noise, faster decisions, cleaner pipeline.',
    }
  },
  'lead-classifier': {
    ru: {
      title: 'ИИ Классификатор лидов',
      subtitle: 'Скоринг и маршрутизация лидов',
      intro: 'Определяет приоритет, подтягивает контекст и передаёт заявку в нужный канал или нужному менеджеру.',
      problem: 'Без скоринга хорошие заявки часто лежат рядом с нерелевантными и теряются.',
      capabilities: ['Lead scoring', 'Сегментация', 'Приоритеты', 'Маршрутизация'],
      steps: ['1. Определяем сигналы', '2. Настраиваем score', '3. Привязываем к CRM', '4. Тестируем на потоке'],
      usecase: 'Подходит для команд, которым нужно быстро разделять горячие и холодные заявки.',
      result: 'Быстрее реакция и меньше ручной работы.',
    },
    en: {
      title: 'AI Lead Classifier',
      subtitle: 'Lead scoring and routing',
      intro: 'Determines priority, pulls context, and sends the request to the right channel or manager.',
      problem: 'Without scoring, strong leads get buried next to irrelevant ones.',
      capabilities: ['Lead scoring', 'Segmentation', 'Priorities', 'Routing'],
      steps: ['1. Define signals', '2. Set the score', '3. Connect CRM', '4. Test the flow'],
      usecase: 'Best for teams that need to separate hot and cold requests quickly.',
      result: 'Faster response and less manual work.',
    }
  },
  'content-factory': {
    ru: {
      title: 'ИИ Контент-завод',
      subtitle: 'Контент с редакционным контролем',
      intro: 'Автономно собирает SEO-статьи, посты и рассылки, сохраняя правила бренда и редакционный контроль.',
      problem: 'Контент не должен зависеть от вдохновения команды и ручного заполнения контент-плана.',
      capabilities: ['Ресёрч', 'Генерация', 'Редакторский контроль', 'Публикация'],
      steps: ['1. Фиксируем tone of voice', '2. Строим контент-пайплайн', '3. Подключаем контроль качества', '4. Запускаем поток'],
      usecase: 'Для брендов, которым нужен стабильный выпуск материалов без потери качества.',
      result: 'Больше контента, меньше хаоса, лучше ритм публикаций.',
    },
    en: {
      title: 'AI Content Factory',
      subtitle: 'Content with editorial control',
      intro: 'Generates SEO articles, posts, and newsletters while preserving brand rules and editorial control.',
      problem: 'Content should not depend on team inspiration or manual content-plan filling.',
      capabilities: ['Research', 'Generation', 'Editorial control', 'Publishing'],
      steps: ['1. Set tone of voice', '2. Build the pipeline', '3. Add quality control', '4. Launch the flow'],
      usecase: 'For brands that need a stable content output without losing quality.',
      result: 'More content, less chaos, better publishing rhythm.',
    }
  },
  'ai-hr': {
    ru: {
      title: 'ИИ HR',
      subtitle: 'Поиск, скрининг и онбординг кандидатов',
      intro: 'Снимает рутину у рекрутера: первичный диалог, ответы на вопросы, сбор данных и передача человеку.',
      problem: 'Рекрутинг перегружается однотипными вопросами и рутинной перепиской.',
      capabilities: ['Скрининг', 'FAQ', 'Сбор данных', 'Onboarding flow'],
      steps: ['1. Описываем роль', '2. Настраиваем вопросы', '3. Готовим handoff', '4. Тестируем на кандидатах'],
      usecase: 'Подходит для команд, где нужно ускорить найм и убрать рутину из первых шагов.',
      result: 'Меньше нагрузки на рекрутера и быстрее первый контакт.',
    },
    en: {
      title: 'AI HR',
      subtitle: 'Candidate search, screening, and onboarding',
      intro: 'Removes recruiter routine: first contact, FAQ handling, data capture, and the handoff to a human.',
      problem: 'Recruiting gets overloaded by repetitive questions and routine back-and-forth.',
      capabilities: ['Screening', 'FAQ', 'Data capture', 'Onboarding flow'],
      steps: ['1. Define the role', '2. Set the questions', '3. Prepare the handoff', '4. Test with candidates'],
      usecase: 'Best for teams that want to speed up hiring and remove early-stage routine.',
      result: 'Less recruiter load and a faster first contact.',
    }
  },
  'support-agent': {
    ru: {
      title: 'ИИ Агент поддержки',
      subtitle: 'Ответы на типовые запросы и эскалации',
      intro: 'Отвечает на типовые вопросы, ищет в базе знаний и передаёт сложные кейсы оператору.',
      problem: 'Поддержка теряет время на повторяющиеся вопросы и одинаковые сценарии.',
      capabilities: ['Knowledge base', 'Ответы 24/7', 'Эскалация', 'Контроль качества'],
      steps: ['1. Собираем базу', '2. Описываем сценарии', '3. Настраиваем эскалации', '4. Запускаем и следим'],
      usecase: 'Подходит для сервисов и продуктов с большим количеством повторяющихся вопросов.',
      result: 'Закрывает рутину и сохраняет качество ответа.',
    },
    en: {
      title: 'AI Support Agent',
      subtitle: 'Common answers and escalations',
      intro: 'Answers common questions, searches the knowledge base, and passes complex cases to a human.',
      problem: 'Support wastes time on repetitive questions and repeated scenarios.',
      capabilities: ['Knowledge base', '24/7 replies', 'Escalation', 'Quality control'],
      steps: ['1. Build the base', '2. Define scenarios', '3. Set escalation rules', '4. Launch and monitor'],
      usecase: 'Best for services and products with many recurring questions.',
      result: 'Handles routine and keeps answer quality steady.',
    }
  },
  backoffice: {
    ru: {
      title: 'ИИ Бэкофис',
      subtitle: 'Операции, документы и согласования',
      intro: 'Связывает документооборот, уведомления, согласования, отчётность и внутренние сервисы в единый workflow.',
      problem: 'Backoffice часто живёт в таблицах, чатах и ручных пересылках, а не в одном процессе.',
      capabilities: ['Документы', 'Approval flow', 'Отчётность', 'Синхронизация систем'],
      steps: ['1. Описываем процесс', '2. Убираем ручные шаги', '3. Соединяем системы', '4. Проверяем на рабочей нагрузке'],
      usecase: 'Для команд, которым нужна внутренняя операционная чистота.',
      result: 'Меньше ошибок, выше контроль, меньше ручного хаоса.',
    },
    en: {
      title: 'AI Backoffice',
      subtitle: 'Operations, documents, and approvals',
      intro: 'Connects document flow, notifications, approvals, reporting, and internal services into one workflow.',
      problem: 'Backoffice often lives in spreadsheets, chats, and manual forwarding instead of a single process.',
      capabilities: ['Documents', 'Approval flow', 'Reporting', 'System sync'],
      steps: ['1. Map the process', '2. Remove manual steps', '3. Connect systems', '4. Test under load'],
      usecase: 'For teams that need operational clarity inside the company.',
      result: 'Fewer errors, more control, less manual chaos.',
    }
  }
};

function lang() {
  return document.documentElement.getAttribute('data-lang') || 'ru';
}

function setLang(next) {
  if (lang() === next) return;
  document.body.classList.add('lang-fade');
  window.setTimeout(() => {
    document.documentElement.setAttribute('data-lang', next);
    document.querySelectorAll('.lang button').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === next));
    localStorage.setItem('nodalio-lang', next);
    document.body.classList.remove('lang-fade');
    renderProductPage();
    resetChat();
  }, 120);
}

function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('[data-aos]').forEach(el => io.observe(el));
}

function initGraph() {
  const canvas = document.getElementById('heroGraph');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const res = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
    ctx.setTransform(dpr,0,0,dpr,0,0);
  };
  let t = 0;
  const draw = () => {
    t += 0.012;
    ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
    const w = canvas.clientWidth, h = canvas.clientHeight;
    const nodes = [
      [52, 48], [w - 56, 70], [100, h - 58], [w - 92, h - 52], [w * .52, h * .52]
    ];
    ctx.lineWidth = 1;
    nodes.forEach((a, i) => {
      nodes.slice(i + 1).forEach((b, j) => {
        const dx = a[0] - b[0], dy = a[1] - b[1];
        const d = Math.hypot(dx, dy);
        if (d < Math.max(w, h) * 0.8) {
          ctx.strokeStyle = `rgba(36,231,208,${0.12 * (1 - d / (Math.max(w, h) * 0.8))})`;
          ctx.beginPath();
          ctx.moveTo(a[0], a[1]);
          ctx.lineTo(b[0], b[1]);
          ctx.stroke();
        }
      });
    });
    nodes.forEach((p, idx) => {
      ctx.beginPath();
      ctx.fillStyle = idx % 2 ? 'rgba(111,124,255,.9)' : 'rgba(36,231,208,.9)';
      ctx.arc(p[0] + Math.sin(t + idx) * 5, p[1] + Math.cos(t * 1.3 + idx) * 4, idx === 4 ? 5 : 3, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  };
  res();
  window.addEventListener('resize', res);
  draw();
}

const CHAT = {
  step: 0,
  niche: '',
  pain: '',
  revenue: ''
};

const CHAT_COPY = {
  ru: {
    greet: 'Привет. Я быстро пойму ваш запрос и подготовлю короткий brief для Андрея. Начнём с ниши: в каком сегменте работает бизнес?',
    pain: 'Что сейчас сильнее всего тормозит рост?',
    revenue: 'Какой у вас примерный оборот?',
    recommend: flow => `Рекомендация: ${flow.niche === 'E-commerce' ? 'LeadHunter + AI Support Agent' : flow.niche === 'B2B / Services' ? 'Digital Broker + AI Lead Classifier' : flow.niche === 'Real Estate' ? 'Digital Broker + AI Backoffice' : 'Custom AI workflow'} под вашу задачу.`,
    final: 'Напишите в Telegram — и мы коротко сверим детали с CEO.',
    telegram: 'Написать в Telegram'
  },
  en: {
    greet: 'Hi. I’ll quickly understand your request and prepare a short brief for Andrey. Let’s start with the niche: what segment does your business operate in?',
    pain: 'What is currently slowing growth the most?',
    revenue: 'What is your approximate revenue?',
    recommend: flow => `Recommendation: ${flow.niche === 'E-commerce' ? 'LeadHunter + AI Support Agent' : flow.niche === 'B2B / Services' ? 'Digital Broker + AI Lead Classifier' : flow.niche === 'Real Estate' ? 'Digital Broker + AI Backoffice' : 'Custom AI workflow'} for your task.`,
    final: 'Message us on Telegram and we’ll quickly review the details with the CEO.',
    telegram: 'Message on Telegram'
  }
};

function chatEl() { return document.getElementById('chatRoot'); }
function chatMessages() { return document.getElementById('chatMessages'); }
function chatActions() { return document.getElementById('chatActions'); }

function addMsg(text, role='bot') {
  if (!chatMessages()) return;
  const el = document.createElement('div');
  el.className = `msg ${role}`;
  el.textContent = text;
  chatMessages().appendChild(el);
  chatMessages().scrollTop = chatMessages().scrollHeight;
}

function renderChatOptions(items) {
  const wrap = chatActions();
  if (!wrap) return;
  wrap.innerHTML = '';
  items.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'opt';
    btn.type = 'button';
    btn.textContent = item;
    btn.addEventListener('click', () => handleChat(item));
    wrap.appendChild(btn);
  });
}

function resetChat() {
  const root = chatEl();
  if (!root) return;
  CHAT.step = 0; CHAT.niche = ''; CHAT.pain = ''; CHAT.revenue = '';
  const c = CHAT_COPY[lang()];
  const greet = document.getElementById('chatGreeting');
  if (greet) greet.textContent = c.greet;
  renderChatOptions(['E-commerce', 'B2B / Services', 'Real Estate', 'Other']);
}

function handleChat(value) {
  const c = CHAT_COPY[lang()];
  if (CHAT.step === 0) {
    CHAT.niche = value; CHAT.step = 1;
    addMsg(value, 'user');
    addMsg(c.pain, 'bot');
    renderChatOptions(['Not enough leads', 'Slow response', 'Manual routine', 'Hard to scale']);
    return;
  }
  if (CHAT.step === 1) {
    CHAT.pain = value; CHAT.step = 2;
    addMsg(value, 'user');
    addMsg(c.revenue, 'bot');
    renderChatOptions(['Under $10K/mo', '$10K-$50K/mo', '$50K-$100K/mo', 'Over $100K/mo']);
    return;
  }
  if (CHAT.step === 2) {
    CHAT.revenue = value; CHAT.step = 3;
    addMsg(value, 'user');
    addMsg(c.recommend(CHAT), 'bot');
    addMsg(c.final, 'bot');
    const wrap = chatActions();
    wrap.innerHTML = '';
    const a = document.createElement('a');
    a.className = 'chat-link';
    a.href = 'https://t.me/olshanskiy_ad';
    a.target = '_blank';
    a.rel = 'noreferrer';
    a.textContent = c.telegram;
    wrap.appendChild(a);
  }
}

function renderProductPage() {
  const root = document.getElementById('productRoot');
  if (!root) return;
  const key = document.body.dataset.product;
  const p = PRODUCTS[key];
  if (!p) return;
  const c = p[lang()];
  document.title = `${c.title} · Nodalio`;
  root.innerHTML = `
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy" data-aos>
          <div class="hero-kicker">${c.title}</div>
          <h1 class="hero-title">${c.subtitle}</h1>
          <p class="hero-sub">${c.intro}</p>
          <div class="hero-actions">
            <a class="cta" href="https://t.me/olshanskiy_ad" target="_blank" rel="noreferrer">${lang() === 'ru' ? 'Написать в Telegram' : 'Contact via Telegram'}</a>
            <a class="ghost" href="prototype-preview.html">${lang() === 'ru' ? 'Назад на главную' : 'Back to home'}</a>
          </div>
          <div class="hero-meta">
            <span class="chip"><b>${lang() === 'ru' ? 'Проблема:' : 'Problem:'}</b> ${c.problem}</span>
          </div>
        </div>
        <div class="hero-visual" data-aos>
          <div class="hero-visual-top panel">
            <div class="label">${lang() === 'ru' ? 'Что получает бизнес' : 'What business gets'}</div>
            <div class="hero-graph" style="margin-top:12px">
              <div class="graph-node a"><strong>01</strong>${c.capabilities[0]}</div>
              <div class="graph-node b"><strong>02</strong>${c.capabilities[1]}</div>
              <div class="graph-node c"><strong>03</strong>${c.capabilities[2]}</div>
              <div class="graph-node d"><strong>04</strong>${c.capabilities[3]}</div>
              <div class="graph-line l1"></div><div class="graph-line l2"></div>
              <canvas id="heroGraph" style="position:absolute;inset:0;width:100%;height:100%"></canvas>
            </div>
          </div>
          <div class="hero-visual-stats">
            <div class="stat"><b>24/7</b><span>${lang() === 'ru' ? 'работает без ручного режима' : 'works without manual mode'}</span></div>
            <div class="stat"><b>4</b><span>${lang() === 'ru' ? 'шага до запуска' : 'steps to launch'}</span></div>
            <div class="stat"><b>ROI</b><span>${lang() === 'ru' ? 'сначала считаем эффект' : 'we define impact first'}</span></div>
          </div>
        </div>
      </div>
    </section>
    <section class="section compact">
      <div class="container">
        <div class="section-head" data-aos>
          <span class="label">${lang() === 'ru' ? 'Как это работает' : 'How it works'}</span>
          <h2>${lang() === 'ru' ? 'Короткий маршрут от аудита к рабочему сценарию' : 'A short path from audit to a working scenario'}</h2>
        </div>
        <div class="steps-grid">
          ${c.steps.map((s, i) => `<div class="step-card" data-aos><div class="step-num">0${i + 1}</div><h3>${s.replace(/^\d+\.\s*/, '')}</h3></div>`).join('')}
        </div>
      </div>
    </section>
    <section class="section compact">
      <div class="container memo-grid">
        <article class="memo-card" data-aos>
          <span class="label">${lang() === 'ru' ? 'Use case' : 'Use case'}</span>
          <h3>${lang() === 'ru' ? 'Где это особенно полезно' : 'Where this is especially useful'}</h3>
          <p>${c.usecase}</p>
        </article>
        <article class="memo-card" data-aos>
          <span class="label">${lang() === 'ru' ? 'Результат' : 'Result'}</span>
          <h3>${lang() === 'ru' ? 'Эффект для бизнеса' : 'Business effect'}</h3>
          <p>${c.result}</p>
        </article>
      </div>
    </section>
    <section class="section compact">
      <div class="container contact-grid">
        <article class="contact-card" data-aos>
          <span class="label">${lang() === 'ru' ? 'Дальше' : 'Next step'}</span>
          <h3>${lang() === 'ru' ? 'Можно обсудить задачу сразу в Telegram' : 'We can discuss the task directly in Telegram'}</h3>
          <p class="contact-line">${lang() === 'ru' ? 'Без длинных форм и лишних шагов. Коротко сверяем задачу и формат внедрения.' : 'No long forms or extra steps. We quickly align on the task and delivery format.'}</p>
          <a class="cta" href="https://t.me/olshanskiy_ad" target="_blank" rel="noreferrer">${lang() === 'ru' ? 'Написать в Telegram' : 'Contact via Telegram'}</a>
        </article>
        <article class="contact-card" data-aos>
          <span class="label">${lang() === 'ru' ? 'Навигация' : 'Navigation'}</span>
          <h3>${lang() === 'ru' ? 'Назад к общей странице' : 'Back to the main page'}</h3>
          <p class="contact-line">${lang() === 'ru' ? 'Главная — это кастомный анализ процессов и AI-автоматизация. Продукт — только доп. опция.' : 'The homepage is about custom process analysis and AI automation. Products are only a secondary option.'}</p>
          <a class="ghost" href="prototype-preview.html">${lang() === 'ru' ? 'Назад на главную' : 'Back to home'}</a>
        </article>
      </div>
    </section>
  `;
  initReveal();
  initGraph();
}

window.setLang = setLang;

window.addEventListener('DOMContentLoaded', () => {
  document.documentElement.setAttribute('data-lang', localStorage.getItem('nodalio-lang') || 'ru');
  document.querySelectorAll('.lang button').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang()));
  initReveal();
  initGraph();
  renderProductPage();
  resetChat();
});

