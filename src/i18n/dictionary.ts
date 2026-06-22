/* NAWAT website — i18n dictionary (English + Arabic / RTL).
   EN is the source of truth for the shape; AR must match it. */

export type Lang = 'en' | 'ar'

const en = {
  dir: 'ltr', code: 'en', toggle: 'العربية',
  nav: { home: 'Home', services: 'Services', quantum: 'Projects', partners: 'Partners', about: 'About us', contact: 'Contact us', cta: 'Partner with us' },

  home: {
    eyebrow: 'Sovereign Data Center Developer · KSA',
    h1a: 'We develop the Kingdom’s ', h1hl: 'Digital', h1b: ' infrastructure',
    lead: 'NAWAT is a Saudi developer that designs, builds and operates next-gen, AI-ready data center campuses. Our flagship campus — Project Quantum — delivers 200 MW of GPU-dense compute to Riyadh.',
    explore: 'Explore Quantum', partner: 'Partner with us',
  },
  statement: { eyebrow: 'Why NAWAT', a: 'From consumer to producer — building the Kingdom’s ', em: 'sovereign AI infrastructure', b: '.' },
  pillars: [
    { icon: 'shield-check', n: '01', title: 'Sovereign', body: 'Compute and data that stay within the Kingdom’s borders — secure, in-Kingdom, and aligned with Vision 2030.' },
    { icon: 'cpu', n: '02', title: 'AI-Ready', body: 'GPU-dense halls with direct-to-chip liquid cooling, engineered for frontier-model training and hyperscale inference.' },
    { icon: 'leaf', n: '03', title: 'Sustainable', body: 'PUE 1.20 and WUE 0.005 — closed-loop water for an arid climate, roughly 360× better than the global average.' },
  ],
  split: {
    eyebrow: 'Transforming the landscape', title: 'One developer, every layer of the stack',
    lead: 'NAWAT delivers end-to-end across the entire data-center stack — from the slab to the silicon. Greenfield civil works, Tier III power, closed-loop liquid cooling and carrier-neutral fiber, all under one accountable developer.',
    bullets: ['Phased 4 × 50 MW pods, deployed to contracted demand', 'Closed-loop water engineered for an arid climate', 'Vendor-agnostic, hyperscaler-compatible by design'],
    cta: 'Explore our services', flagship: 'Flagship capacity', pods: 'Independent pods',
  },
  servicesHome: { eyebrow: 'What we do', title: 'Services we deliver as a developer', all: 'All services' },

  services: {
    eyebrow: 'What we do', title: 'Services we deliver as a developer',
    lead: 'End-to-end delivery across every layer of the data-center stack — from the slab to the silicon.',
    items: [
      { icon: 'snowflake', title: 'Liquid Cooling', body: 'Closed-loop, direct-to-chip systems carrying ~70% of load, up to 140 kW+/rack.' },
      { icon: 'zap', title: 'Power & Electrical', body: 'Tier III power trains — generators, UPS, transformers and switchgear, N+1.' },
      { icon: 'share-2', title: 'Connectivity & Fiber', body: 'Carrier-neutral fiber backbone and low-latency interconnect to Riyadh.' },
      { icon: 'droplets', title: 'Piping & Fluid', body: 'Engineered CDU, manifold and press-fit piping for leak-free thermal loops.' },
      { icon: 'building-2', title: 'Civil & Data Halls', body: 'Greenfield site development and modular data-hall construction at scale.' },
      { icon: 'shield-check', title: 'Security & Compliance', body: 'Six-layer UFC-compliant security, biometric access and 24/7 surveillance.' },
    ],
  },

  quantum: {
    eyebrow: 'Projects · Flagship', title: 'Quantum Data Center',
    lead: 'A purpose-built, AI-native sovereign campus in Riyadh — engineered for frontier-model training and hyperscale inference, with closed-loop liquid cooling and Tier III resilience.',
    coords: 'Riyadh, KSA · Eastern industrial corridor · 24.545°N 46.918°E',
    phasedEyebrow: 'Phased delivery', phasedTitle: '50 MW per stage, deployed to contracted demand',
    phases: [
      { day: 'Day 1', mw: '50 MW', note: 'Online Q1 2028' },
      { day: 'Day 2', mw: '100 MW', note: 'Proven model' },
      { day: 'Day 3', mw: '150 MW', note: 'Scale-up' },
      { day: 'Day 4', mw: '200 MW', note: 'Full campus' },
    ],
    infraEyebrow: 'Quantum · Infrastructure & delivery', infraTitle: 'Engineered to scale through 2040+',
    infra: [
      { icon: 'zap', title: 'Power', body: '40 DCC generators (2.75 MW each), lithium-ion UPS, 48-hour onsite fuel, Tier III concurrently maintainable.' },
      { icon: 'snowflake', title: 'Cooling', body: 'Air-cooled chillers + closed-loop liquid cooling, 40 thermal-storage tanks, variable-primary pumping.' },
      { icon: 'share-2', title: 'Connectivity', body: 'Riyadh fiber backbone access, carrier-neutral interconnect, sovereign in-Kingdom data residency.' },
    ],
  },

  partners: {
    eyebrow: 'Partners · Hyperscalers', title: 'Capacity offerings for hyperscalers',
    lead: 'Flexible commercial structures that match your procurement framework — from a single data hall to a full build-to-suit campus.',
    offerings: [
      { tag: 'Build-to-Suit', title: 'Build-to-Suit', body: 'Full campus delivered to your specification, with performance SLAs on PUE, uptime and power delivery.' },
      { tag: 'Colocation', title: 'Colocation / Data-Hall Lease', body: '12.5 MW data-hall increments — the smallest commitment unit. Ideal for market entry or capacity augmentation.' },
      { tag: 'Dedicated', title: 'Dedicated Capacity', body: 'Phase dedication aligned to Day-1 delivery, with right-of-first-refusal on subsequent pods.' },
    ],
    m1: 'PUE · top-decile efficiency', m2: 'Concurrently maintainable', m3: 'To first revenue', m4: 'Smallest commitment unit',
    ecoEyebrow: 'Partners · Ecosystem', ecoTitle: 'Our partner ecosystem',
    ecoLead: 'We bring together the construction, utility, technology and capital partners required to deliver sovereign AI infrastructure at scale.',
    ecosystem: [
      { icon: 'building-2', title: 'Construction & EPC', body: 'Reputable, data-center-experienced EPC contractors delivering civil works and MEP under fixed-price contracts.', meta: 'EPC contractors · design-build' },
      { icon: 'zap', title: 'Utilities & Power', body: 'SEC grid energization, independent water sourcing, and onsite generation for resilient, sovereign supply.', meta: 'SEC · water · generation' },
      { icon: 'cpu', title: 'Technology & OEM', body: 'Vendor-agnostic cooling, power and networking OEMs — no proprietary lock-in, hyperscaler-compatible by design.', meta: 'Cooling · power · networking' },
      { icon: 'waypoints', title: 'Financing & Capital', body: 'Backed by Khayira Holding, with access to sovereign, institutional and green-finance capital pools.', meta: 'Sovereign · institutional · green' },
    ],
  },

  about: {
    eyebrow: 'About NAWAT', title: 'Who we are',
    lead: 'NAWAT is a Saudi data-center developer building the Kingdom’s first sovereign, AI-ready campuses — anchoring Saudi Arabia’s transition from technology consumer to technology producer, aligned with Vision 2030.',
    missionT: 'Mission', missionB: 'Make sovereign, AI-ready compute capacity available in-Kingdom — secure, efficient and built to last.',
    visionT: 'Vision', visionB: 'A Kingdom that produces, not just consumes, the world’s most advanced AI infrastructure.',
    khayiraEyebrow: 'Part of Khayira Holding', khayiraTitle: 'A Khayira Holding venture',
    khayiraLead: 'NAWAT is the data-center development venture of Khayira Holding (KHC), built in partnership with Obeikan — leveraging Obeikan Industrial City infrastructure and KHC’s global industrial and capital networks.',
    khayiraCta: 'Visit khayiraholding.com', leadBadge: 'Leadership', ceoName: 'Abdulrahman A Obeikan', ceoRole: 'Chief Executive Officer',
    valuesEyebrow: 'Sustainability & values', valuesTitle: 'What we stand for',
    values: [
      { icon: 'shield-check', title: 'Sovereignty', body: 'Compute & data that stay within the Kingdom’s borders.' },
      { icon: 'leaf', title: 'Sustainability', body: 'WUE 0.005 — ~360× better than average; closed-loop water.' },
      { icon: 'gauge', title: 'Efficiency', body: 'PUE 1.20, lithium-ion UPS and thermal storage.' },
      { icon: 'server', title: 'Trust', body: 'Tier III, UFC-compliant security, Saudi Green Initiative aligned.' },
    ],
  },

  contact: {
    eyebrow: 'Contact', title: 'Let’s build the Kingdom’s AI future',
    lead: 'Tell us how you’d like to engage — capacity, investment, partnership or media.',
    fullName: 'Full name', email: 'Work email', org: 'Organization', message: 'Message',
    phName: 'Jane Doe', phEmail: 'jane@company.com', phOrg: 'Company / agency', phMsg: 'How can we help?',
    send: 'Send message', sentT: 'Message sent', sentB: 'Thank you — our team will reply within two business days.', sendAnother: 'Send another',
    locations: 'Locations', hqT: 'Headquarters', hqV: 'Riyadh, Kingdom of Saudi Arabia',
    campusT: 'Quantum campus', campusV: 'Riyadh eastern industrial corridor · 24.545°N, 46.918°E',
    inquiries: 'General inquiries',
    iq: [
      { label: 'Hyperscalers & capacity', email: 'capacity@nawat-ksa.com' },
      { label: 'Investors', email: 'invest@nawat-ksa.com' },
      { label: 'Partnerships', email: 'partners@nawat-ksa.com' },
      { label: 'Media & careers', email: 'hello@nawat-ksa.com' },
    ],
  },

  cta: { eyebrow: 'Get involved', title: 'Build the Kingdom’s AI backbone with us', lead: 'Hyperscaler, investor, or ecosystem partner — let’s talk.', partner: 'Partner with us', contact: 'Contact us' },
  footer: { biga: 'Powering the Kingdom’s ', bigem: 'Digital', bigb: ' infrastructure.', careers: 'Careers', privacy: 'Privacy Policy', terms: 'Terms of Use', copyright: '© 2026 NAWAT — A Khayira Holding venture · Riyadh, Kingdom of Saudi Arabia' },
  common: { readMore: 'Read more', itCapacity: 'IT capacity', pue: 'PUE · top-decile', wue: 'WUE · ~360× better', tier3: 'Concurrently maintainable', plotArea: 'Plot area', pods: 'Independent pods' },
}

export type Dict = typeof en

const ar: Dict = {
  dir: 'rtl', code: 'ar', toggle: 'English',
  nav: { home: 'الرئيسية', services: 'خدماتنا', quantum: 'المشاريع', partners: 'الشركاء', about: 'من نحن', contact: 'تواصل معنا', cta: 'كن شريكاً' },

  home: {
    eyebrow: 'مطوّر مراكز بيانات سيادية · المملكة العربية السعودية',
    h1a: 'نطوّر البنية ', h1hl: 'الرقمية', h1b: ' للمملكة',
    lead: 'نواة شركة سعودية تُصمّم وتبني وتشغّل حُرُم مراكز بيانات من الجيل القادم وجاهزة للذكاء الاصطناعي. مشروعنا الرائد — كوانتم — يوفّر 200 ميجاواط من القدرة الحاسوبية عالية الكثافة لمدينة الرياض.',
    explore: 'استكشف كوانتم', partner: 'كن شريكاً',
  },
  statement: { eyebrow: 'لماذا نواة', a: 'من مستهلك إلى منتج — نبني ', em: 'البنية السيادية للذكاء الاصطناعي', b: ' في المملكة.' },
  pillars: [
    { icon: 'shield-check', n: '٠١', title: 'سيادية', body: 'حوسبة وبيانات تبقى داخل حدود المملكة — آمنة، محلية، ومتوافقة مع رؤية 2030.' },
    { icon: 'cpu', n: '٠٢', title: 'جاهزة للذكاء الاصطناعي', body: 'قاعات عالية الكثافة بوحدات معالجة رسومية وتبريد سائل مباشر إلى الرقاقة، مهندَسة لتدريب النماذج المتقدمة والاستدلال فائق النطاق.' },
    { icon: 'leaf', n: '٠٣', title: 'مستدامة', body: 'كفاءة استخدام طاقة 1.20 وكفاءة مياه 0.005 — دورة مياه مغلقة لمناخ جاف، أفضل بنحو 360 مرة من المتوسط العالمي.' },
  ],
  split: {
    eyebrow: 'نُعيد تشكيل المشهد', title: 'مطوّر واحد، لكل طبقة من المنظومة',
    lead: 'تُنفّذ نواة كامل منظومة مركز البيانات من الأساس إلى الرقاقة. أعمال مدنية على أرض جديدة، طاقة بمستوى Tier III، تبريد سائل بدورة مغلقة، وألياف محايدة للمشغّلين — كلها تحت مطوّر واحد مسؤول.',
    bullets: ['وحدات مرحلية 4 × 50 ميجاواط، تُنشر وفق الطلب المتعاقد عليه', 'مياه بدورة مغلقة مهندَسة لمناخ جاف', 'محايدة للموردين ومتوافقة مع مزوّدي الحوسبة فائقة النطاق'],
    cta: 'استكشف خدماتنا', flagship: 'القدرة الرائدة', pods: 'وحدات مستقلة',
  },
  servicesHome: { eyebrow: 'ماذا نقدّم', title: 'الخدمات التي نقدّمها كمطوّر', all: 'جميع الخدمات' },

  services: {
    eyebrow: 'ماذا نقدّم', title: 'الخدمات التي نقدّمها كمطوّر',
    lead: 'تنفيذ متكامل عبر كل طبقة من منظومة مركز البيانات — من الأساس إلى الرقاقة.',
    items: [
      { icon: 'snowflake', title: 'التبريد السائل', body: 'أنظمة دورة مغلقة ومباشرة إلى الرقاقة تحمل نحو 70% من الحِمل، حتى أكثر من 140 كيلوواط لكل خزانة.' },
      { icon: 'zap', title: 'الطاقة والكهرباء', body: 'منظومات طاقة بمستوى Tier III — مولّدات، أنظمة UPS، محوّلات ولوحات تبديل، بنظام N+1.' },
      { icon: 'share-2', title: 'الاتصال والألياف', body: 'شبكة ألياف أساسية محايدة للمشغّلين وربط منخفض زمن الوصول بالرياض.' },
      { icon: 'droplets', title: 'الأنابيب والسوائل', body: 'وحدات توزيع تبريد ومشعّبات وأنابيب ضغط مهندَسة لحلقات حرارية خالية من التسرّب.' },
      { icon: 'building-2', title: 'الأعمال المدنية والقاعات', body: 'تطوير مواقع جديدة وإنشاء قاعات بيانات معيارية على نطاق واسع.' },
      { icon: 'shield-check', title: 'الأمن والامتثال', body: 'أمن من ست طبقات متوافق مع UFC، دخول بالبصمة الحيوية ومراقبة على مدار الساعة.' },
    ],
  },

  quantum: {
    eyebrow: 'المشاريع · الرائد', title: 'مركز بيانات كوانتم',
    lead: 'حرم سيادي مبني لغرضٍ محدد وأصيل للذكاء الاصطناعي في الرياض — مهندَس لتدريب النماذج المتقدمة والاستدلال فائق النطاق، بتبريد سائل بدورة مغلقة ومرونة بمستوى Tier III.',
    coords: 'الرياض، المملكة · الممر الصناعي الشرقي · 24.545°ش 46.918°ق',
    phasedEyebrow: 'تسليم مرحلي', phasedTitle: '50 ميجاواط لكل مرحلة، تُنشر وفق الطلب المتعاقد عليه',
    phases: [
      { day: 'المرحلة 1', mw: '50 ميجاواط', note: 'التشغيل الربع الأول 2028' },
      { day: 'المرحلة 2', mw: '100 ميجاواط', note: 'نموذج مُثبَت' },
      { day: 'المرحلة 3', mw: '150 ميجاواط', note: 'توسّع' },
      { day: 'المرحلة 4', mw: '200 ميجاواط', note: 'الحرم الكامل' },
    ],
    infraEyebrow: 'كوانتم · البنية والتسليم', infraTitle: 'مهندَس للتوسّع حتى ما بعد 2040',
    infra: [
      { icon: 'zap', title: 'الطاقة', body: '40 مولّداً (2.75 ميجاواط لكل منها)، أنظمة UPS بالليثيوم، وقود لـ 48 ساعة في الموقع، Tier III قابل للصيانة المتزامنة.' },
      { icon: 'snowflake', title: 'التبريد', body: 'مبرّدات هوائية + تبريد سائل بدورة مغلقة، 40 خزان تخزين حراري، ضخّ أولي متغيّر.' },
      { icon: 'share-2', title: 'الاتصال', body: 'وصول لشبكة ألياف الرياض، ربط محايد للمشغّلين، وإقامة بيانات سيادية داخل المملكة.' },
    ],
  },

  partners: {
    eyebrow: 'الشركاء · مزوّدو الحوسبة فائقة النطاق', title: 'باقات السعة لمزوّدي الحوسبة فائقة النطاق',
    lead: 'هياكل تجارية مرنة تتوافق مع إطار مشترياتك — من قاعة بيانات واحدة إلى حرم متكامل مبني حسب الطلب.',
    offerings: [
      { tag: 'مبني حسب الطلب', title: 'مبني حسب الطلب', body: 'حرم كامل يُسلَّم وفق مواصفاتك، مع اتفاقيات مستوى خدمة لكفاءة الطاقة ووقت التشغيل وتسليم الطاقة.' },
      { tag: 'الاستضافة المشتركة', title: 'استضافة مشتركة / تأجير قاعات', body: 'وحدات قاعات بسعة 12.5 ميجاواط — أصغر وحدة التزام. مثالية لدخول السوق أو زيادة السعة.' },
      { tag: 'سعة مخصصة', title: 'سعة مخصصة', body: 'تخصيص مرحلي متوافق مع تسليم اليوم الأول، مع حق الرفض الأول للوحدات اللاحقة.' },
    ],
    m1: 'كفاءة طاقة ضمن الأفضل عالمياً', m2: 'قابل للصيانة المتزامنة', m3: 'حتى أول إيراد', m4: 'أصغر وحدة التزام',
    ecoEyebrow: 'الشركاء · المنظومة', ecoTitle: 'منظومة شركائنا',
    ecoLead: 'نجمع شركاء الإنشاء والمرافق والتقنية ورأس المال اللازمين لتقديم بنية ذكاء اصطناعي سيادية على نطاق واسع.',
    ecosystem: [
      { icon: 'building-2', title: 'الإنشاء والمقاولات', body: 'مقاولون موثوقون ذوو خبرة في مراكز البيانات ينفّذون الأعمال المدنية والكهروميكانيكية بعقود بسعر ثابت.', meta: 'مقاولو EPC · تصميم وبناء' },
      { icon: 'zap', title: 'المرافق والطاقة', body: 'تغذية من الشبكة عبر الشركة السعودية للكهرباء، مصادر مياه مستقلة، وتوليد في الموقع لإمداد مرن وسيادي.', meta: 'الكهرباء · المياه · التوليد' },
      { icon: 'cpu', title: 'التقنية والموردون', body: 'موردو تبريد وطاقة وشبكات محايدون — دون احتكار، ومتوافقون مع مزوّدي الحوسبة فائقة النطاق.', meta: 'تبريد · طاقة · شبكات' },
      { icon: 'waypoints', title: 'التمويل ورأس المال', body: 'مدعومة من قابضة خيرة، مع وصول إلى مصادر رأس مال سيادية ومؤسسية وتمويل أخضر.', meta: 'سيادي · مؤسسي · أخضر' },
    ],
  },

  about: {
    eyebrow: 'من نحن', title: 'من نحن',
    lead: 'نواة شركة سعودية لتطوير مراكز البيانات تبني أول حُرُم سيادية جاهزة للذكاء الاصطناعي في المملكة — لترسيخ انتقال المملكة من مستهلك للتقنية إلى منتج لها، بما يتوافق مع رؤية 2030.',
    missionT: 'رسالتنا', missionB: 'إتاحة سعة حوسبة سيادية جاهزة للذكاء الاصطناعي داخل المملكة — آمنة وفعّالة ومبنية لتدوم.',
    visionT: 'رؤيتنا', visionB: 'مملكة تُنتج، لا تستهلك فقط، أكثر بنى الذكاء الاصطناعي تقدّماً في العالم.',
    khayiraEyebrow: 'جزء من قابضة خيرة', khayiraTitle: 'مشروع من قابضة خيرة',
    khayiraLead: 'نواة هي مشروع تطوير مراكز البيانات التابع لقابضة خيرة (KHC)، بُني بالشراكة مع العبيكان — مستفيداً من بنية مدينة العبيكان الصناعية وشبكات خيرة الصناعية والرأسمالية العالمية.',
    khayiraCta: 'زر khayiraholding.com', leadBadge: 'القيادة', ceoName: 'عبدالرحمن أ. العبيكان', ceoRole: 'الرئيس التنفيذي',
    valuesEyebrow: 'الاستدامة والقيم', valuesTitle: 'ما نؤمن به',
    values: [
      { icon: 'shield-check', title: 'السيادة', body: 'حوسبة وبيانات تبقى داخل حدود المملكة.' },
      { icon: 'leaf', title: 'الاستدامة', body: 'كفاءة مياه 0.005 — أفضل بنحو 360 مرة من المتوسط؛ مياه بدورة مغلقة.' },
      { icon: 'gauge', title: 'الكفاءة', body: 'كفاءة طاقة 1.20، أنظمة UPS بالليثيوم وتخزين حراري.' },
      { icon: 'server', title: 'الثقة', body: 'Tier III، أمن متوافق مع UFC، ومتوافق مع مبادرة السعودية الخضراء.' },
    ],
  },

  contact: {
    eyebrow: 'تواصل معنا', title: 'لنبنِ مستقبل الذكاء الاصطناعي للمملكة',
    lead: 'أخبرنا كيف ترغب في التعاون — سعة، استثمار، شراكة أو إعلام.',
    fullName: 'الاسم الكامل', email: 'البريد المهني', org: 'الجهة', message: 'الرسالة',
    phName: 'مثال: محمد الأحمد', phEmail: 'name@company.com', phOrg: 'الشركة / الجهة', phMsg: 'كيف يمكننا المساعدة؟',
    send: 'إرسال الرسالة', sentT: 'تم إرسال الرسالة', sentB: 'شكراً لك — سيردّ فريقنا خلال يومي عمل.', sendAnother: 'إرسال رسالة أخرى',
    locations: 'المواقع', hqT: 'المقر الرئيسي', hqV: 'الرياض، المملكة العربية السعودية',
    campusT: 'حرم كوانتم', campusV: 'الممر الصناعي الشرقي بالرياض · 24.545°ش، 46.918°ق',
    inquiries: 'الاستفسارات العامة',
    iq: [
      { label: 'الحوسبة فائقة النطاق والسعة', email: 'capacity@nawat-ksa.com' },
      { label: 'المستثمرون', email: 'invest@nawat-ksa.com' },
      { label: 'الشراكات', email: 'partners@nawat-ksa.com' },
      { label: 'الإعلام والوظائف', email: 'hello@nawat-ksa.com' },
    ],
  },

  cta: { eyebrow: 'انضمّ إلينا', title: 'ابنِ العمود الفقري للذكاء الاصطناعي في المملكة معنا', lead: 'مزوّد حوسبة فائقة النطاق، مستثمر، أو شريك في المنظومة — لنتحدّث.', partner: 'كن شريكاً', contact: 'تواصل معنا' },
  footer: { biga: 'نُشغّل البنية ', bigem: 'الرقمية', bigb: ' للمملكة.', careers: 'الوظائف', privacy: 'سياسة الخصوصية', terms: 'شروط الاستخدام', copyright: '© 2026 نواة — مشروع من قابضة خيرة · الرياض، المملكة العربية السعودية' },
  common: { readMore: 'اقرأ المزيد', itCapacity: 'السعة الحاسوبية', pue: 'كفاءة الطاقة · ضمن الأفضل', wue: 'كفاءة المياه · أفضل بـ360×', tier3: 'قابل للصيانة المتزامنة', plotArea: 'مساحة الأرض', pods: 'وحدات مستقلة' },
}

export const dictionaries: Record<Lang, Dict> = { en, ar }
