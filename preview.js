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
      intro: 'Connects document flow, notifications, approvals, reporting, and operational workflows into one workflow.',
      problem: 'Backoffice often lives in spreadsheets, chats, and manual forwarding instead of a single process.',
      capabilities: ['Documents', 'Approval flow', 'Reporting', 'System sync'],
      steps: ['1. Map the process', '2. Remove manual steps', '3. Connect systems', '4. Test under load'],
      usecase: 'For teams that need operational clarity inside the company.',
      result: 'Fewer errors, more control, less manual chaos.',
    }
  },
  'ai-team-accelerator': {
    ru: {
      title: 'AI-акселератор команды',
      subtitle: 'Внедрение AI в ежедневную работу команды',
      intro: 'Помогаем командам перейти от хаотичных AI-экспериментов к повторяемым рабочим сценариям с измеримой экономией времени.',
      problem: 'Команда уже слышала про AI, но использует его хаотично и без стандарта качества.',
      capabilities: ['Role workflows', 'Prompt standards', 'Quality rules', 'Team enablement'],
      steps: ['1. Разбираем роли и рутину', '2. Собираем сценарии', '3. Настраиваем правила качества', '4. Внедряем в повседневную работу'],
      usecase: 'Подходит для B2B-команд, агентств и сервисных бизнесов, где уже есть повторяющаяся ручная нагрузка.',
      result: 'Меньше рутины, больше полезной работы и предсказуемый результат от AI.',
    },
    en: {
      title: 'AI Team Accelerator',
      subtitle: 'AI embedded into daily team operations',
      intro: 'We help teams move from chaotic AI experiments to repeatable workflows with measurable time savings.',
      problem: 'The team already knows about AI but uses it chaotically and without a quality standard.',
      capabilities: ['Role workflows', 'Prompt standards', 'Quality rules', 'Team enablement'],
      steps: ['1. Map roles and routine', '2. Build workflows', '3. Set quality rules', '4. Embed into daily work'],
      usecase: 'Fits B2B teams, agencies, and service businesses with repeatable manual load.',
      result: 'Less routine, more useful work, and more predictable AI output.',
    }
  }
};

const PRODUCT_SECTIONS = {
  'digital-broker': {
    problem: [
      { ru: 'Заявки приходят из разных каналов и теряют контекст.', en: 'Requests arrive from different channels and lose context.' },
      { ru: 'Менеджеры вручную сравнивают условия и пересылают их дальше.', en: 'Managers compare offers manually and forward them by hand.' },
      { ru: 'Сделки тормозятся там, где нужен единый маршрут и прозрачные правила.', en: 'Deals slow down where a single route and clear rules are needed.' }
    ],
    comparison: [
      { label: { ru: 'Скорость', en: 'Speed' }, manual: { ru: 'Ручная сортировка и пересылка', en: 'Manual sorting and forwarding' }, nodalio: { ru: 'Авторазбор и быстрый маршрут', en: 'Auto-triage and fast routing' } },
      { label: { ru: 'Контекст', en: 'Context' }, manual: { ru: 'Теряется в чатах и таблицах', en: 'Lost in chats and sheets' }, nodalio: { ru: 'Сохраняется в одном контуре', en: 'Kept in one loop' } },
      { label: { ru: 'Решение', en: 'Decision' }, manual: { ru: 'Нужны ручные касания', en: 'Needs manual touches' }, nodalio: { ru: 'Работают правила и сценарии', en: 'Rules and scenarios are already working' } }
    ],
    delivery: [
      { title: { ru: 'Настройка под сделку', en: 'Built for your deal flow' }, text: { ru: 'Подстраиваем сценарий под нишу, тип предложения и способ согласования.', en: 'We adapt the flow to your niche, offer type, and approval path.' } },
      { title: { ru: 'Контроль и ручной fallback', en: 'Control and human fallback' }, text: { ru: 'Сложные кейсы уходят человеку без потери истории.', en: 'Complex cases are handed off to a human without losing history.' } }
    ],
    trust: [
      { ru: 'Маршрутизация на основе правил, а не догадок.', en: 'Routing based on rules, not guesses.' },
      { ru: 'Понятные точки согласования и прозрачный контроль.', en: 'Clear approval points and transparent control.' },
      { ru: 'Подходит для команд с потоком предложений и заявок.', en: 'Fits teams with a constant flow of offers and requests.' }
    ]
  },
  'lead-classifier': {
    problem: [
      { ru: 'Хорошие лиды смешиваются с нецелевыми и теряются в общем потоке.', en: 'Good leads get mixed with irrelevant ones and get lost in the flow.' },
      { ru: 'Один и тот же ответ уходит и горячим, и холодным заявкам.', en: 'The same response goes to both hot and cold leads.' },
      { ru: 'Менеджеры тратят время на разбор вместо быстрого контакта.', en: 'Managers spend time triaging instead of responding fast.' }
    ],
    comparison: [
      { label: { ru: 'Приоритет', en: 'Priority' }, manual: { ru: 'Решает человек по памяти', en: 'Decided from memory by a person' }, nodalio: { ru: 'Считает score по сигналам', en: 'Scores leads by signals' } },
      { label: { ru: 'Handoff', en: 'Handoff' }, manual: { ru: 'Непрозрачные пересылки', en: 'Opaque handoffs' }, nodalio: { ru: 'Лид уходит нужному менеджеру', en: 'Lead goes to the right manager' } },
      { label: { ru: 'Скорость', en: 'Speed' }, manual: { ru: 'Ответ зависит от загрузки', en: 'Reply depends on workload' }, nodalio: { ru: 'Скорость задаёт система', en: 'Speed is set by the system' } }
    ],
    delivery: [
      { title: { ru: 'Сигналы и score', en: 'Signals and score' }, text: { ru: 'Определяем, какие сигналы говорят о горячем лиде именно в вашем бизнесе.', en: 'We define which signals indicate a hot lead in your business.' } },
      { title: { ru: 'Интеграция в CRM', en: 'CRM integration' }, text: { ru: 'Сразу подключаем маршрутизацию и уведомления к текущей CRM.', en: 'We connect routing and notifications directly to your CRM.' } }
    ],
    trust: [
      { ru: 'Порог уверенности можно настроить под ваш риск-профиль.', en: 'Confidence thresholds can be tuned to your risk profile.' },
      { ru: 'Человек всегда может перехватить решение.', en: 'A human can always override the decision.' },
      { ru: 'Подходит для активных отделов продаж и лид-генерации.', en: 'Fits active sales and lead-gen teams.' }
    ]
  },
  'content-factory': {
    problem: [
      { ru: 'Публикации рвутся, когда команда занята операционкой.', en: 'Publishing stalls when the team is busy with operations.' },
      { ru: 'Тон бренда расползается между авторами и каналами.', en: 'Brand tone drifts across authors and channels.' },
      { ru: 'Контент-план живёт в таблице, а не в рабочем потоке.', en: 'The content plan lives in a sheet, not in a live workflow.' }
    ],
    comparison: [
      { label: { ru: 'Исследование', en: 'Research' }, manual: { ru: 'Собирается вручную и долго', en: 'Collected manually and slowly' }, nodalio: { ru: 'Подхватывается системой', en: 'Handled by the system' } },
      { label: { ru: 'Черновики', en: 'Drafts' }, manual: { ru: 'Пишутся от случая к случаю', en: 'Written case by case' }, nodalio: { ru: 'Выходят по правилам бренда', en: 'Produced by brand rules' } },
      { label: { ru: 'Публикация', en: 'Publishing' }, manual: { ru: 'Нужны постоянные напоминания', en: 'Needs constant reminders' }, nodalio: { ru: 'Идёт по расписанию', en: 'Runs on schedule' } }
    ],
    delivery: [
      { title: { ru: 'Тон бренда', en: 'Brand tone' }, text: { ru: 'Фиксируем правила языка и задаём редакционный контроль.', en: 'We lock language rules and set editorial control.' } },
      { title: { ru: 'Поток публикаций', en: 'Publishing flow' }, text: { ru: 'Строим цепочку от идеи и ресёрча до выпуска и дистрибуции.', en: 'We build the flow from idea and research to release and distribution.' } }
    ],
    trust: [
      { ru: 'Контент остаётся под редакторским контролем.', en: 'Content stays under editorial control.' },
      { ru: 'Генерация не ломает тон бренда.', en: 'Generation does not break brand tone.' },
      { ru: 'Подходит брендам с регулярным выпуском материалов.', en: 'Fits brands with a regular publishing cadence.' }
    ]
  },
  'ai-hr': {
    problem: [
      { ru: 'Рекрутеры отвечают на одни и те же вопросы снова и снова.', en: 'Recruiters answer the same questions again and again.' },
      { ru: 'Первый контакт с кандидатом часто слишком медленный.', en: 'The first contact with a candidate is often too slow.' },
      { ru: 'Скрининг отнимает время у людей, которые должны закрывать найм.', en: 'Screening eats time from people who should be closing hires.' }
    ],
    comparison: [
      { label: { ru: 'Скрининг', en: 'Screening' }, manual: { ru: 'Зависит от загрузки рекрутера', en: 'Depends on recruiter load' }, nodalio: { ru: 'Идёт по единым вопросам', en: 'Runs on a single question set' } },
      { label: { ru: 'FAQ', en: 'FAQ' }, manual: { ru: 'Отвечают в переписке вручную', en: 'Answered manually in chat' }, nodalio: { ru: 'Отвечает сразу в потоке', en: 'Answered right in the flow' } },
      { label: { ru: 'Handoff', en: 'Handoff' }, manual: { ru: 'История теряется по дороге', en: 'History gets lost along the way' }, nodalio: { ru: 'Передаёт кандидата с контекстом', en: 'Hands off the candidate with context' } }
    ],
    delivery: [
      { title: { ru: 'Роль и вопросы', en: 'Role and questions' }, text: { ru: 'Настраиваем сценарий под вакансию и стандарт компании.', en: 'We set up the flow for the role and your company standard.' } },
      { title: { ru: 'Передача человеку', en: 'Human handoff' }, text: { ru: 'Сложные кандидаты сразу уходят рекрутеру с полным контекстом.', en: 'Complex candidates go to the recruiter with full context.' } }
    ],
    trust: [
      { ru: 'Система не заменяет рекрутера, а снимает рутину.', en: 'The system does not replace recruiters; it removes routine.' },
      { ru: 'Оставляем понятный человеческий контроль на ключевых шагах.', en: 'We keep a clear human control layer on key steps.' },
      { ru: 'Подходит для найма с большим входящим потоком.', en: 'Fits hiring flows with high incoming volume.' }
    ]
  },
  'support-agent': {
    problem: [
      { ru: 'Поддержка повторяет одинаковые ответы и теряет темп.', en: 'Support repeats the same answers and loses pace.' },
      { ru: 'Клиент ждёт, пока оператор освободится и найдёт контекст.', en: 'Customers wait while an operator frees up and finds context.' },
      { ru: 'Сложные кейсы смешиваются с типовыми вопросами.', en: 'Complex cases get mixed with routine questions.' }
    ],
    comparison: [
      { label: { ru: 'Ответ', en: 'Reply' }, manual: { ru: 'Зависит от смены и загрузки', en: 'Depends on shift and workload' }, nodalio: { ru: 'Даёт ответ сразу', en: 'Replies immediately' } },
      { label: { ru: 'Контекст', en: 'Context' }, manual: { ru: 'Лежит в голове у оператора', en: 'Lives in the operator’s head' }, nodalio: { ru: 'Берётся из базы знаний', en: 'Pulled from the knowledge base' } },
      { label: { ru: 'Эскалация', en: 'Escalation' }, manual: { ru: 'Не всегда заметна вовремя', en: 'Not always noticed in time' }, nodalio: { ru: 'Идёт по правилам и порогам', en: 'Follows rules and thresholds' } }
    ],
    delivery: [
      { title: { ru: 'База знаний', en: 'Knowledge base' }, text: { ru: 'Собираем основу ответов и обучаем агента на реальных сценариях.', en: 'We build the answer base and train the agent on real scenarios.' } },
      { title: { ru: 'Порог эскалации', en: 'Escalation threshold' }, text: { ru: 'Сложные запросы уходят человеку без потери истории.', en: 'Complex requests go to a human without losing history.' } }
    ],
    trust: [
      { ru: 'Соблюдаем единый тон и правила ответа.', en: 'We keep one tone and reply rules.' },
      { ru: 'Снижаем нагрузку, не ломая сервис.', en: 'We reduce load without breaking service.' },
      { ru: 'Подходит для продуктовой и сервисной поддержки.', en: 'Fits product and service support teams.' }
    ]
  },
  backoffice: {
    problem: [
      { ru: 'Документы, согласования и отчётность живут в разных местах.', en: 'Documents, approvals, and reporting live in different places.' },
      { ru: 'Команда тратит время на пересылки и ручные напоминания.', en: 'The team wastes time on forwarding and manual reminders.' },
      { ru: 'Операции теряют прозрачность, когда нет единого маршрута.', en: 'Operations lose clarity without a single route.' }
    ],
    comparison: [
      { label: { ru: 'Документы', en: 'Documents' }, manual: { ru: 'Хранятся в разных чатах и папках', en: 'Stored in chats and folders' }, nodalio: { ru: 'Идут по одному маршруту', en: 'Move through one route' } },
      { label: { ru: 'Согласования', en: 'Approvals' }, manual: { ru: 'Нужны ручные напоминания', en: 'Need manual reminders' }, nodalio: { ru: 'Есть понятные статусы и правила', en: 'Have clear statuses and rules' } },
      { label: { ru: 'Отчётность', en: 'Reporting' }, manual: { ru: 'Собирается по кускам', en: 'Built in fragments' }, nodalio: { ru: 'Сводится автоматически', en: 'Aggregated automatically' } }
    ],
    delivery: [
      { title: { ru: 'Операционный маршрут', en: 'Operational route' }, text: { ru: 'Строим единый маршрут для задач, документов и уведомлений.', en: 'We build one route for tasks, documents, and notifications.' } },
      { title: { ru: 'Контроль доступа', en: 'Access control' }, text: { ru: 'Фиксируем роли, ответственных и точки проверки.', en: 'We define roles, owners, and review points.' } }
    ],
    trust: [
      { ru: 'Хаос в бэкофисе превращаем в понятный процесс.', en: 'We turn backoffice chaos into a clear process.' },
      { ru: 'Убираем ручные касания там, где они не нужны.', en: 'We remove manual touches where they are unnecessary.' },
      { ru: 'Подходит для внутренних сервисов и операционных команд.', en: 'Fits internal services and operations teams.' }
    ]
  },
  'ai-team-accelerator': {
    problem: [
      { ru: 'Команда слышала про AI, но использует его бессистемно и от случая к случаю.', en: 'The team has heard about AI but uses it inconsistently and case by case.' },
      { ru: 'Полезные сценарии не закреплены по ролям и не становятся частью ежедневной работы.', en: 'Useful workflows are not tied to roles and never become part of daily work.' },
      { ru: 'Качество результата зависит от случайных экспериментов отдельных сотрудников.', en: 'Output quality depends on random experiments by individual employees.' }
    ],
    comparison: [
      { label: { ru: 'Использование AI', en: 'AI usage' }, manual: { ru: 'Случайные попытки без системы', en: 'Random attempts without a system' }, nodalio: { ru: 'Ролевые сценарии и стандарты', en: 'Role-based workflows and standards' } },
      { label: { ru: 'Качество', en: 'Quality' }, manual: { ru: 'Плавает от человека к человеку', en: 'Varies from person to person' }, nodalio: { ru: 'Есть единые правила и проверка', en: 'Shared rules and review are in place' } },
      { label: { ru: 'Эффект', en: 'Impact' }, manual: { ru: 'Сложно измерить и масштабировать', en: 'Hard to measure and scale' }, nodalio: { ru: 'Понятные сценарии и экономия времени', en: 'Clear workflows and time savings' } }
    ],
    delivery: [
      { title: { ru: 'Ролевые сценарии', en: 'Role-based workflows' }, text: { ru: 'Собираем сценарии отдельно для sales, support, marketing, HR, ops и team leads.', en: 'We build separate workflows for sales, support, marketing, HR, ops, and team leads.' } },
      { title: { ru: 'Встраивание в работу', en: 'Embedded into work' }, text: { ru: 'Это не разовый тренинг, а внедрение AI в ежедневный ритм команды.', en: 'This is not a one-off training session, but AI embedded into the team’s daily rhythm.' } }
    ],
    trust: [
      { ru: 'AI не заменяет команду, а усиливает её рабочий ритм.', en: 'AI does not replace the team; it strengthens the working rhythm.' },
      { ru: 'Сценарии привязаны к реальным ролям и задачам.', en: 'Workflows are tied to real roles and tasks.' },
      { ru: 'Подходит командам с повторяющейся операционной нагрузкой.', en: 'Fits teams with repeatable operational load.' }
    ]
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

function initMiniNavSpy() {
  const nav = document.querySelector('.top-rail, .mini-nav');
  if (!nav) return;
  const links = Array.from(nav.querySelectorAll('a[href^="#"]'));
  const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const setActive = id => {
    links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
  };
  if (sections.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      const hit = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (hit && hit.target && hit.target.id) setActive(hit.target.id);
    }, { rootMargin: '-34% 0px -48% 0px', threshold: [0.18, 0.3, 0.5] });
    sections.forEach(section => observer.observe(section));
  }
  window.addEventListener('hashchange', () => {
    const id = location.hash.replace('#', '');
    if (id) setActive(id);
  });
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

function initFloatingChat() {
  const btn = document.getElementById('floatChatButton');
  const panel = document.getElementById('floatChatPanel');
  if (!btn || !panel) return;

  const sync = () => {
    const y = window.scrollY || window.pageYOffset || 0;
    const hero = document.getElementById('hero');
    const chat = document.getElementById('chat');
    const footer = document.querySelector('.footer');
    const heroBottom = hero ? hero.getBoundingClientRect().bottom : 9999;
    const chatRect = chat ? chat.getBoundingClientRect() : null;
    const footerRect = footer ? footer.getBoundingClientRect() : null;
    const nearChat = chatRect ? chatRect.top < window.innerHeight * 0.8 && chatRect.bottom > window.innerHeight * 0.2 : false;
    const nearFooter = footerRect ? footerRect.top < window.innerHeight : false;
    const pastThreshold = y > Math.max(260, window.innerHeight * 0.28);
    const inHero = heroBottom > window.innerHeight * 0.45;
    const visible = pastThreshold && !inHero && !nearChat && !nearFooter;
    btn.classList.toggle('visible', visible);
    if (!visible) {
      panel.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
    }
  };

  btn.addEventListener('click', () => {
    const open = panel.hidden;
    panel.hidden = !open;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  document.addEventListener('click', event => {
    if (panel.hidden) return;
    if (!panel.contains(event.target) && !btn.contains(event.target)) {
      panel.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  window.addEventListener('scroll', sync, { passive: true });
  window.addEventListener('resize', sync);
  sync();
}

function initMailtoForms() {
  document.querySelectorAll('[data-mailto-form]').forEach(form => {
    if (form.dataset.bound === '1') return;
    form.dataset.bound = '1';
    form.addEventListener('submit', event => {
      event.preventDefault();
      const currentLang = lang();
      const formData = new FormData(form);
      const subject = currentLang === 'ru'
        ? (form.dataset.subjectRu || 'Запрос с сайта')
        : (form.dataset.subjectEn || 'Website inquiry');
      const labels = {
        ru: { product: 'Продукт', name: 'Имя', niche: 'Ниша', contact: 'Контакт' },
        en: { product: 'Product', name: 'Name', niche: 'Niche', contact: 'Contact' }
      };
      const bodyLines = [];
      formData.forEach((value, key) => {
        if (!value) return;
        bodyLines.push(`${labels[currentLang][key] || key}: ${String(value)}`);
      });
      window.location.href = `mailto:olshanskiy.ad@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
    });
  });
}

function initStickyProductCta() {
  const bar = document.getElementById('stickyLeadhunterCta');
  if (!bar) return;
  const sync = () => {
    const y = window.scrollY || window.pageYOffset || 0;
    const footer = document.querySelector('.footer');
    const pricing = document.getElementById('lh-pricing');
    const finalCta = document.querySelector('.final-cta');
    const footerRect = footer ? footer.getBoundingClientRect() : null;
    const pricingRect = pricing ? pricing.getBoundingClientRect() : null;
    const finalRect = finalCta ? finalCta.getBoundingClientRect() : null;
    const nearFooter = footerRect ? footerRect.top < window.innerHeight : false;
    const nearPricing = pricingRect ? pricingRect.top < window.innerHeight * 0.78 && pricingRect.bottom > window.innerHeight * 0.1 : false;
    const nearFinal = finalRect ? finalRect.top < window.innerHeight * 0.9 && finalRect.bottom > window.innerHeight * 0.1 : false;
    bar.hidden = !(y > 720 && !nearFooter && !nearPricing && !nearFinal);
  };
  window.addEventListener('scroll', sync, { passive: true });
  window.addEventListener('resize', sync);
  sync();
}

const CHAT = {
  step: 0,
  niche: '',
  pain: '',
  revenue: ''
};

const CHAT_COPY = {
  ru: {
    greet: 'Привет. Я быстро пойму задачу и дам короткую рекомендацию по сценарию. Начнём с ниши: в каком сегменте работает бизнес?',
    pain: 'Что сейчас сильнее всего тормозит рост?',
    revenue: 'Какой у вас примерный оборот?',
    recommend: flow => `Рекомендация: ${flow.niche === 'Интернет-магазин' ? 'LeadHunter + AI Support Agent' : flow.niche === 'B2B / услуги' ? 'Digital Broker + AI Lead Classifier' : flow.niche === 'Недвижимость' ? 'Digital Broker + AI Backoffice' : 'кастомный AI-сценарий'} под вашу задачу.`,
    final: 'Подготовил короткую рекомендацию. Дальше можно перейти в Telegram или обсудить задачу по почте.',
    telegram: 'Написать в Telegram'
  },
  en: {
    greet: 'Hi. I’ll quickly understand the task and suggest the most relevant scenario. Let’s start with the niche: what segment does your business operate in?',
    pain: 'What is currently slowing growth the most?',
    revenue: 'What is your approximate revenue?',
    recommend: flow => `Recommendation: ${flow.niche === 'E-commerce' ? 'LeadHunter + AI Support Agent' : flow.niche === 'B2B / Services' ? 'Digital Broker + AI Lead Classifier' : flow.niche === 'Real Estate' ? 'Digital Broker + AI Backoffice' : 'a custom AI scenario'} for your task.`,
    final: 'I’ve prepared a short recommendation. You can continue in Telegram or by email.',
    telegram: 'Message on Telegram'
  }
};

const CHAT_OPTIONS = {
  ru: {
    niche: ['Интернет-магазин', 'B2B / услуги', 'Недвижимость', 'Другое'],
    pain: ['Медленно отвечаем', 'Лиды теряются', 'Много ручной рутины', 'Сложно масштабировать'],
    revenue: ['До 1 млн ₽/мес', '1–5 млн ₽/мес', '5–20 млн ₽/мес', '20+ млн ₽/мес']
  },
  en: {
    niche: ['E-commerce', 'B2B / Services', 'Real Estate', 'Other'],
    pain: ['Slow replies', 'Leads are lost', 'Too much manual work', 'Hard to scale'],
    revenue: ['$0–10K/mo', '$10K–50K/mo', '$50K–100K/mo', '$100K+/mo']
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

function showTyping() {
  const wrap = chatMessages();
  if (!wrap) return null;
  const el = document.createElement('div');
  el.className = 'msg bot typing-msg';
  el.innerHTML = '<span class="typing" aria-hidden="true"><span></span><span></span><span></span></span>';
  wrap.appendChild(el);
  wrap.scrollTop = wrap.scrollHeight;
  return el;
}

function botReply(text, nextItems, done = false) {
  const typing = showTyping();
  setTimeout(() => {
    if (typing && typing.parentNode) typing.remove();
    addMsg(text, 'bot');
    const wrap = chatActions();
    if (!wrap) return;
    wrap.innerHTML = '';
    if (done) {
      const note = document.createElement('div');
      note.className = 'chat-finish';
      note.textContent = c.final;
      wrap.appendChild(note);
      return;
    }
    renderChatOptions(nextItems);
  }, 280);
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
  renderChatOptions(CHAT_OPTIONS[lang()].niche);
}

function handleChat(value) {
  const c = CHAT_COPY[lang()];
  if (CHAT.step === 0) {
    CHAT.niche = value; CHAT.step = 1;
    addMsg(value, 'user');
    botReply(c.pain, CHAT_OPTIONS[lang()].pain);
    return;
  }
  if (CHAT.step === 1) {
    CHAT.pain = value; CHAT.step = 2;
    addMsg(value, 'user');
    botReply(c.revenue, CHAT_OPTIONS[lang()].revenue);
    return;
  }
  if (CHAT.step === 2) {
    CHAT.revenue = value; CHAT.step = 3;
    addMsg(value, 'user');
    botReply(c.recommend(CHAT), [], true);
  }
}

function renderProductPage() {
  const root = document.getElementById('productRoot');
  if (!root) return;
  const key = document.body.dataset.product;
  const p = PRODUCTS[key];
  const s = PRODUCT_SECTIONS[key] || PRODUCT_SECTIONS.backoffice;
  if (!p) return;
  const c = p[lang()];
  document.title = `${c.title} · Nodalio`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', c.intro);
  root.innerHTML = `
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy" data-aos>
          <div class="hero-kicker">${c.title}</div>
          <h1 class="hero-title">${c.subtitle}</h1>
          <p class="hero-sub">${c.intro}</p>
          <div class="product-strip">
            ${c.capabilities.slice(0, 3).map(cap => `<span class="sales-pill">${cap}</span>`).join('')}
            <span class="sales-pill sales-pill--soft">${lang() === 'ru' ? 'Быстрый старт' : 'Fast start'}</span>
          </div>
          <div class="hero-actions">
            <a class="cta" href="https://t.me/olshanskiy_ad" target="_blank" rel="noreferrer"><span class="btn-icon" aria-hidden="true">✈</span><span>${lang() === 'ru' ? 'Написать в Telegram' : 'Contact via Telegram'}</span></a>
            <a class="mail-cta icon-only" href="mailto:olshanskiy.ad@gmail.com" aria-label="olshanskiy.ad@gmail.com" title="olshanskiy.ad@gmail.com"><span class="btn-icon" aria-hidden="true">✉</span></a>
            <a class="ghost" href="index.html">${lang() === 'ru' ? 'Назад на главную' : 'Back to home'}</a>
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
    <section class="section compact product-section">
      <div class="container">
        <div class="section-head" data-aos>
          <span class="label">${lang() === 'ru' ? 'Проблема' : 'Problem'}</span>
          <h2>${lang() === 'ru' ? 'Что именно решает этот продукт' : 'What this product solves'}</h2>
        </div>
        <div class="problem-grid">
          ${s.problem.map(item => `<article class="memo-card" data-aos><p>${item[lang()]}</p></article>`).join('')}
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
      <div class="container">
        <div class="section-head" data-aos>
          <span class="label">${lang() === 'ru' ? 'Сравнение' : 'Comparison'}</span>
          <h2>${lang() === 'ru' ? 'Ручной сценарий против Nodalio' : 'Manual flow vs Nodalio'}</h2>
        </div>
        <div class="comparison-table" data-aos>
          <div class="comparison-head">
            <span>${lang() === 'ru' ? 'Что сравниваем' : 'What we compare'}</span>
            <span>${lang() === 'ru' ? 'Вручную' : 'Manual'}</span>
            <span>Nodalio</span>
          </div>
          ${s.comparison.map(row => `
            <div class="comparison-row">
              <strong>${row.label[lang()]}</strong>
              <span>${row.manual[lang()]}</span>
              <span>${row.nodalio[lang()]}</span>
            </div>
          `).join('')}
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
          <span class="label">${lang() === 'ru' ? 'Что входит' : 'What’s included'}</span>
          <h3>${lang() === 'ru' ? 'Формат внедрения' : 'Delivery format'}</h3>
          <div class="mini-list">
            ${s.delivery.map(item => `<div class="mini-item"><strong>${item.title[lang()]}</strong><p>${item.text[lang()]}</p></div>`).join('')}
          </div>
        </article>
      </div>
    </section>
    <section class="section compact">
      <div class="container">
        <div class="section-head" data-aos>
          <span class="label">${lang() === 'ru' ? 'Доверие' : 'Trust'}</span>
          <h2>${lang() === 'ru' ? 'На чём держится решение' : 'What makes the solution reliable'}</h2>
        </div>
        <div class="trust-grid">
          ${s.trust.map(item => `<article class="case-card" data-aos><p>${item[lang()]}</p></article>`).join('')}
        </div>
      </div>
    </section>
    <section class="section compact">
      <div class="container contact-grid">
        <article class="contact-card" data-aos>
          <span class="label">${lang() === 'ru' ? 'Дальше' : 'Next step'}</span>
          <h3>${lang() === 'ru' ? 'Можно обсудить задачу сразу в Telegram' : 'We can discuss the task directly in Telegram'}</h3>
          <p class="contact-line">${lang() === 'ru' ? 'Без длинных форм и лишних шагов. Коротко сверяем задачу и формат внедрения.' : 'No long forms or extra steps. We quickly align on the task and delivery format.'}</p>
          <div class="hero-actions">
            <a class="cta" href="https://t.me/olshanskiy_ad" target="_blank" rel="noreferrer"><span class="btn-icon" aria-hidden="true">✈</span><span>${lang() === 'ru' ? 'Написать в Telegram' : 'Contact via Telegram'}</span></a>
            <a class="mail-cta icon-only" href="mailto:olshanskiy.ad@gmail.com" aria-label="olshanskiy.ad@gmail.com" title="olshanskiy.ad@gmail.com"><span class="btn-icon" aria-hidden="true">✉</span></a>
          </div>
        </article>
        <article class="contact-card" data-aos>
          <span class="label">${lang() === 'ru' ? 'Навигация' : 'Navigation'}</span>
          <h3>${lang() === 'ru' ? 'Назад к общей странице' : 'Back to the main page'}</h3>
          <p class="contact-line">${lang() === 'ru' ? 'Главная — это анализ процессов и автоматизация под задачу. Продукты — только доп. опция.' : 'The homepage is about process analysis and task-specific automation. Products are only a secondary option.'}</p>
          <div class="hero-actions">
            <a class="ghost" href="index.html">${lang() === 'ru' ? 'Назад на главную' : 'Back to home'}</a>
            <a class="mail-cta icon-only" href="mailto:olshanskiy.ad@gmail.com" aria-label="olshanskiy.ad@gmail.com" title="olshanskiy.ad@gmail.com"><span class="btn-icon" aria-hidden="true">✉</span></a>
          </div>
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
  initMiniNavSpy();
  initGraph();
  initFloatingChat();
  initStickyProductCta();
  renderProductPage();
  resetChat();
  initMailtoForms();
});

