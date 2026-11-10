// ── /ai-gtm-systems/ (EN) and /sv/ai-gtm-system/ (SV) content ────────────────
// EN copy supplied by the founder; SV is a translation. Case-study proof is
// pulled from work.ts so metrics match the case pages.

const SITE_URL = 'https://greow.digital'

const aiGtmMetaEn = {
  path: '/ai-gtm-systems/',
  title: 'AI GTM Systems & Automation Consulting | Greow Digital',
  description:
    'Build AI-native Growth & GTM systems with Erik Oliva Werner. Connect data, AI agents, content, websites and workflows into one intelligent growth engine.',
}

const aiGtmEn = {
  hero: {
    kicker: 'AI-Native Growth & GTM Systems',
    h1a: 'Your next growth hire',
    h1b: 'might not be human.',
    sub: 'Build an AI-native Growth & GTM engine.',
    body: [
      'Imagine a growth organization where insights turn into actions, campaigns practically build themselves, and AI agents handle the repetitive work that slows your team down.',
      'Not another dashboard. Not another collection of disconnected AI tools. A connected system that helps your business learn, build and grow faster.',
      'I help companies design and build AI-native Growth & GTM systems, combining senior growth expertise with hands-on AI development, automation and modern technology.',
    ],
    cta: 'Let’s build your growth engine →',
    cta2: 'Explore how it works',
    founderRole: 'Founder, Greow Digital · Stockholm, Sweden',
  },

  problem: {
    label: 'The problem',
    h2a: 'Your growth stack is growing.',
    h2b: 'Is your growth?',
    intro: [
      'More tools. More dashboards. More data. More meetings. Sound familiar?',
      'Most growth and marketing teams already have everything they need to understand their customers and make better decisions. The problem is that everything lives in different places.',
    ],
    silos: [
      { system: 'Your analytics platform', knows: 'knows what’s happening on your website.' },
      { system: 'Your CRM', knows: 'knows what’s happening in your pipeline.' },
      { system: 'Your advertising platforms', knows: 'know what you’re spending.' },
      { system: 'Your product analytics', knows: 'knows how customers behave.' },
    ],
    gap: 'But none of these systems really talk to each other in a way that helps your team move faster.',
    peopleLead: 'So people become the integrations.',
    chores: ['Exporting reports', 'Copying data', 'Writing briefs', 'Updating spreadsheets', 'Chasing approvals', 'Moving information between tools'],
    aiNote: 'And when AI enters the picture, companies often add even more disconnected tools.',
    question: 'What if we stopped adding tools and started connecting the dots?',
  },

  solution: {
    label: 'The solution',
    h2a: 'Meet the AI-native',
    h2b: 'Growth Operating System.',
    body: [
      'A Growth Operating System is a connected environment that brings together the information, tools, workflows and people needed to drive growth.',
      'Think of it as the operating layer on top of your existing technology stack. It connects data with insights. Insights with decisions. Decisions with execution. And execution with learning.',
      'With AI agents and automation built into the process, your team can spend less time coordinating work and more time creating business impact.',
    ],
    stackLabel: 'From fragmented operations to connected growth.',
    layers: [
      { title: 'Your existing stack', body: 'Analytics, CRM, advertising, CMS, product data, customer insights and collaboration tools.' },
      { title: 'Your intelligence layer', body: 'Connected data, context, signals, AI agents and automated workflows.' },
      { title: 'Your growth engine', body: 'Research, content, campaigns, websites, experiments, lead generation and optimization.' },
      { title: 'Continuous learning', body: 'Performance feeds back into the system, helping teams make better decisions and improve what comes next.' },
    ],
    closing: ['This isn’t about replacing your team.', 'It’s about giving them an entirely new set of capabilities.'],
  },

  growthship: {
    label: 'The Growthship framework',
    h2: 'One system. Four interconnected capabilities.',
    intro: [
      'My approach is inspired by The Growthship, an AI-native Growth & GTM operating model I’ve been developing through my work with modern growth organizations.',
      'The concept brings together four interconnected capabilities.',
    ],
    enableLabel: 'What it can enable',
    outcomeLabel: 'The outcome',
    items: [
      {
        num: '01',
        title: 'The Bridge',
        tagline: 'Turn scattered data into shared intelligence.',
        body: [
          'Most businesses don’t have a data problem. They have an accessibility and actionability problem.',
          'The Bridge connects information from across your growth stack and makes it useful for the people and AI agents working with it. Instead of jumping between dashboards and manually piecing together reports, teams can work from a more connected view of their business.',
        ],
        list: [
          'Connected marketing, sales and product data',
          'Unified growth performance views',
          'Natural-language analysis and reporting',
          'AI-assisted research and business intelligence',
          'Shared context for agents and workflows',
          'Faster, better-informed decisions',
        ],
        outcome: 'Less time searching for answers. More time acting on them.',
      },
      {
        num: '02',
        title: 'The Engine Room',
        tagline: 'Where ideas turn into assets and actions.',
        body: [
          'The Engine Room is where AI agents, workflows and production capabilities come together.',
          'Imagine a content operation where research, briefs, drafts, landing pages, creative assets and publishing workflows are connected. Or a campaign process where agents support the work from initial idea to launch, with humans reviewing the decisions that matter.',
          'The Engine Room makes this possible by connecting AI capabilities to the tools and processes your team already uses.',
        ],
        list: [
          'AI-assisted content research and production',
          'Automated content and campaign workflows',
          'Custom AI agents for marketing operations',
          'Landing page and website development',
          'CMS and publishing automation',
          'Workflow orchestration across tools',
          'Human review, approval and quality control',
        ],
        outcome: 'More output, faster execution and fewer manual dependencies.',
      },
      {
        num: '03',
        title: 'The Radar',
        tagline: 'Spot opportunities before they become missed opportunities.',
        body: [
          'Your business generates signals every day. Changes in conversion rates. Shifts in acquisition performance. New customer behaviors. Emerging search trends. Campaign results. Most of these signals are buried in dashboards or discovered too late.',
          'The Radar is the intelligence layer that continuously looks for meaningful changes, patterns and opportunities. Rather than waiting for someone to open a report, it helps surface what deserves attention.',
        ],
        list: [
          'Automated performance monitoring',
          'Opportunity and anomaly detection',
          'Funnel and conversion insights',
          'Customer and market signals',
          'AI-generated recommendations',
          'Prioritized growth opportunities',
        ],
        outcome: 'A more proactive growth organization.',
      },
      {
        num: '04',
        title: 'The Launchpad',
        tagline: 'From insight to experiment to impact.',
        body: [
          'Great insights don’t drive growth. Actions do.',
          'The Launchpad connects opportunities with execution, helping teams turn hypotheses into experiments, campaigns and improvements. It brings structure to how initiatives are prioritized, launched, measured and learned from.',
        ],
        list: [
          'Experiment ideation and prioritization',
          'Hypothesis generation',
          'Campaign planning and execution',
          'Conversion optimization workflows',
          'Experiment tracking and measurement',
          'Automated learning and documentation',
          'Continuous improvement loops',
        ],
        outcome: 'A faster, more systematic approach to growth.',
      },
    ],
  },

  bigPicture: {
    label: 'The bigger picture',
    h2a: 'From dashboards to decisions.',
    h2b: 'From decisions to action.',
    intro: [
      'The real value doesn’t come from any single agent, workflow or dashboard. It comes from connecting them.',
      'Imagine this:',
    ],
    steps: [
      'Your analytics detects a drop in conversion rates on a key landing page.',
      'An AI agent investigates the change, combines it with recent campaign data and identifies a potential issue.',
      'Another agent reviews the page, customer feedback and competitive positioning.',
      'The system suggests three possible experiments, complete with hypotheses, expected impact and implementation requirements.',
      'Your growth team reviews the recommendations and selects one.',
      'A workflow helps build the new landing page variation, prepares the experiment and supports the launch.',
      'Results are monitored, documented and fed back into the system.',
    ],
    loop: 'One continuous loop. From signal to insight to action to learning.',
    closing: 'That’s the potential of an AI-native Growth Operating System.',
    disclaimer: 'Illustrative future-state workflow. Actual capabilities depend on the systems and integrations implemented.',
  },

  agenticWeb: {
    label: 'Agentic web',
    h2: 'What if your website could do more than display content?',
    intro: [
      'For years, websites have been built around pages, templates and traditional content management systems. Marketing teams depend on developers to launch new experiences. Content gets trapped in rigid structures. Lead information gets passed between disconnected systems.',
      'And now AI is changing how people discover, evaluate and interact with businesses online. It’s time to rethink the website itself.',
    ],
    h3: 'From static websites to intelligent growth platforms.',
    lead: 'I help businesses explore and build modern digital experiences where websites, content, data and commercial workflows work together. This can include:',
    items: [
      { title: 'Custom websites and CMS', body: 'Flexible websites and content systems designed around your business, with AI-assisted development reducing the friction between idea and implementation.' },
      { title: 'Agent-ready content and experiences', body: 'Structured, accessible content and interfaces designed for a world where both people and AI-powered systems discover and interact with digital services.' },
      { title: 'Connected lead generation', body: 'Forms, lead capture, enrichment, qualification, routing and backoffice workflows that connect the website directly to commercial operations.' },
      { title: 'Automated content operations', body: 'Workflows that support research, content production, optimization and publishing while keeping quality and human oversight in place.' },
      { title: 'Custom growth applications', body: 'Internal tools, backoffice interfaces and purpose-built applications that remove manual work and help teams operate more efficiently.' },
    ],
    closing: ['The goal isn’t simply to build a faster website.', 'It’s to turn your digital presence into an active part of your growth engine.'],
  },

  realWorld: {
    label: 'Real-world application',
    h2: 'Built from real growth challenges. Not just AI hype.',
    intro: [
      'My approach combines more than 15 years of experience across product development, Growth, PLG, acquisition and marketing operations with hands-on work building AI-powered systems.',
      'Two environments have shaped how I think about the future of Growth & GTM.',
    ],
    sands: {
      slug: 'sands-entreprenad',
      name: 'Sands',
      heading: 'Building a connected digital growth platform.',
      body: [
        'At Sands, I’ve been working as a digital growth partner, combining commercial growth strategy with hands-on development of the systems supporting lead generation and digital sales.',
        'Instead of treating the website, content, leads and analytics as separate projects, the approach is to connect them into one evolving growth platform.',
      ],
      listLabel: 'The work spans',
      list: [
        'Custom website development',
        'Conversion-focused landing pages',
        'Custom CMS and content workflows',
        'Internal backoffice capabilities',
        'Lead capture and management processes',
        'Marketing and analytics integrations',
        'SEO and conversion optimization',
        'AI-assisted development and automation',
      ],
      outro: 'The aim is to create an environment where new ideas can be implemented quickly, customer journeys can be improved continuously, and the business has greater control over its digital growth infrastructure.',
      principle: 'The principle: Build around the business, not around the limitations of the tools.',
      cta: 'Explore the Sands case study →',
    },
    mentimeter: {
      name: 'Mentimeter',
      heading: 'Rethinking how a modern SaaS growth organization operates.',
      body: [
        'My work at Mentimeter has given me the opportunity to explore AI-native Growth & GTM in a larger, international SaaS environment.',
        'Here, growth involves much more than marketing campaigns. It connects product-led growth, acquisition, product marketing, experimentation, data, customer insights and go-to-market execution.',
        'The challenge is not simply introducing AI into individual tasks. It’s understanding how these capabilities can work together as a connected operating model.',
        'That thinking has shaped The Growthship concept, with its four interconnected areas:',
      ],
      areas: [
        { title: 'The Bridge', body: 'for data, insights and decisions' },
        { title: 'The Engine Room', body: 'for agents, workflows and production' },
        { title: 'The Radar', body: 'for signals, opportunities and recommendations' },
        { title: 'The Launchpad', body: 'for experiments, campaigns and execution' },
      ],
      outro: [
        'The ambition is to explore how growth organizations can become more connected, proactive and effective by bringing AI, data and execution closer together.',
        'It’s a shift from fragmented processes toward an AI-native operating model.',
      ],
      disclaimer:
        'This section describes professional experience and an evolving operating model, not a completed commercial software product or a Greow client engagement.',
    },
    moreLabel: 'More related work',
    moreCases: ['bnbalyze', 'leadfeeder-dealfront', 'refapp'],
  },

  build: {
    label: 'How we build it',
    h2: 'Start small. Build smart. Scale what works.',
    intro: [
      'You don’t need to rebuild your entire technology stack to get started. In fact, you probably shouldn’t.',
      'The best approach is to identify a meaningful opportunity, build something useful and expand from there.',
    ],
    deliverablesLabel: 'Typical deliverables',
    steps: [
      {
        num: '01',
        title: 'Discover & Design',
        tagline: 'Find the highest-value opportunities.',
        body: [
          'We map your existing growth processes, data sources, technology stack and operational bottlenecks.',
          'Together, we identify where AI, automation and connected workflows can create the most business value.',
        ],
        deliverables: [
          'Growth and GTM workflow mapping',
          'AI opportunity assessment',
          'Technology and data architecture review',
          'Prioritized use cases',
          'Initial system blueprint and implementation roadmap',
        ],
      },
      {
        num: '02',
        title: 'Build & Connect',
        tagline: 'Turn the blueprint into a working system.',
        body: [
          'We implement the first capabilities, whether that’s an AI agent, automated workflow, custom application, connected dashboard or a broader growth platform.',
          'The focus is on building useful functionality that can be tested in real operations.',
        ],
        deliverables: [
          'AI agents and automated workflows',
          'Data and API integrations',
          'Custom growth applications',
          'CMS and content automation',
          'Lead generation and backoffice systems',
          'Working prototypes and initial implementations',
        ],
      },
      {
        num: '03',
        title: 'Operate & Optimize',
        tagline: 'Make it part of your growth operation.',
        body: [
          'Once the first capabilities are in place, we improve them, connect additional workflows and establish the processes needed to keep evolving. We introduce measurement, monitoring, documentation and the right level of human oversight.',
          'The objective is to create systems that your team can understand, operate and improve.',
        ],
        deliverables: [
          'Performance monitoring',
          'Workflow optimization',
          'Additional agents and integrations',
          'Experimentation and continuous improvement',
          'Documentation and knowledge transfer',
          'Ongoing growth and technical advisory',
        ],
      },
    ],
  },

  why: {
    label: 'Why Greow',
    h2: 'Growth expertise first. Technology second.',
    intro: [
      'There are plenty of people who can build an AI agent. And plenty of consultants who can create a growth strategy.',
      'But building an effective growth system requires understanding both the business and the technology.',
    ],
    needs: [
      'You need to understand acquisition, conversion, retention, customer behavior, product development, marketing operations and commercial priorities.',
      'You need to know which problems are worth solving.',
      'And you need to be able to turn ideas into working solutions.',
    ],
    body: [
      'That’s where I bring something different. I’ve spent my career working across Growth, Product, Marketing and Technology.',
      'I’ve led teams, built digital products, developed growth strategies, established operating models and worked hands-on with the tools and systems behind them.',
      'Today, I combine that experience with AI-assisted development, automation and agentic workflows to help companies build a new generation of growth capabilities.',
    ],
    closing: ['Not technology for technology’s sake.', 'Technology that helps businesses grow.'],
  },

  who: {
    label: 'Who it’s for',
    h2: 'For teams ready to rethink how growth works.',
    audiences: [
      { title: 'B2B SaaS & PLG Companies', body: 'Connect product, marketing and commercial data. Improve acquisition and activation. Automate workflows and build more efficient growth operations.' },
      { title: 'Growth & Marketing Teams', body: 'Reduce manual work, improve access to insights and introduce AI agents into content, campaigns, analytics and experimentation.' },
      { title: 'Founders & Growing Businesses', body: 'Build the digital infrastructure needed to generate demand, capture leads and scale commercial operations without unnecessary complexity.' },
      { title: 'Companies Exploring AI Transformation', body: 'Move beyond disconnected AI experiments and start building practical capabilities around real business needs.' },
    ],
    relatedLabel: 'Related services',
    relatedServices: ['aiGrowth', 'advisory', 'gaas', 'fractional'],
  },

  faq: {
    label: 'FAQ',
    h2: 'Frequently asked questions',
    items: [
      {
        q: 'What is an AI-native Growth Operating System?',
        a: [
          'An AI-native Growth Operating System is a connected set of data sources, tools, AI agents and workflows that helps a business manage and improve its growth operations.',
          'Rather than replacing every existing tool, it creates a more integrated way to turn information into decisions and actions.',
        ],
      },
      {
        q: 'Is The Growthship a software product?',
        a: [
          'The Growthship is the name of an AI-native Growth & GTM operating model developed through my professional work. It provides a conceptual framework for connecting insights, AI agents, opportunities and execution.',
          'It’s not presented here as an off-the-shelf commercial software product.',
        ],
      },
      {
        q: 'Do we need to replace our existing CRM, analytics or marketing tools?',
        a: [
          'Usually not. The goal is typically to get more value from your existing technology by connecting data, automating workflows and building capabilities around your current systems.',
        ],
      },
      {
        q: 'Can you build custom AI agents and workflows?',
        a: [
          'Yes. I work with AI-assisted development, integrations, automation and custom applications to help businesses implement practical solutions.',
          'The architecture depends on your objectives, existing infrastructure, security requirements and available data.',
        ],
      },
      {
        q: 'Can you build websites and custom applications too?',
        a: [
          'Yes. My background includes product development, e-commerce and digital growth, and I work hands-on with modern AI-assisted development.',
          'This can include websites, landing pages, custom CMS solutions, internal tools, lead management systems and growth applications.',
        ],
      },
      {
        q: 'How long does it take to build an AI-native growth system?',
        a: [
          'It depends on the scope and complexity. Rather than committing to a large transformation upfront, I recommend starting with a focused use case or prototype, validating its value and expanding incrementally.',
        ],
      },
      {
        q: 'Do you provide ongoing support?',
        a: [
          'Yes. Engagements can range from a focused audit or implementation project to an ongoing partnership covering strategy, development, experimentation and optimization.',
        ],
      },
    ],
  },

  cta: {
    h2a: 'Stop adding tools.',
    h2b: 'Start building your growth engine.',
    body: [
      'The next generation of growth organizations won’t necessarily have bigger teams or more software. They’ll have better-connected systems, smarter workflows and more time to focus on the work that matters.',
      'You don’t need to build everything at once. You just need to start with the right problem.',
    ],
    kicker: 'Let’s explore what an AI-native growth engine could look like for your business.',
    button: 'Let’s build something →',
    signature: ['Erik Oliva Werner', 'Founder, Greow Digital', 'Stockholm, Sweden'],
  },
}

export type AiGtmContent = typeof aiGtmEn

// ── Swedish ──────────────────────────────────────────────────────────────────
// Addresses the company ("ni"). The Growthship area names stay in English as
// framework names.

const aiGtmMetaSv = {
  path: '/sv/ai-gtm-system/',
  title: 'AI GTM-system & automationskonsult | Greow Digital',
  description:
    'Bygg AI-native growth- och GTM-system med Erik Oliva Werner. Koppla ihop data, AI-agenter, innehåll, sajter och arbetsflöden till en intelligent tillväxtmotor.',
}

const aiGtmSv: AiGtmContent = {
  hero: {
    kicker: 'AI-native growth- & GTM-system',
    h1a: 'Er nästa growth-rekrytering',
    h1b: 'kanske inte är en människa.',
    sub: 'Bygg en AI-native growth- och GTM-motor.',
    body: [
      'Tänk er en growth-organisation där insikter blir till handling, kampanjer nästan bygger sig själva och AI-agenter tar hand om det repetitiva arbete som bromsar ert team.',
      'Inte ännu en dashboard. Inte ännu en samling lösryckta AI-verktyg. Ett sammankopplat system som hjälper er verksamhet att lära, bygga och växa snabbare.',
      'Jag hjälper bolag att designa och bygga AI-native growth- och GTM-system, där senior growth-expertis kombineras med praktisk AI-utveckling, automation och modern teknik.',
    ],
    cta: 'Låt oss bygga er tillväxtmotor →',
    cta2: 'Se hur det fungerar',
    founderRole: 'Grundare, Greow Digital · Stockholm',
  },

  problem: {
    label: 'Problemet',
    h2a: 'Er growth-stack växer.',
    h2b: 'Gör er tillväxt det?',
    intro: [
      'Fler verktyg. Fler dashboards. Mer data. Fler möten. Låter det bekant?',
      'De flesta growth- och marknadsteam har redan allt de behöver för att förstå sina kunder och fatta bättre beslut. Problemet är att allt finns på olika ställen.',
    ],
    silos: [
      { system: 'Ert analysverktyg', knows: 'vet vad som händer på er sajt.' },
      { system: 'Ert CRM', knows: 'vet vad som händer i er pipeline.' },
      { system: 'Era annonsplattformar', knows: 'vet vad ni spenderar.' },
      { system: 'Er produktanalys', knows: 'vet hur kunderna beter sig.' },
    ],
    gap: 'Men inget av systemen pratar egentligen med de andra på ett sätt som hjälper ert team att röra sig snabbare.',
    peopleLead: 'Så människorna blir integrationerna.',
    chores: ['Exporterar rapporter', 'Kopierar data', 'Skriver briefer', 'Uppdaterar kalkylark', 'Jagar godkännanden', 'Flyttar information mellan verktyg'],
    aiNote: 'Och när AI kommer in i bilden lägger många bolag till ännu fler fristående verktyg.',
    question: 'Tänk om vi slutade lägga till verktyg och började koppla ihop delarna?',
  },

  solution: {
    label: 'Lösningen',
    h2a: 'Möt det AI-native',
    h2b: 'Growth Operating System.',
    body: [
      'Ett Growth Operating System är en sammankopplad miljö som samlar den information, de verktyg, arbetsflöden och människor som behövs för att driva tillväxt.',
      'Se det som det operativa lagret ovanpå er befintliga teknikstack. Det kopplar ihop data med insikter. Insikter med beslut. Beslut med genomförande. Och genomförande med lärande.',
      'Med AI-agenter och automation inbyggda i processen kan ert team lägga mindre tid på att samordna arbete och mer tid på att skapa affärsnytta.',
    ],
    stackLabel: 'Från splittrad drift till sammankopplad tillväxt.',
    layers: [
      { title: 'Er befintliga stack', body: 'Analys, CRM, annonsering, CMS, produktdata, kundinsikter och samarbetsverktyg.' },
      { title: 'Ert intelligenslager', body: 'Sammankopplad data, kontext, signaler, AI-agenter och automatiserade arbetsflöden.' },
      { title: 'Er tillväxtmotor', body: 'Research, innehåll, kampanjer, sajter, experiment, leadgenerering och optimering.' },
      { title: 'Kontinuerligt lärande', body: 'Resultaten matas tillbaka in i systemet och hjälper teamen att fatta bättre beslut och förbättra nästa steg.' },
    ],
    closing: ['Det handlar inte om att ersätta ert team.', 'Det handlar om att ge dem en helt ny uppsättning förmågor.'],
  },

  growthship: {
    label: 'Growthship-ramverket',
    h2: 'Ett system. Fyra sammankopplade förmågor.',
    intro: [
      'Mitt arbetssätt är inspirerat av The Growthship, en AI-native operativ modell för growth och GTM som jag har utvecklat genom mitt arbete med moderna growth-organisationer.',
      'Konceptet samlar fyra sammankopplade förmågor.',
    ],
    enableLabel: 'Det här kan det möjliggöra',
    outcomeLabel: 'Resultatet',
    items: [
      {
        num: '01',
        title: 'The Bridge',
        tagline: 'Gör utspridd data till gemensam kunskap.',
        body: [
          'De flesta bolag har inget dataproblem. De har ett problem med tillgänglighet och användbarhet.',
          'The Bridge kopplar ihop information från hela er growth-stack och gör den användbar för de människor och AI-agenter som arbetar med den. I stället för att hoppa mellan dashboards och manuellt pussla ihop rapporter kan teamen arbeta utifrån en mer sammanhängande bild av verksamheten.',
        ],
        list: [
          'Sammankopplad marknads-, sälj- och produktdata',
          'Samlade vyer över tillväxtresultat',
          'Analys och rapportering på naturligt språk',
          'AI-assisterad research och affärsanalys',
          'Gemensam kontext för agenter och arbetsflöden',
          'Snabbare och bättre underbyggda beslut',
        ],
        outcome: 'Mindre tid att leta efter svar. Mer tid att agera på dem.',
      },
      {
        num: '02',
        title: 'The Engine Room',
        tagline: 'Där idéer blir till material och handling.',
        body: [
          'The Engine Room är där AI-agenter, arbetsflöden och produktionsförmågor möts.',
          'Tänk er en innehållsproduktion där research, briefer, utkast, landningssidor, kreativt material och publiceringsflöden hänger ihop. Eller en kampanjprocess där agenter stöttar arbetet från första idé till lansering, med människor som granskar de beslut som spelar roll.',
          'The Engine Room gör det möjligt genom att koppla AI-förmågor till de verktyg och processer ert team redan använder.',
        ],
        list: [
          'AI-assisterad research och innehållsproduktion',
          'Automatiserade innehålls- och kampanjflöden',
          'Skräddarsydda AI-agenter för marknadsdrift',
          'Utveckling av landningssidor och sajter',
          'Automation av CMS och publicering',
          'Orkestrering av arbetsflöden mellan verktyg',
          'Mänsklig granskning, godkännande och kvalitetskontroll',
        ],
        outcome: 'Mer output, snabbare genomförande och färre manuella beroenden.',
      },
      {
        num: '03',
        title: 'The Radar',
        tagline: 'Upptäck möjligheter innan de blir missade möjligheter.',
        body: [
          'Er verksamhet skapar signaler varje dag. Förändrade konverteringsgrader. Skiften i förvärvsresultat. Nya kundbeteenden. Framväxande söktrender. Kampanjresultat. De flesta av signalerna ligger begravda i dashboards eller upptäcks för sent.',
          'The Radar är intelligenslagret som hela tiden letar efter betydelsefulla förändringar, mönster och möjligheter. I stället för att vänta på att någon ska öppna en rapport hjälper det till att lyfta fram det som förtjänar uppmärksamhet.',
        ],
        list: [
          'Automatiserad resultatbevakning',
          'Upptäckt av möjligheter och avvikelser',
          'Insikter om funnel och konvertering',
          'Kund- och marknadssignaler',
          'AI-genererade rekommendationer',
          'Prioriterade tillväxtmöjligheter',
        ],
        outcome: 'En mer proaktiv growth-organisation.',
      },
      {
        num: '04',
        title: 'The Launchpad',
        tagline: 'Från insikt till experiment till effekt.',
        body: [
          'Bra insikter driver inte tillväxt. Handling gör det.',
          'The Launchpad kopplar ihop möjligheter med genomförande och hjälper teamen att göra hypoteser till experiment, kampanjer och förbättringar. Det ger struktur åt hur initiativ prioriteras, lanseras, mäts och lärs av.',
        ],
        list: [
          'Idégenerering och prioritering av experiment',
          'Framtagning av hypoteser',
          'Kampanjplanering och genomförande',
          'Flöden för konverteringsoptimering',
          'Uppföljning och mätning av experiment',
          'Automatiserat lärande och dokumentation',
          'Loopar för ständig förbättring',
        ],
        outcome: 'Ett snabbare och mer systematiskt sätt att växa.',
      },
    ],
  },

  bigPicture: {
    label: 'Helheten',
    h2a: 'Från dashboards till beslut.',
    h2b: 'Från beslut till handling.',
    intro: [
      'Det verkliga värdet kommer inte från en enskild agent, ett arbetsflöde eller en dashboard. Det kommer från att koppla ihop dem.',
      'Tänk er det här:',
    ],
    steps: [
      'Er analys upptäcker att konverteringsgraden sjunker på en viktig landningssida.',
      'En AI-agent undersöker förändringen, kombinerar den med färsk kampanjdata och identifierar ett möjligt problem.',
      'En annan agent granskar sidan, kundfeedback och konkurrenternas positionering.',
      'Systemet föreslår tre möjliga experiment, med hypoteser, förväntad effekt och vad som krävs för att genomföra dem.',
      'Ert growth-team går igenom rekommendationerna och väljer ett.',
      'Ett arbetsflöde hjälper till att bygga den nya varianten av landningssidan, förbereder experimentet och stöttar lanseringen.',
      'Resultaten bevakas, dokumenteras och matas tillbaka in i systemet.',
    ],
    loop: 'En sammanhängande loop. Från signal till insikt till handling till lärande.',
    closing: 'Det är potentialen i ett AI-native Growth Operating System.',
    disclaimer: 'Illustrativt framtida arbetsflöde. Faktiska förmågor beror på vilka system och integrationer som implementeras.',
  },

  agenticWeb: {
    label: 'Agentisk webb',
    h2: 'Tänk om er sajt kunde göra mer än att visa innehåll?',
    intro: [
      'I åratal har sajter byggts kring sidor, mallar och traditionella CMS. Marknadsteam är beroende av utvecklare för att lansera nya upplevelser. Innehåll fastnar i stela strukturer. Leadinformation skickas mellan system som inte hänger ihop.',
      'Och nu förändrar AI hur människor hittar, utvärderar och interagerar med företag online. Det är dags att tänka om själva sajten.',
    ],
    h3: 'Från statiska sajter till intelligenta tillväxtplattformar.',
    lead: 'Jag hjälper företag att utforska och bygga moderna digitala upplevelser där sajt, innehåll, data och kommersiella arbetsflöden fungerar tillsammans. Det kan omfatta:',
    items: [
      { title: 'Skräddarsydda sajter och CMS', body: 'Flexibla sajter och innehållssystem byggda kring er verksamhet, där AI-assisterad utveckling minskar friktionen mellan idé och genomförande.' },
      { title: 'Agentredo innehåll och upplevelser', body: 'Strukturerat, tillgängligt innehåll och gränssnitt för en värld där både människor och AI-drivna system hittar och interagerar med digitala tjänster.' },
      { title: 'Sammankopplad leadgenerering', body: 'Formulär, leadfångst, berikning, kvalificering, routing och backoffice-flöden som kopplar sajten direkt till den kommersiella verksamheten.' },
      { title: 'Automatiserad innehållsproduktion', body: 'Arbetsflöden som stöttar research, innehållsproduktion, optimering och publicering, med kvalitet och mänsklig tillsyn på plats.' },
      { title: 'Skräddarsydda tillväxtapplikationer', body: 'Interna verktyg, backoffice-gränssnitt och specialbyggda applikationer som tar bort manuellt arbete och hjälper teamen att arbeta mer effektivt.' },
    ],
    closing: ['Målet är inte bara att bygga en snabbare sajt.', 'Det är att göra er digitala närvaro till en aktiv del av er tillväxtmotor.'],
  },

  realWorld: {
    label: 'I praktiken',
    h2: 'Byggt utifrån verkliga tillväxtutmaningar. Inte bara AI-hype.',
    intro: [
      'Mitt arbetssätt kombinerar mer än 15 års erfarenhet av produktutveckling, growth, PLG, kundförvärv och marketing operations med praktiskt arbete med att bygga AI-drivna system.',
      'Två miljöer har format hur jag tänker kring framtidens growth och GTM.',
    ],
    sands: {
      slug: 'sands-entreprenad',
      name: 'Sands',
      heading: 'Bygger en sammankopplad digital tillväxtplattform.',
      body: [
        'På Sands har jag arbetat som digital tillväxtpartner och kombinerat kommersiell tillväxtstrategi med praktisk utveckling av de system som stöttar leadgenerering och digital försäljning.',
        'I stället för att behandla sajten, innehållet, leadsen och analysen som separata projekt är tanken att koppla ihop dem till en tillväxtplattform som utvecklas över tid.',
      ],
      listLabel: 'Arbetet omfattar',
      list: [
        'Skräddarsydd sajtutveckling',
        'Konverteringsfokuserade landningssidor',
        'Skräddarsytt CMS och innehållsflöden',
        'Interna backoffice-funktioner',
        'Processer för leadfångst och leadhantering',
        'Integrationer för marknadsföring och analys',
        'SEO och konverteringsoptimering',
        'AI-assisterad utveckling och automation',
      ],
      outro: 'Målet är en miljö där nya idéer kan genomföras snabbt, kundresor kan förbättras löpande och verksamheten får större kontroll över sin digitala tillväxtinfrastruktur.',
      principle: 'Principen: Bygg kring verksamheten, inte kring verktygens begränsningar.',
      cta: 'Läs caset om Sands →',
    },
    mentimeter: {
      name: 'Mentimeter',
      heading: 'Tänker om hur en modern SaaS-growth-organisation arbetar.',
      body: [
        'Mitt arbete på Mentimeter har gett mig möjlighet att utforska AI-native growth och GTM i en större, internationell SaaS-miljö.',
        'Här handlar growth om mycket mer än marknadskampanjer. Det kopplar ihop produktledd tillväxt, kundförvärv, produktmarknadsföring, experiment, data, kundinsikter och go-to-market.',
        'Utmaningen är inte bara att införa AI i enskilda uppgifter. Det är att förstå hur förmågorna kan fungera tillsammans som en sammankopplad operativ modell.',
        'Det tänkandet har format konceptet The Growthship, med sina fyra sammankopplade områden:',
      ],
      areas: [
        { title: 'The Bridge', body: 'för data, insikter och beslut' },
        { title: 'The Engine Room', body: 'för agenter, arbetsflöden och produktion' },
        { title: 'The Radar', body: 'för signaler, möjligheter och rekommendationer' },
        { title: 'The Launchpad', body: 'för experiment, kampanjer och genomförande' },
      ],
      outro: [
        'Ambitionen är att utforska hur growth-organisationer kan bli mer sammankopplade, proaktiva och effektiva genom att föra AI, data och genomförande närmare varandra.',
        'Det är ett skifte från splittrade processer mot en AI-native operativ modell.',
      ],
      disclaimer:
        'Avsnittet beskriver yrkeserfarenhet och en operativ modell under utveckling, inte en färdig kommersiell mjukvaruprodukt eller ett kunduppdrag för Greow.',
    },
    moreLabel: 'Mer relaterat arbete',
    moreCases: ['bnbalyze', 'leadfeeder-dealfront', 'refapp'],
  },

  build: {
    label: 'Så bygger vi det',
    h2: 'Börja smått. Bygg smart. Skala det som fungerar.',
    intro: [
      'Ni behöver inte bygga om hela er teknikstack för att komma igång. Det bör ni förmodligen inte heller.',
      'Det bästa är att hitta en meningsfull möjlighet, bygga något användbart och utöka därifrån.',
    ],
    deliverablesLabel: 'Typiska leveranser',
    steps: [
      {
        num: '01',
        title: 'Upptäck & designa',
        tagline: 'Hitta möjligheterna med högst värde.',
        body: [
          'Vi kartlägger era befintliga growth-processer, datakällor, teknikstack och operativa flaskhalsar.',
          'Tillsammans identifierar vi var AI, automation och sammankopplade arbetsflöden kan skapa störst affärsnytta.',
        ],
        deliverables: [
          'Kartläggning av growth- och GTM-flöden',
          'Bedömning av AI-möjligheter',
          'Genomgång av teknik- och dataarkitektur',
          'Prioriterade användningsfall',
          'Första systemskiss och implementeringsplan',
        ],
      },
      {
        num: '02',
        title: 'Bygg & koppla ihop',
        tagline: 'Gör skissen till ett fungerande system.',
        body: [
          'Vi implementerar de första förmågorna – en AI-agent, ett automatiserat arbetsflöde, en skräddarsydd applikation, en sammankopplad dashboard eller en bredare tillväxtplattform.',
          'Fokus ligger på att bygga användbar funktionalitet som kan testas i den riktiga verksamheten.',
        ],
        deliverables: [
          'AI-agenter och automatiserade arbetsflöden',
          'Data- och API-integrationer',
          'Skräddarsydda tillväxtapplikationer',
          'CMS- och innehållsautomation',
          'System för leadgenerering och backoffice',
          'Fungerande prototyper och första implementationer',
        ],
      },
      {
        num: '03',
        title: 'Driv & optimera',
        tagline: 'Gör det till en del av er growth-verksamhet.',
        body: [
          'När de första förmågorna är på plats förbättrar vi dem, kopplar på fler arbetsflöden och etablerar de processer som behövs för att fortsätta utvecklas. Vi inför mätning, bevakning, dokumentation och rätt nivå av mänsklig tillsyn.',
          'Målet är system som ert team kan förstå, driva och förbättra.',
        ],
        deliverables: [
          'Resultatbevakning',
          'Optimering av arbetsflöden',
          'Fler agenter och integrationer',
          'Experiment och ständig förbättring',
          'Dokumentation och kunskapsöverföring',
          'Löpande growth- och teknisk rådgivning',
        ],
      },
    ],
  },

  why: {
    label: 'Varför Greow',
    h2: 'Growth-expertis först. Teknik sedan.',
    intro: [
      'Det finns gott om folk som kan bygga en AI-agent. Och gott om konsulter som kan ta fram en tillväxtstrategi.',
      'Men för att bygga ett effektivt tillväxtsystem måste man förstå både affären och tekniken.',
    ],
    needs: [
      'Ni behöver förstå kundförvärv, konvertering, retention, kundbeteende, produktutveckling, marketing operations och kommersiella prioriteringar.',
      'Ni behöver veta vilka problem som är värda att lösa.',
      'Och ni behöver kunna göra idéer till fungerande lösningar.',
    ],
    body: [
      'Det är där jag bidrar med något annat. Jag har ägnat min karriär åt att arbeta över growth, produkt, marknad och teknik.',
      'Jag har lett team, byggt digitala produkter, tagit fram tillväxtstrategier, etablerat operativa modeller och arbetat praktiskt med verktygen och systemen bakom dem.',
      'Idag kombinerar jag den erfarenheten med AI-assisterad utveckling, automation och agentiska arbetsflöden för att hjälpa bolag att bygga en ny generation tillväxtförmågor.',
    ],
    closing: ['Inte teknik för teknikens skull.', 'Teknik som hjälper företag att växa.'],
  },

  who: {
    label: 'För vem',
    h2: 'För team som är redo att tänka om hur tillväxt fungerar.',
    audiences: [
      { title: 'B2B SaaS- & PLG-bolag', body: 'Koppla ihop produkt-, marknads- och kommersiell data. Förbättra kundförvärv och aktivering. Automatisera arbetsflöden och bygg en effektivare growth-verksamhet.' },
      { title: 'Growth- & marknadsteam', body: 'Minska det manuella arbetet, gör insikter mer tillgängliga och för in AI-agenter i innehåll, kampanjer, analys och experiment.' },
      { title: 'Grundare & växande bolag', body: 'Bygg den digitala infrastruktur som krävs för att skapa efterfrågan, fånga leads och skala den kommersiella verksamheten utan onödig komplexitet.' },
      { title: 'Bolag som utforskar AI-transformation', body: 'Gå bortom lösryckta AI-experiment och börja bygga praktiska förmågor kring verkliga affärsbehov.' },
    ],
    relatedLabel: 'Relaterade tjänster',
    relatedServices: ['aiGrowth', 'advisory', 'gaas', 'fractional'],
  },

  faq: {
    label: 'FAQ',
    h2: 'Vanliga frågor',
    items: [
      {
        q: 'Vad är ett AI-native Growth Operating System?',
        a: [
          'Ett AI-native Growth Operating System är en sammankopplad uppsättning datakällor, verktyg, AI-agenter och arbetsflöden som hjälper ett företag att driva och förbättra sin tillväxtverksamhet.',
          'I stället för att ersätta alla befintliga verktyg skapar det ett mer integrerat sätt att göra information till beslut och handling.',
        ],
      },
      {
        q: 'Är The Growthship en mjukvaruprodukt?',
        a: [
          'The Growthship är namnet på en AI-native operativ modell för growth och GTM som jag har utvecklat genom mitt yrkesliv. Den ger ett konceptuellt ramverk för att koppla ihop insikter, AI-agenter, möjligheter och genomförande.',
          'Den presenteras här inte som en färdig kommersiell mjukvaruprodukt.',
        ],
      },
      {
        q: 'Behöver vi byta ut vårt CRM, våra analysverktyg eller marknadsverktyg?',
        a: [
          'Oftast inte. Målet är vanligtvis att få ut mer av er befintliga teknik genom att koppla ihop data, automatisera arbetsflöden och bygga förmågor kring era nuvarande system.',
        ],
      },
      {
        q: 'Kan du bygga skräddarsydda AI-agenter och arbetsflöden?',
        a: [
          'Ja. Jag arbetar med AI-assisterad utveckling, integrationer, automation och skräddarsydda applikationer för att hjälpa företag att genomföra praktiska lösningar.',
          'Arkitekturen beror på era mål, befintlig infrastruktur, säkerhetskrav och tillgänglig data.',
        ],
      },
      {
        q: 'Kan du också bygga sajter och skräddarsydda applikationer?',
        a: [
          'Ja. Min bakgrund omfattar produktutveckling, e-handel och digital tillväxt, och jag arbetar praktiskt med modern AI-assisterad utveckling.',
          'Det kan omfatta sajter, landningssidor, skräddarsydda CMS-lösningar, interna verktyg, system för leadhantering och tillväxtapplikationer.',
        ],
      },
      {
        q: 'Hur lång tid tar det att bygga ett AI-native tillväxtsystem?',
        a: [
          'Det beror på omfattning och komplexitet. I stället för att binda er till en stor transformation från start rekommenderar jag att börja med ett avgränsat användningsfall eller en prototyp, validera värdet och bygga ut stegvis.',
        ],
      },
      {
        q: 'Erbjuder du löpande stöd?',
        a: [
          'Ja. Uppdragen kan sträcka sig från en avgränsad genomlysning eller ett implementeringsprojekt till ett löpande partnerskap som omfattar strategi, utveckling, experiment och optimering.',
        ],
      },
    ],
  },

  cta: {
    h2a: 'Sluta lägga till verktyg.',
    h2b: 'Börja bygga er tillväxtmotor.',
    body: [
      'Nästa generations growth-organisationer kommer inte nödvändigtvis att ha större team eller mer mjukvara. De kommer att ha bättre sammankopplade system, smartare arbetsflöden och mer tid att fokusera på det arbete som spelar roll.',
      'Ni behöver inte bygga allt på en gång. Ni behöver bara börja med rätt problem.',
    ],
    kicker: 'Låt oss utforska hur en AI-native tillväxtmotor skulle kunna se ut för er verksamhet.',
    button: 'Låt oss bygga något →',
    signature: ['Erik Oliva Werner', 'Grundare, Greow Digital', 'Stockholm'],
  },
}

export const aiGtmByLang = { en: aiGtmEn, sv: aiGtmSv }
export const aiGtmMetaByLang = { en: aiGtmMetaEn, sv: aiGtmMetaSv }

// Page-level JSON-LD (Service + FAQPage + BreadcrumbList). The site graph with
// #organization / #erik comes from the root layout.
export function aiGtmJsonLd(lang: 'en' | 'sv') {
  const c = aiGtmByLang[lang]
  const meta = aiGtmMetaByLang[lang]
  const url = `${SITE_URL}${meta.path}`
  const sv = lang === 'sv'
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: sv ? 'AI GTM-system & automation' : 'AI GTM Systems & Automation',
        serviceType: sv ? 'AI-native growth- och GTM-system' : 'AI-native growth and GTM systems',
        description: meta.description,
        url,
        inLanguage: lang,
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: sv ? ['Sverige', 'Skandinavien', 'Europa'] : ['Sweden', 'Scandinavia', 'Europe'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: c.build.label,
          itemListElement: c.build.steps.map((step) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: step.title, description: step.tagline },
          })),
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        inLanguage: lang,
        mainEntity: c.faq.items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a.join(' ') },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Greow', item: sv ? `${SITE_URL}/sv/` : `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: sv ? 'AI GTM-system' : 'AI GTM Systems', item: url },
        ],
      },
    ],
  }
}
