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
    label: 'How I think about it',
    h2: 'One system. Four interconnected capabilities.',
    intro: [
      'I map growth work onto four connected capabilities. I call the model The Growthship: an operating model developed through my work with modern growth organizations.',
      'It’s a way of thinking, not a product you buy. At Greow, I use it to decide what is worth building for your business – and in what order.',
    ],
    diagram: {
      caption: 'The Growthship – an operating model, not a product',
      core: 'Shared context',
      coreSub: 'Data, knowledge and human review',
      loop: 'Learning feeds back into the system',
      modules: [
        { key: 'bridge', name: 'The Bridge', role: 'Data → shared insight' },
        { key: 'radar', name: 'The Radar', role: 'Signals → opportunities' },
        { key: 'engine', name: 'The Engine Room', role: 'Agents → assets & actions' },
        { key: 'launchpad', name: 'The Launchpad', role: 'Experiments → impact' },
      ],
    },
    scopeNote:
      'The lists below are examples, not a packaged product. What we build depends on your stack, your data and your priorities – and starts with one focused use case.',
    enableLabel: 'Examples of what can be built',
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
      'Here is what one loop could look like:',
    ],
    stages: [
      { key: 'data', name: 'Data', module: 'The Bridge', title: 'Everything in one context', body: 'Analytics, campaign, CRM and page data are connected into a shared context that people and agents can work from.', chip: 'GA4 · Ads · CRM · CMS' },
      { key: 'insight', name: 'Insight', module: 'The Radar', title: 'A signal worth acting on', body: 'A drop in conversion on a key landing page is detected and combined with recent campaign data to find a likely cause.', chip: 'Conversion drop flagged' },
      { key: 'agent', name: 'Agent', module: 'The Engine Room', title: 'Proposals, not just alerts', body: 'An agent reviews the page, customer feedback and competitive positioning, then suggests three experiments with hypotheses and expected impact.', chip: '3 experiment proposals' },
      { key: 'execution', name: 'Execution', module: 'The Launchpad', title: 'Humans decide, workflows ship', body: 'Your team picks one. A workflow builds the landing page variant, sets up the test and supports the launch.', chip: 'Approved → variant live' },
      { key: 'learning', name: 'Learning', module: 'The Bridge', title: 'Every test makes the next one smarter', body: 'Results are measured, documented and fed back into the shared context.', chip: 'Result added to context' },
    ],
    loop: 'One continuous loop. From signal to insight to action to learning.',
    closing: 'That’s the potential of an AI-native Growth Operating System.',
    disclaimer: 'Illustrative future-state workflow. Actual capabilities depend on the systems and integrations implemented.',
  },

  gtmSystem: {
    label: 'A GTM system in practice',
    h2a: 'From product development',
    h2b: 'to market impact.',
    intro:
      'Here is the same thinking applied to a product launch. Product context is captured once, and a connected system turns it into activation across every channel – automated for small releases, curated for the big ones.',
    cycle: { label: 'Continuous cycle', steps: ['Build', 'Launch', 'Activate', 'Learn'] },
    product: {
      title: 'Product',
      items: ['New features', 'Releases & updates', 'Pricing & packaging', 'Integrations'],
      noteTitle: 'Build & improve',
      noteBody: 'Product teams ship continuously, with product marketing involved early with market and customer input.',
    },
    launch: {
      title: 'Launch board',
      lead: 'Plan, tier and prioritise what ships',
      items: ['Tier & priority', 'Use cases', 'ICPs', 'Positioning', 'Messaging', 'USPs'],
    },
    context: {
      title: 'GTM context',
      items: [
        { title: 'Product facts', body: 'Authoritative documentation of what the product does. Owned by Product.' },
        { title: 'Market context', body: 'Strategy, ICPs, personas, positioning and messaging. Owned by Product Marketing.' },
        { title: 'Assets', body: 'Images, video, guides and other launch assets, ordered early.' },
      ],
    },
    engine: {
      title: 'Growth Operating System',
      body: 'Turns product context into go-to-market activation with agents, workflows and human curation.',
      tiers: [
        { size: 'S', title: 'Small releases', body: 'Automated end to end, always up to date' },
        { size: 'M/L', title: 'Medium & large', body: 'Human curation and new campaigns' },
      ],
    },
    activation: {
      title: 'Activation',
      items: ['Website', 'Email', 'In-app messages', 'Video', 'LinkedIn & social'],
    },
    feedback: { title: 'Feedback & insights', body: 'Product · Marketing · Growth' },
    caption: 'Illustrative model. What gets automated depends on your stack, your data and your release process.',
  },

  agenticWeb: {
    label: 'Agentic web',
    h2: 'What if your website could do more than display content?',
    intro: [
      'Most websites are still built around pages, templates and a CMS that marketing can’t change without a developer. Content gets trapped in rigid structures, and leads get passed between systems that don’t talk to each other.',
      'At the same time, AI is changing how people – and AI assistants acting for them – discover, evaluate and contact businesses. That makes the website more important, not less.',
    ],
    h3: 'Four capabilities. One growth platform.',
    lead: 'This is where Greow is most different. Not a website project, not an AI pilot, but the combination:',
    examplesLabel: 'What it looks like',
    layers: [
      {
        num: '01',
        title: 'Custom web development',
        body: 'Websites and CMS built around your business, with AI-assisted development cutting the time from idea to live page.',
        examples: ['Code for what’s stable, a headless CMS for what editors change daily', 'Fast, measurable pages built for conversion', 'New pages and templates without waiting in a dev queue'],
        proof: 'Built for Sands: Next.js + Sanity, ~80 pages',
        proofCase: true,
      },
      {
        num: '02',
        title: 'Agent-ready experiences',
        body: 'Structured, accessible content that both people and AI-powered systems can find, understand and act on.',
        examples: ['Structured data describing your company, services and people', 'Clear, crawlable pages that answer real buyer questions', 'Interfaces designed for assistants, not just browsers'],
        proof: 'Applied for Sands and on greow.digital: structured data',
        proofCase: false,
      },
      {
        num: '03',
        title: 'AI-driven content operations',
        body: 'Research, briefs, drafts, optimisation and publishing connected in one workflow – with a human approving what goes live.',
        examples: ['Programmatic pages generated from structured data', 'AI-assisted research, drafting and on-page optimisation', 'Publishing workflows with review and quality control'],
        proof: 'Built for Sands: programmatic area pages, CMS structure built via MCP from Claude Code',
        proofCase: true,
      },
      {
        num: '04',
        title: 'Integrated lead flows',
        body: 'Every form, calculator and chat connected to your commercial process, so each lead is captured, routed and traced.',
        examples: ['Multiple ways in: forms, calculators, quizzes and chat', 'Enrichment, qualification and routing to the right person', 'Tracking from ad click to closed deal'],
        proof: 'Built for Sands: roof test, calculator, chat and quote form, traced from the ad click',
        proofCase: true,
      },
    ],
    combination: {
      h3: 'Why the combination matters',
      body: 'AI advice often stops at strategy or a single tool. Website projects often stop at launch. The value is in connecting them: a site that’s fast to change, content that’s easy to produce, pages machines can understand, and leads that flow straight into your sales process.',
    },
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

  maturity: {
    label: 'Where things stand',
    h2: 'Built, in development, possible.',
    intro: 'AI is easy to overpromise. This is the honest split between what I have built, what I am developing in my current role and what we can build together.',
    columns: [
      {
        key: 'built',
        badge: 'Built',
        title: 'Implemented for a Greow client',
        context: 'Sands Entreprenad',
        items: [
          'Next.js platform of ~80 pages with a Sanity CMS, built agentically in Claude Code',
          'Multiple ways in for leads: roof test, price calculator, chat and quote form',
          'Lead automation: form → webhook → sheet + email, with the conversion sent to GA4 and Google Ads',
          'Programmatic area pages, structured data and technical SEO',
          'Automated weekly Ads, GA4 and Search Console report',
        ],
        link: 'Read the Sands case →',
        note: '',
      },
      {
        key: 'dev',
        badge: 'In development',
        title: 'Explored in my current role',
        context: 'Mentimeter – professional experience, not a Greow client',
        items: [
          'The Growthship as an operating model for a growth team',
          'Connecting data sources into shared insights',
          'AI-assisted research, content and operational automation',
          'Signal detection and experiment loops',
        ],
        link: '',
        note: '',
      },
      {
        key: 'possible',
        badge: 'Possible',
        title: 'What we can build for you',
        context: 'Scoped per engagement',
        items: [
          'Custom AI agents for research, content and campaign operations',
          'Workflow automation and integrations across your stack',
          'Agent-ready website, CMS and content operations',
          'Lead routing, enrichment and backoffice tools',
          'Monitoring, recommendations and experiment workflows',
        ],
        link: '',
        note: 'Scoped in Discover & Design, then built one use case at a time.',
      },
    ],
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
        q: 'Is The Growthship a product I can buy?',
        a: [
          'No. The Growthship is the operating model behind how I work – a way of connecting insights, AI agents, opportunities and execution, developed through my professional experience.',
          'Greow is a consultancy. What you get is senior advice and hands-on implementation built around your stack and your priorities, not a licensed platform.',
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
    label: 'Så tänker jag',
    h2: 'Ett system. Fyra sammankopplade förmågor.',
    intro: [
      'Jag delar upp growth-arbete i fyra sammankopplade förmågor. Modellen kallar jag The Growthship – en operativ modell som jag har utvecklat genom mitt arbete med moderna growth-organisationer.',
      'Det är ett sätt att tänka, inte en produkt man köper. På Greow använder jag den för att avgöra vad som är värt att bygga för er verksamhet – och i vilken ordning.',
    ],
    diagram: {
      caption: 'The Growthship – en operativ modell, inte en produkt',
      core: 'Gemensam kontext',
      coreSub: 'Data, kunskap och mänsklig granskning',
      loop: 'Lärandet matas tillbaka in i systemet',
      modules: [
        { key: 'bridge', name: 'The Bridge', role: 'Data → gemensam insikt' },
        { key: 'radar', name: 'The Radar', role: 'Signaler → möjligheter' },
        { key: 'engine', name: 'The Engine Room', role: 'Agenter → material & handling' },
        { key: 'launchpad', name: 'The Launchpad', role: 'Experiment → effekt' },
      ],
    },
    scopeNote:
      'Listorna nedan är exempel, inte en färdig produkt. Vad vi bygger beror på er stack, er data och era prioriteringar – och börjar med ett avgränsat användningsfall.',
    enableLabel: 'Exempel på vad som kan byggas',
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
      'Så här skulle en loop kunna se ut:',
    ],
    stages: [
      { key: 'data', name: 'Data', module: 'The Bridge', title: 'Allt i en kontext', body: 'Analys-, kampanj-, CRM- och siddata kopplas ihop till en gemensam kontext som både människor och agenter kan arbeta utifrån.', chip: 'GA4 · Ads · CRM · CMS' },
      { key: 'insight', name: 'Insikt', module: 'The Radar', title: 'En signal värd att agera på', body: 'En nedgång i konvertering på en viktig landningssida upptäcks och kombineras med färsk kampanjdata för att hitta en trolig orsak.', chip: 'Konverteringsfall flaggat' },
      { key: 'agent', name: 'Agent', module: 'The Engine Room', title: 'Förslag, inte bara larm', body: 'En agent granskar sidan, kundfeedback och konkurrenternas positionering och föreslår tre experiment med hypoteser och förväntad effekt.', chip: '3 experimentförslag' },
      { key: 'execution', name: 'Genomförande', module: 'The Launchpad', title: 'Människor beslutar, arbetsflöden levererar', body: 'Ert team väljer ett. Ett arbetsflöde bygger varianten av landningssidan, sätter upp testet och stöttar lanseringen.', chip: 'Godkänt → variant live' },
      { key: 'learning', name: 'Lärande', module: 'The Bridge', title: 'Varje test gör nästa smartare', body: 'Resultaten mäts, dokumenteras och matas tillbaka in i den gemensamma kontexten.', chip: 'Resultat tillagt i kontexten' },
    ],
    loop: 'En sammanhängande loop. Från signal till insikt till handling till lärande.',
    closing: 'Det är potentialen i ett AI-native Growth Operating System.',
    disclaimer: 'Illustrativt framtida arbetsflöde. Faktiska förmågor beror på vilka system och integrationer som implementeras.',
  },

  gtmSystem: {
    label: 'Ett GTM-system i praktiken',
    h2a: 'Från produktutveckling',
    h2b: 'till effekt på marknaden.',
    intro:
      'Här är samma tänkande tillämpat på en produktlansering. Produktkontexten fångas en gång, och ett sammankopplat system gör den till aktivering i alla kanaler – automatiserat för små releaser, kurerat för de stora.',
    cycle: { label: 'Kontinuerlig cykel', steps: ['Bygg', 'Lansera', 'Aktivera', 'Lär'] },
    product: {
      title: 'Produkt',
      items: ['Nya funktioner', 'Releaser & uppdateringar', 'Prissättning & paketering', 'Integrationer'],
      noteTitle: 'Bygg & förbättra',
      noteBody: 'Produktteamen levererar löpande, med produktmarknadsföring involverad tidigt med marknads- och kundinsikter.',
    },
    launch: {
      title: 'Lanseringstavla',
      lead: 'Planera, nivåsätt och prioritera det som släpps',
      items: ['Nivå & prioritet', 'Användningsfall', 'ICP:er', 'Positionering', 'Budskap', 'USP:ar'],
    },
    context: {
      title: 'GTM-kontext',
      items: [
        { title: 'Produktfakta', body: 'Auktoritativ dokumentation av vad produkten gör. Ägs av produkt.' },
        { title: 'Marknadskontext', body: 'Strategi, ICP:er, personas, positionering och budskap. Ägs av produktmarknadsföring.' },
        { title: 'Material', body: 'Bilder, video, guider och annat lanseringsmaterial, beställt tidigt.' },
      ],
    },
    engine: {
      title: 'Growth Operating System',
      body: 'Gör produktkontext till go-to-market-aktivering med agenter, arbetsflöden och mänsklig kurering.',
      tiers: [
        { size: 'S', title: 'Små releaser', body: 'Automatiserat hela vägen, alltid uppdaterat' },
        { size: 'M/L', title: 'Mellanstora & stora', body: 'Mänsklig kurering och nya kampanjer' },
      ],
    },
    activation: {
      title: 'Aktivering',
      items: ['Webbplats', 'E-post', 'Meddelanden i produkten', 'Video', 'LinkedIn & sociala medier'],
    },
    feedback: { title: 'Feedback & insikter', body: 'Produkt · Marknad · Growth' },
    caption: 'Illustrativ modell. Vad som automatiseras beror på er stack, er data och er releaseprocess.',
  },

  agenticWeb: {
    label: 'Agentisk webb',
    h2: 'Tänk om er sajt kunde göra mer än att visa innehåll?',
    intro: [
      'De flesta sajter byggs fortfarande kring sidor, mallar och ett CMS som marknad inte kan ändra utan en utvecklare. Innehåll fastnar i stela strukturer och leads skickas mellan system som inte pratar med varandra.',
      'Samtidigt förändrar AI hur människor – och AI-assistenter som agerar åt dem – hittar, utvärderar och kontaktar företag. Det gör sajten viktigare, inte mindre viktig.',
    ],
    h3: 'Fyra förmågor. En tillväxtplattform.',
    lead: 'Det är här Greow skiljer sig mest. Inte ett webbprojekt, inte en AI-pilot, utan kombinationen:',
    examplesLabel: 'Så kan det se ut',
    layers: [
      {
        num: '01',
        title: 'Skräddarsydd webbutveckling',
        body: 'Sajter och CMS byggda kring er verksamhet, där AI-assisterad utveckling kortar tiden från idé till publicerad sida.',
        examples: ['Kod för det som är stabilt, ett headless CMS för det redaktörerna ändrar dagligen', 'Snabba, mätbara sidor byggda för konvertering', 'Nya sidor och mallar utan att vänta i en utvecklingskö'],
        proof: 'Byggt för Sands: Next.js + Sanity, ~80 sidor',
        proofCase: true,
      },
      {
        num: '02',
        title: 'Agentredo upplevelser',
        body: 'Strukturerat, tillgängligt innehåll som både människor och AI-drivna system kan hitta, förstå och agera på.',
        examples: ['Strukturerad data som beskriver ert bolag, era tjänster och era personer', 'Tydliga, indexerbara sidor som svarar på köparnas verkliga frågor', 'Gränssnitt utformade för assistenter, inte bara webbläsare'],
        proof: 'Tillämpat för Sands och på greow.digital: strukturerad data',
        proofCase: false,
      },
      {
        num: '03',
        title: 'AI-driven innehållsproduktion',
        body: 'Research, briefer, utkast, optimering och publicering i ett sammanhängande flöde – med en människa som godkänner det som publiceras.',
        examples: ['Programmatiska sidor genererade från strukturerad data', 'AI-assisterad research, skrivande och on-page-optimering', 'Publiceringsflöden med granskning och kvalitetskontroll'],
        proof: 'Byggt för Sands: programmatiska områdessidor, CMS-struktur byggd via MCP från Claude Code',
        proofCase: true,
      },
      {
        num: '04',
        title: 'Integrerade leadflöden',
        body: 'Varje formulär, kalkylator och chatt kopplad till er kommersiella process, så att varje lead fångas, routas och spåras.',
        examples: ['Flera vägar in: formulär, kalkylatorer, quiz och chatt', 'Berikning, kvalificering och routing till rätt person', 'Spårning från annonsklick till affär'],
        proof: 'Byggt för Sands: taktest, kalkylator, chatt och offertformulär, spårade från annonsklick',
        proofCase: true,
      },
    ],
    combination: {
      h3: 'Varför kombinationen spelar roll',
      body: 'AI-rådgivning stannar ofta vid strategi eller ett enskilt verktyg. Webbprojekt stannar ofta vid lansering. Värdet ligger i att koppla ihop dem: en sajt som är snabb att ändra, innehåll som är enkelt att producera, sidor som maskiner kan förstå och leads som flödar rakt in i er säljprocess.',
    },
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

  maturity: {
    label: 'Var det står idag',
    h2: 'Byggt, under utveckling, möjligt.',
    intro: 'AI är lätt att överlova. Här är en ärlig uppdelning mellan vad jag har byggt, vad jag utvecklar i min nuvarande roll och vad vi kan bygga tillsammans.',
    columns: [
      {
        key: 'built',
        badge: 'Byggt',
        title: 'Implementerat för en Greow-kund',
        context: 'Sands Entreprenad',
        items: [
          'Next.js-plattform med ~80 sidor och Sanity CMS, byggd agentiskt i Claude Code',
          'Flera vägar in för leads: taktest, priskalkylator, chatt och offertformulär',
          'Leadautomation: formulär → webhook → kalkylark + e-post, med konverteringen skickad till GA4 och Google Ads',
          'Programmatiska områdessidor, strukturerad data och teknisk SEO',
          'Automatiserad veckorapport från Ads, GA4 och Search Console',
        ],
        link: 'Läs caset om Sands →',
        note: '',
      },
      {
        key: 'dev',
        badge: 'Under utveckling',
        title: 'Utforskas i min nuvarande roll',
        context: 'Mentimeter – yrkeserfarenhet, inte en Greow-kund',
        items: [
          'The Growthship som operativ modell för ett growth-team',
          'Datakällor som kopplas ihop till gemensamma insikter',
          'AI-assisterad research, innehåll och operativ automation',
          'Signalbevakning och experimentloopar',
        ],
        link: '',
        note: '',
      },
      {
        key: 'possible',
        badge: 'Möjligt',
        title: 'Det vi kan bygga för er',
        context: 'Avgränsas per uppdrag',
        items: [
          'Skräddarsydda AI-agenter för research, innehåll och kampanjdrift',
          'Automation och integrationer i hela er stack',
          'Agentredo sajt, CMS och innehållsproduktion',
          'Leadrouting, berikning och backoffice-verktyg',
          'Bevakning, rekommendationer och experimentflöden',
        ],
        link: '',
        note: 'Avgränsas i Upptäck & designa och byggs sedan ett användningsfall i taget.',
      },
    ],
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
        q: 'Är The Growthship en produkt man kan köpa?',
        a: [
          'Nej. The Growthship är den operativa modellen bakom hur jag arbetar – ett sätt att koppla ihop insikter, AI-agenter, möjligheter och genomförande, framtaget genom min yrkeserfarenhet.',
          'Greow är ett konsultbolag. Det ni får är senior rådgivning och praktiskt genomförande byggt kring er stack och era prioriteringar, inte en licensierad plattform.',
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
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Greow', item: sv ? `${SITE_URL}/sv/` : `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: sv ? 'AI GTM-system' : 'AI GTM Systems', item: url },
        ],
      },
    ],
  }
}
