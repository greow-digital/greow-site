// ── /erik-oliva-werner/ (EN) and /sv/erik-oliva-werner/ (SV) ─────────────────
// Founder bio. EN copy supplied by the founder (name written in full);
// SV is a translation. Links point only at pages that exist.

const SITE_URL = 'https://greow.digital'

const metaEn = {
  path: '/erik-oliva-werner/',
  title: 'Erik Oliva Werner | Growth, Product & AI-Native GTM Consultant',
  description:
    'Meet Erik Oliva Werner, founder of Greow Digital: growth leader, product builder and AI-native GTM consultant with 15+ years in SaaS, product and growth.',
}

const en = {
  hero: {
    kicker: 'Erik Oliva Werner · Founder, Greow Digital',
    h1a: 'Hi, I’m Erik.',
    h1b: 'Growth leader. Product thinker. Builder at heart.',
    body: [
      'I’ve spent more than 15 years working at the intersection of Growth, Product, Marketing and Technology.',
      'I’ve built businesses, led teams, developed digital products and helped companies find better ways to grow.',
      'Today, I’m particularly excited about what happens when you combine that experience with AI. Not just to automate a few tasks – but to fundamentally rethink how businesses build, operate and scale.',
      'I’m the founder of Greow Digital, where I help ambitious companies turn growth opportunities into working systems, products and measurable business impact.',
    ],
    cta: 'Let’s connect →',
    cta2: 'Explore my work',
    photoAlt: 'Erik Oliva Werner, founder of Greow Digital, in Stockholm',
  },

  story: {
    label: 'My story',
    h2: 'I’ve never been particularly good at staying in one box.',
    body: [
      'And I’ve stopped trying.',
      'Throughout my career, I’ve moved between product development, e-commerce, performance marketing, conversion optimization, Growth, PLG and marketing operations.',
      'Sometimes I’ve been a product manager. Sometimes a growth leader. Sometimes a consultant, entrepreneur or hands-on builder. Different titles. Different industries. Different challenges.',
      'But looking back, the common thread has always been the same. I love figuring out how things work, questioning how they could work better, and then building something that makes a difference.',
      'I’ve always been drawn to the space between disciplines:',
    ],
    spaces: [
      'Where customer needs meet business opportunities.',
      'Where strategy meets execution.',
      'Where technology enables people to do things they couldn’t do before.',
    ],
    outro: 'It’s a space that doesn’t always fit neatly into traditional job descriptions. But it’s where I do my best work.',
  },

  background: {
    label: 'My background',
    h2: 'From digital products to growth organizations.',
    body: [
      'My professional journey has taken me through everything from large financial institutions and telecommunications companies to international B2B SaaS businesses and my own entrepreneurial ventures.',
      'I’ve held leadership roles across Product Development, Growth, Acquisition and Marketing Operations. I’ve built and led cross-functional teams, established growth operating models, developed acquisition strategies, launched digital products and helped organizations adopt more experimental and customer-centric ways of working.',
    ],
    orgsLabel: 'Organizations I’ve worked with include',
    orgs: [
      { name: 'DNB', slug: 'dnb-eiendom' },
      { name: 'RiksTV', slug: 'rikstv-strim' },
      { name: 'LINK Mobility', slug: '' },
      { name: 'Refapp', slug: 'refapp' },
      { name: 'Leadfeeder', slug: 'leadfeeder-dealfront' },
      { name: 'Funnel', slug: 'funnel' },
      { name: 'Mentimeter', slug: '' },
    ],
    skillsLabel: 'My experience covers',
    skills: [
      'Product development and product management',
      'Growth strategy and product-led growth',
      'Acquisition, performance marketing and digital sales',
      'Conversion rate optimization and experimentation',
      'Marketing operations and technology',
      'Organizational development and team leadership',
      'AI-native growth systems and automation',
    ],
    outro: [
      'But I don’t see these as separate disciplines. I see them as different parts of the same challenge:',
      'How do you build a business that learns faster, moves faster and creates more value for its customers?',
    ],
  },

  entrepreneur: {
    label: 'The entrepreneurial side',
    h2: 'I’ve always needed something of my own to build.',
    intro: 'Alongside my corporate career, I’ve spent years running businesses and experimenting with ideas of my own.',
    ventures: [
      {
        name: 'Happy Vegan',
        slug: 'happy-vegan',
        body: 'I founded and operated Happy Vegan, an e-commerce business that gave me firsthand experience of owning the entire customer journey – from attracting visitors and converting customers to managing operations, technology and commercial performance. No departments to hand things over to. No one else to blame when something didn’t work. Just a business, its customers and the responsibility to make it succeed.',
      },
      {
        name: 'Bnbalyze',
        slug: 'bnbalyze',
        body: 'A digital product I built, exploring how data and technology can help people make better decisions around short-term rental investments.',
      },
      {
        name: 'Greow Digital',
        slug: '',
        body: 'Where I combine my consulting experience with a growing focus on building digital growth infrastructure for other businesses.',
      },
    ],
    readCase: 'Read the case →',
    outro: [
      'These ventures have taught me something that has shaped my entire career: there’s a big difference between knowing how something should work and being responsible for making it work.',
      'I believe the best leaders and consultants benefit from experiencing both.',
    ],
  },

  approach: {
    label: 'My approach to growth',
    h2a: 'Growth isn’t a department.',
    h2b: 'It’s how you operate.',
    body: [
      'I’ve spent much of my career helping organizations move beyond traditional functional boundaries. Marketing does its thing. Product does its thing. Sales does its thing. Everyone has their own goals, processes and tools – and somewhere in between, the customer journey gets fragmented.',
      'I believe Growth works best when it becomes a shared mindset and operating model: one built around customer understanding, clear objectives, cross-functional collaboration, experimentation and continuous learning.',
      'That means creating the conditions for teams to make better decisions and move faster. The right culture. The right people. The right processes. The right technology.',
    ],
    nots: ['Not frameworks for the sake of frameworks.', 'Not experimentation theater.', 'And definitely not another dashboard nobody uses.'],
    closing: 'Real growth happens when strategy, people and execution work together.',
  },

  leadership: {
    label: 'Leadership & coaching',
    h2: 'I believe the best leaders create more leaders.',
    body: [
      'Over the years, my interests have gradually shifted. Early in my career, I was fascinated by the mechanics of digital growth – the channels, the funnels, the experiments and the numbers. I still love those things. But I’ve become equally interested in the people and organizations behind the results.',
    ],
    questions: [
      'How do you build a team that takes ownership?',
      'How do you create clarity without micromanaging?',
      'How do you help people develop the confidence to challenge assumptions, make decisions and try new things?',
    ],
    outro: [
      'As an ICF-accredited coach, I’ve developed a leadership approach grounded in curiosity, trust and asking better questions.',
      'I don’t believe a leader needs to have all the answers. I believe their job is to create an environment where people can find better answers together. That philosophy shapes how I lead teams, facilitate workshops and work with clients.',
    ],
    link: 'Growth coaching & mentorship →',
  },

  nextChapter: {
    label: 'The next chapter',
    h2a: 'AI has changed the game.',
    h2b: 'And I’m here for it.',
    body: [
      'For someone who has spent their career connecting business, product, marketing and technology, the emergence of AI feels like a remarkable opportunity. For the first time, the distance between having an idea and building a working solution has become dramatically shorter.',
      'You can go from identifying a problem to prototyping an application, connecting systems or automating a workflow in ways that previously required much larger teams and resources. That’s exciting. But I also think we’re only scratching the surface.',
      'Most companies are still approaching AI as another productivity tool. Generate some content. Summarize a meeting. Automate a repetitive task. Useful? Absolutely. Transformational? Not necessarily.',
      'The bigger opportunity is to rethink how the business operates.',
    ],
    questions: [
      'What happens when your data, insights, workflows, content, website and commercial processes become connected?',
      'When AI agents can support research, identify opportunities and help execute work?',
      'When smaller teams can accomplish things that previously required entire departments?',
    ],
    closing: 'This is where I’m focusing my energy today.',
  },

  building: {
    label: 'What I’m building',
    h2: 'From AI tools to AI-native growth systems.',
    intro: 'My current work focuses on designing and building connected systems that help businesses operate growth more effectively.',
    items: [
      {
        key: 'growthship',
        kicker: 'Mentimeter · professional experience',
        title: 'The Growthship',
        body: [
          'Through my professional work at Mentimeter, I’ve been developing the concept of The Growthship, an AI-native Growth & GTM Operating System. The vision is to connect four capabilities:',
        ],
        list: [
          'The Bridge: data, insights, analytics and decisions',
          'The Engine Room: AI agents, content production and automated workflows',
          'The Radar: signals, opportunities and recommendations',
          'The Launchpad: experiments, campaigns and execution',
        ],
        outro: 'Together, they represent a more integrated way to operate Growth, where insights connect to action and learning feeds back into the system. It’s an evolving concept and development direction, combining growth strategy, organizational design and hands-on AI experimentation.',
        note: 'Mentimeter is my employer. This is professional experience, not a Greow client engagement or a product.',
        links: [] as { label: string; href: string }[],
      },
      {
        key: 'sands',
        kicker: 'Sands · Greow client',
        title: 'AI-native growth at Sands',
        body: [
          'Through my work as a digital growth partner at Sands, I’m applying a similar builder mindset in a smaller business environment.',
          'The work combines growth strategy with custom website development, CMS capabilities, internal backoffice tools, lead generation workflows, marketing integrations and AI-assisted development. The objective is a connected digital growth engine that can evolve quickly, support commercial operations and reduce unnecessary dependencies.',
        ],
        list: [] as string[],
        outro: 'It’s a practical example of how modern development and AI can give businesses greater autonomy over their growth infrastructure.',
        note: '',
        links: [{ label: 'Read the Sands case →', href: '/work/sands-entreprenad/' }],
      },
      {
        key: 'greow',
        kicker: 'Greow Digital',
        title: 'Where it comes together',
        body: [
          'Greow is where I bring these experiences together. I work with companies that want more than strategic recommendations – companies looking for someone who understands Growth, Product and Marketing, but who can also get hands-on and help build the systems behind them.',
          'Whether that’s designing a growth operating model, building an AI-powered workflow, developing a digital growth platform or acting as a strategic sparring partner, I want to help businesses move from talking about what’s possible to actually making it happen.',
        ],
        list: [] as string[],
        outro: '',
        note: '',
        links: [
          { label: 'AI Growth Consultant →', href: '/ai-growth-consultant/' },
          { label: 'AI GTM Systems →', href: '/ai-gtm-systems/' },
        ],
      },
    ],
  },

  howIWork: {
    label: 'How I work',
    h2a: 'Curious first.',
    h2b: 'Opinionated second.',
    intro: [
      'I’ve learned that the best solutions rarely come from walking into a room with all the answers. They come from understanding the problem, listening to the people closest to it, challenging assumptions – and having the confidence to test ideas before committing to them.',
      'My approach is shaped by a few principles.',
    ],
    principles: [
      { title: 'Understand before prescribing.', body: 'Every company has its own context, constraints and opportunities. I try to understand those before recommending solutions.' },
      { title: 'Start small. Learn fast.', body: 'I’d rather build a useful first version and learn from reality than spend months designing the perfect solution on paper.' },
      { title: 'Build with people, not around them.', body: 'Technology and processes should empower teams, not create new dependencies or take away ownership.' },
      { title: 'Business impact over busywork.', body: 'The goal isn’t to produce more reports, launch more campaigns or build more agents. It’s to create meaningful outcomes.' },
      { title: 'Stay curious.', body: 'The moment you think you’ve figured everything out is probably the moment you stop growing.' },
    ],
  },

  who: {
    label: 'Who I work with',
    h2: 'Strategy, leadership and hands-on building.',
    intro: 'I work with founders, CEOs, CMOs, Growth leaders and Product leaders who want to build better-performing businesses and organizations. My work typically falls into three areas.',
    areas: [
      {
        title: 'Growth Strategy & Advisory',
        body: 'Helping businesses identify growth opportunities, define strategies, improve operating models and build stronger cross-functional capabilities.',
        links: [
          { label: 'Growth Advisory →', href: '/growth-advisory/' },
          { label: 'Growth as a Service →', href: '/growth-as-a-service/' },
        ],
      },
      {
        title: 'AI-Native Growth & GTM Systems',
        body: 'Designing and building connected data, AI agents, automation, custom applications and workflows that make growth operations more effective.',
        links: [
          { label: 'AI GTM Systems →', href: '/ai-gtm-systems/' },
          { label: 'AI Growth Consultant →', href: '/ai-growth-consultant/' },
        ],
      },
      {
        title: 'Leadership, Coaching & Team Development',
        body: 'Supporting leaders and teams through organizational change, capability development, experimentation and new ways of working.',
        links: [{ label: 'Coaching & Mentorship →', href: '/growth-coaching/' }],
      },
    ],
    outro: ['Sometimes that means being a strategic advisor. Sometimes it means rolling up my sleeves and building something.', 'Usually, it’s a combination of both.'],
  },

  personal: {
    label: 'A little more personal',
    h2: 'Beyond the job titles.',
    body: [
      'I’m based in Stockholm, Sweden.',
      'Outside of work, I’m drawn to many of the same things that motivate me professionally: learning, challenging myself and building things. Whether it’s training, exploring new ideas, experimenting with technology or working on a side project, I enjoy the process of getting a little better at something.',
      'I don’t think personal growth and professional growth are particularly different. Both require curiosity, consistency, a willingness to be uncomfortable and the humility to accept that there’s always more to learn.',
      'And perhaps most importantly, the freedom to occasionally fail.',
    ],
  },

  bios: {
    label: 'Bios',
    h2: 'For introductions, events and press',
    shortLabel: 'Short bio',
    short: [
      'Erik Oliva Werner is a Stockholm-based Growth and Product leader, AI-native GTM consultant and founder of Greow Digital.',
      'With more than 15 years of experience across product development, acquisition, PLG, marketing operations and digital growth, he has worked with companies including DNB, RiksTV, LINK Mobility, Refapp, Leadfeeder, Funnel and Mentimeter.',
      'Erik combines senior strategic leadership with hands-on experience building digital products, AI-powered workflows and connected growth systems. His current focus is helping businesses move beyond isolated AI tools toward more integrated, AI-native ways of operating Growth and Go-to-Market.',
      'He is also an entrepreneur and ICF-accredited coach, with a strong interest in leadership, experimentation and helping people and organizations grow.',
    ],
    microLabel: 'Micro bio',
    micro:
      'Erik Oliva Werner is a Growth and Product leader, AI-native GTM consultant and founder of Greow Digital. He helps companies connect strategy, people and technology to build smarter, more scalable growth systems.',
  },

  cta: {
    h2a: 'Let’s build',
    h2b: 'something meaningful.',
    body: [
      'If you’re looking for someone who combines strategic Growth experience with a hands-on builder’s mindset, I’d love to connect.',
      'Whether you’re exploring AI, rethinking your growth organization, building a new digital platform or simply looking for someone to challenge your thinking – I’m always interested in meeting people who are curious about what comes next.',
    ],
    button: 'Let’s talk →',
    linkedin: 'Connect on LinkedIn',
    signature: ['Erik Oliva Werner', 'Founder, Greow Digital', 'Growth, Product & AI-Native GTM', 'Stockholm, Sweden'],
  },
}

export type FounderContent = typeof en

// ── Swedish ──────────────────────────────────────────────────────────────────

const metaSv = {
  path: '/sv/erik-oliva-werner/',
  title: 'Erik Oliva Werner | Growth-, produkt- & AI-native GTM-konsult',
  description:
    'Möt Erik Oliva Werner, grundare av Greow Digital: growth-ledare, produktbyggare och AI-native GTM-konsult med 15+ år inom SaaS, produkt och digital tillväxt.',
}

const sv: FounderContent = {
  hero: {
    kicker: 'Erik Oliva Werner · Grundare, Greow Digital',
    h1a: 'Hej, jag heter Erik.',
    h1b: 'Growth-ledare. Produkttänkare. Byggare i grunden.',
    body: [
      'I mer än 15 år har jag arbetat i skärningspunkten mellan growth, produkt, marknadsföring och teknik.',
      'Jag har byggt företag, lett team, utvecklat digitala produkter och hjälpt bolag att hitta bättre sätt att växa.',
      'Idag är jag särskilt nyfiken på vad som händer när den erfarenheten kombineras med AI. Inte bara för att automatisera några uppgifter – utan för att i grunden tänka om hur företag bygger, driver och skalar.',
      'Jag är grundare av Greow Digital, där jag hjälper ambitiösa bolag att göra tillväxtmöjligheter till fungerande system, produkter och mätbar affärsnytta.',
    ],
    cta: 'Hör av dig →',
    cta2: 'Se mitt arbete',
    photoAlt: 'Erik Oliva Werner, grundare av Greow Digital, i Stockholm',
  },

  story: {
    label: 'Min historia',
    h2: 'Jag har aldrig varit särskilt bra på att hålla mig i en låda.',
    body: [
      'Och jag har slutat försöka.',
      'Under min karriär har jag rört mig mellan produktutveckling, e-handel, performance marketing, konverteringsoptimering, growth, PLG och marketing operations.',
      'Ibland har jag varit produktchef. Ibland growth-ledare. Ibland konsult, entreprenör eller praktisk byggare. Olika titlar. Olika branscher. Olika utmaningar.',
      'Men i efterhand har den röda tråden alltid varit densamma. Jag älskar att förstå hur saker fungerar, ifrågasätta hur de kunde fungera bättre och sedan bygga något som gör skillnad.',
      'Jag har alltid dragits till utrymmet mellan disciplinerna:',
    ],
    spaces: [
      'Där kundbehov möter affärsmöjligheter.',
      'Där strategi möter genomförande.',
      'Där teknik gör det möjligt för människor att göra sådant de inte kunde förut.',
    ],
    outro: 'Det är ett utrymme som inte alltid passar in i traditionella rollbeskrivningar. Men det är där jag gör mitt bästa arbete.',
  },

  background: {
    label: 'Min bakgrund',
    h2: 'Från digitala produkter till growth-organisationer.',
    body: [
      'Min yrkesresa har tagit mig genom allt från stora finansinstitut och telekombolag till internationella B2B SaaS-bolag och mina egna entreprenöriella projekt.',
      'Jag har haft ledande roller inom produktutveckling, growth, kundförvärv och marketing operations. Jag har byggt och lett tvärfunktionella team, etablerat operativa modeller för growth, tagit fram förvärvsstrategier, lanserat digitala produkter och hjälpt organisationer att arbeta mer experimentellt och kundcentrerat.',
    ],
    orgsLabel: 'Organisationer jag har arbetat med är bland andra',
    orgs: [
      { name: 'DNB', slug: 'dnb-eiendom' },
      { name: 'RiksTV', slug: 'rikstv-strim' },
      { name: 'LINK Mobility', slug: '' },
      { name: 'Refapp', slug: 'refapp' },
      { name: 'Leadfeeder', slug: 'leadfeeder-dealfront' },
      { name: 'Funnel', slug: 'funnel' },
      { name: 'Mentimeter', slug: '' },
    ],
    skillsLabel: 'Min erfarenhet omfattar',
    skills: [
      'Produktutveckling och produktledning',
      'Tillväxtstrategi och produktledd tillväxt',
      'Kundförvärv, performance marketing och digital försäljning',
      'Konverteringsoptimering och experiment',
      'Marketing operations och teknik',
      'Organisationsutveckling och teamledarskap',
      'AI-native tillväxtsystem och automation',
    ],
    outro: [
      'Men jag ser inte det här som separata discipliner. Jag ser dem som olika delar av samma utmaning:',
      'Hur bygger man ett företag som lär sig snabbare, rör sig snabbare och skapar mer värde för sina kunder?',
    ],
  },

  entrepreneur: {
    label: 'Entreprenören',
    h2: 'Jag har alltid behövt något eget att bygga.',
    intro: 'Vid sidan av min karriär har jag under många år drivit företag och experimenterat med egna idéer.',
    ventures: [
      {
        name: 'Happy Vegan',
        slug: 'happy-vegan',
        body: 'Jag grundade och drev Happy Vegan, en e-handel som gav mig förstahandserfarenhet av att äga hela kundresan – från att locka besökare och konvertera kunder till att sköta drift, teknik och kommersiella resultat. Inga avdelningar att lämna över till. Ingen annan att skylla på när något inte fungerade. Bara ett företag, dess kunder och ansvaret att få det att lyckas.',
      },
      {
        name: 'Bnbalyze',
        slug: 'bnbalyze',
        body: 'En digital produkt jag byggt som utforskar hur data och teknik kan hjälpa människor att fatta bättre beslut kring investeringar i korttidsuthyrning.',
      },
      {
        name: 'Greow Digital',
        slug: '',
        body: 'Där jag kombinerar min konsulterfarenhet med ett växande fokus på att bygga digital tillväxtinfrastruktur för andra företag.',
      },
    ],
    readCase: 'Läs caset →',
    outro: [
      'De här projekten har lärt mig något som format hela min karriär: det är stor skillnad på att veta hur något borde fungera och att vara ansvarig för att det faktiskt fungerar.',
      'Jag tror att de bästa ledarna och konsulterna har nytta av att ha upplevt båda.',
    ],
  },

  approach: {
    label: 'Mitt sätt att se på tillväxt',
    h2a: 'Growth är inte en avdelning.',
    h2b: 'Det är ett sätt att arbeta.',
    body: [
      'En stor del av min karriär har handlat om att hjälpa organisationer att gå bortom traditionella funktionsgränser. Marknad gör sitt. Produkt gör sitt. Sälj gör sitt. Alla har sina egna mål, processer och verktyg – och någonstans däremellan blir kundresan splittrad.',
      'Jag tror att growth fungerar bäst när det blir ett gemensamt förhållningssätt och en gemensam operativ modell: byggd kring kundförståelse, tydliga mål, tvärfunktionellt samarbete, experiment och ständigt lärande.',
      'Det handlar om att skapa förutsättningar för team att fatta bättre beslut och röra sig snabbare. Rätt kultur. Rätt människor. Rätt processer. Rätt teknik.',
    ],
    nots: ['Inte ramverk för ramverkens skull.', 'Inte experimentteater.', 'Och definitivt inte ännu en dashboard som ingen använder.'],
    closing: 'Verklig tillväxt uppstår när strategi, människor och genomförande arbetar tillsammans.',
  },

  leadership: {
    label: 'Ledarskap & coaching',
    h2: 'Jag tror att de bästa ledarna skapar fler ledare.',
    body: [
      'Med åren har mina intressen gradvis skiftat. Tidigt i karriären fascinerades jag av mekaniken i digital tillväxt – kanalerna, trattarna, experimenten och siffrorna. Det älskar jag fortfarande. Men jag har blivit lika intresserad av människorna och organisationerna bakom resultaten.',
    ],
    questions: [
      'Hur bygger man ett team som tar ägarskap?',
      'Hur skapar man tydlighet utan att detaljstyra?',
      'Hur hjälper man människor att våga utmana antaganden, fatta beslut och testa nya saker?',
    ],
    outro: [
      'Som ICF-ackrediterad coach har jag utvecklat ett ledarskap som bygger på nyfikenhet, tillit och att ställa bättre frågor.',
      'Jag tror inte att en ledare måste ha alla svar. Jag tror att ledarens uppgift är att skapa en miljö där människor tillsammans kan hitta bättre svar. Det synsättet präglar hur jag leder team, faciliterar workshops och arbetar med kunder.',
    ],
    link: 'Growth-coaching & mentorskap →',
  },

  nextChapter: {
    label: 'Nästa kapitel',
    h2a: 'AI har förändrat spelplanen.',
    h2b: 'Och jag är med.',
    body: [
      'För någon som ägnat sin karriär åt att koppla ihop affär, produkt, marknadsföring och teknik känns AI som en enastående möjlighet. För första gången har avståndet mellan en idé och en fungerande lösning blivit dramatiskt kortare.',
      'Man kan gå från att identifiera ett problem till att prototypa en applikation, koppla ihop system eller automatisera ett arbetsflöde på sätt som tidigare krävde mycket större team och resurser. Det är spännande. Men jag tror också att vi bara skrapar på ytan.',
      'De flesta bolag ser fortfarande AI som ännu ett produktivitetsverktyg. Generera lite innehåll. Sammanfatta ett möte. Automatisera en repetitiv uppgift. Användbart? Absolut. Transformerande? Inte nödvändigtvis.',
      'Den större möjligheten är att tänka om hur verksamheten fungerar.',
    ],
    questions: [
      'Vad händer när er data, era insikter, arbetsflöden, ert innehåll, er webbplats och era kommersiella processer kopplas ihop?',
      'När AI-agenter kan stötta research, hitta möjligheter och hjälpa till att genomföra arbetet?',
      'När mindre team kan åstadkomma det som tidigare krävde hela avdelningar?',
    ],
    closing: 'Det är där jag lägger min energi idag.',
  },

  building: {
    label: 'Det jag bygger',
    h2: 'Från AI-verktyg till AI-native tillväxtsystem.',
    intro: 'Mitt nuvarande arbete handlar om att designa och bygga sammankopplade system som hjälper företag att driva tillväxt mer effektivt.',
    items: [
      {
        key: 'growthship',
        kicker: 'Mentimeter · yrkeserfarenhet',
        title: 'The Growthship',
        body: [
          'Genom mitt arbete på Mentimeter har jag utvecklat konceptet The Growthship, ett AI-native Growth & GTM Operating System. Visionen är att koppla ihop fyra förmågor:',
        ],
        list: [
          'The Bridge: data, insikter, analys och beslut',
          'The Engine Room: AI-agenter, innehållsproduktion och automatiserade arbetsflöden',
          'The Radar: signaler, möjligheter och rekommendationer',
          'The Launchpad: experiment, kampanjer och genomförande',
        ],
        outro: 'Tillsammans utgör de ett mer integrerat sätt att driva growth, där insikter kopplas till handling och lärande matas tillbaka in i systemet. Det är ett koncept och en utvecklingsriktning under utveckling, som kombinerar tillväxtstrategi, organisationsdesign och praktiska AI-experiment.',
        note: 'Mentimeter är min arbetsgivare. Det här är yrkeserfarenhet, inte ett kunduppdrag för Greow eller en produkt.',
        links: [],
      },
      {
        key: 'sands',
        kicker: 'Sands · Greow-kund',
        title: 'AI-native tillväxt på Sands',
        body: [
          'Som digital tillväxtpartner till Sands använder jag samma byggarperspektiv i ett mindre företag.',
          'Arbetet kombinerar tillväxtstrategi med skräddarsydd webbutveckling, CMS-funktioner, interna backoffice-verktyg, leadflöden, marknadsintegrationer och AI-assisterad utveckling. Målet är en sammankopplad digital tillväxtmotor som kan utvecklas snabbt, stötta den kommersiella verksamheten och minska onödiga beroenden.',
        ],
        list: [],
        outro: 'Det är ett praktiskt exempel på hur modern utveckling och AI kan ge företag större självständighet över sin tillväxtinfrastruktur.',
        note: '',
        links: [{ label: 'Läs caset om Sands →', href: '/sv/case/sands-entreprenad/' }],
      },
      {
        key: 'greow',
        kicker: 'Greow Digital',
        title: 'Där allt kommer samman',
        body: [
          'Greow är där jag samlar de här erfarenheterna. Jag arbetar med bolag som vill ha mer än strategiska rekommendationer – bolag som söker någon som förstår growth, produkt och marknadsföring, men som också kan kavla upp ärmarna och bygga systemen bakom.',
          'Oavsett om det handlar om att designa en operativ modell för growth, bygga ett AI-drivet arbetsflöde, utveckla en digital tillväxtplattform eller vara ett strategiskt bollplank vill jag hjälpa företag att gå från att prata om vad som är möjligt till att faktiskt göra det.',
        ],
        list: [],
        outro: '',
        note: '',
        links: [
          { label: 'AI-tillväxtkonsult →', href: '/sv/ai-tillvaxtkonsult/' },
          { label: 'AI GTM-system →', href: '/sv/ai-gtm-system/' },
        ],
      },
    ],
  },

  howIWork: {
    label: 'Hur jag arbetar',
    h2a: 'Nyfiken först.',
    h2b: 'Tyckande sedan.',
    intro: [
      'Jag har lärt mig att de bästa lösningarna sällan kommer från att gå in i ett rum med alla svar. De kommer från att förstå problemet, lyssna på dem som står närmast det, utmana antaganden – och våga testa idéer innan man binder sig vid dem.',
      'Mitt arbetssätt bygger på några principer.',
    ],
    principles: [
      { title: 'Förstå innan du föreskriver.', body: 'Varje bolag har sitt eget sammanhang, sina egna begränsningar och möjligheter. Jag försöker förstå dem innan jag rekommenderar lösningar.' },
      { title: 'Börja smått. Lär snabbt.', body: 'Jag bygger hellre en användbar första version och lär mig av verkligheten än lägger månader på att designa den perfekta lösningen på papper.' },
      { title: 'Bygg med människor, inte runt dem.', body: 'Teknik och processer ska stärka team, inte skapa nya beroenden eller ta bort ägarskap.' },
      { title: 'Affärsnytta framför sysselsättning.', body: 'Målet är inte fler rapporter, fler kampanjer eller fler agenter. Det är meningsfulla resultat.' },
      { title: 'Förbli nyfiken.', body: 'I samma stund som man tror att man har listat ut allt slutar man förmodligen att växa.' },
    ],
  },

  who: {
    label: 'Vilka jag arbetar med',
    h2: 'Strategi, ledarskap och praktiskt byggande.',
    intro: 'Jag arbetar med grundare, vd:ar, marknadschefer, growth-ledare och produktledare som vill bygga bättre presterande företag och organisationer. Mitt arbete faller oftast inom tre områden.',
    areas: [
      {
        title: 'Tillväxtstrategi & rådgivning',
        body: 'Att hjälpa företag att hitta tillväxtmöjligheter, ta fram strategier, förbättra operativa modeller och bygga starkare tvärfunktionella förmågor.',
        links: [
          { label: 'Growth Advisory →', href: '/sv/growth-advisory/' },
          { label: 'Growth as a Service →', href: '/sv/growth-as-a-service/' },
        ],
      },
      {
        title: 'AI-native growth- & GTM-system',
        body: 'Att designa och bygga sammankopplad data, AI-agenter, automation, skräddarsydda applikationer och arbetsflöden som gör growth-arbetet mer effektivt.',
        links: [
          { label: 'AI GTM-system →', href: '/sv/ai-gtm-system/' },
          { label: 'AI-tillväxtkonsult →', href: '/sv/ai-tillvaxtkonsult/' },
        ],
      },
      {
        title: 'Ledarskap, coaching & teamutveckling',
        body: 'Att stötta ledare och team genom organisatorisk förändring, kompetensutveckling, experiment och nya arbetssätt.',
        links: [{ label: 'Coaching & mentorskap →', href: '/sv/growth-coaching/' }],
      },
    ],
    outro: ['Ibland betyder det att vara strategisk rådgivare. Ibland betyder det att kavla upp ärmarna och bygga något.', 'Oftast är det en kombination av båda.'],
  },

  personal: {
    label: 'Lite mer personligt',
    h2: 'Bortom titlarna.',
    body: [
      'Jag bor i Stockholm.',
      'Utanför jobbet dras jag till mycket av det som också driver mig yrkesmässigt: att lära mig, utmana mig själv och bygga saker. Oavsett om det handlar om träning, nya idéer, att experimentera med teknik eller ett sidoprojekt, uppskattar jag processen att bli lite bättre på något.',
      'Jag tror inte att personlig och professionell utveckling är särskilt olika. Båda kräver nyfikenhet, uthållighet, en vilja att vara obekväm och ödmjukheten att acceptera att det alltid finns mer att lära.',
      'Och kanske viktigast av allt: friheten att ibland misslyckas.',
    ],
  },

  bios: {
    label: 'Bio',
    h2: 'För presentationer, evenemang och press',
    shortLabel: 'Kort bio',
    short: [
      'Erik Oliva Werner är en Stockholmsbaserad growth- och produktledare, AI-native GTM-konsult och grundare av Greow Digital.',
      'Med mer än 15 års erfarenhet av produktutveckling, kundförvärv, PLG, marketing operations och digital tillväxt har han arbetat med bolag som DNB, RiksTV, LINK Mobility, Refapp, Leadfeeder, Funnel och Mentimeter.',
      'Erik kombinerar senior strategisk ledning med praktisk erfarenhet av att bygga digitala produkter, AI-drivna arbetsflöden och sammankopplade tillväxtsystem. Hans nuvarande fokus är att hjälpa företag att gå bortom isolerade AI-verktyg mot mer integrerade, AI-native sätt att driva growth och go-to-market.',
      'Han är också entreprenör och ICF-ackrediterad coach, med ett starkt intresse för ledarskap, experiment och att hjälpa människor och organisationer att växa.',
    ],
    microLabel: 'Mikrobio',
    micro:
      'Erik Oliva Werner är growth- och produktledare, AI-native GTM-konsult och grundare av Greow Digital. Han hjälper bolag att koppla ihop strategi, människor och teknik för att bygga smartare och mer skalbara tillväxtsystem.',
  },

  cta: {
    h2a: 'Låt oss bygga',
    h2b: 'något meningsfullt.',
    body: [
      'Om du söker någon som kombinerar strategisk growth-erfarenhet med ett praktiskt byggarperspektiv vill jag gärna höra av dig.',
      'Oavsett om du utforskar AI, tänker om er growth-organisation, bygger en ny digital plattform eller bara vill ha någon som utmanar ditt tänkande – jag träffar alltid gärna människor som är nyfikna på vad som kommer härnäst.',
    ],
    button: 'Låt oss prata →',
    linkedin: 'Kontakta mig på LinkedIn',
    signature: ['Erik Oliva Werner', 'Grundare, Greow Digital', 'Growth, produkt & AI-native GTM', 'Stockholm'],
  },
}

export const founderByLang = { en, sv }
export const founderMetaByLang = { en: metaEn, sv: metaSv }

// ProfilePage + BreadcrumbList. The Person node itself (#erik) comes from the
// site graph in the root layout; its url points at the EN bio page.
export function founderJsonLd(lang: 'en' | 'sv') {
  const meta = founderMetaByLang[lang]
  const url = `${SITE_URL}${meta.path}`
  const home = lang === 'en' ? `${SITE_URL}/` : `${SITE_URL}/sv/`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${url}#profilepage`,
        url,
        name: meta.title,
        description: meta.description,
        inLanguage: lang,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        mainEntity: { '@id': `${SITE_URL}/#erik` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Greow', item: home },
          { '@type': 'ListItem', position: 2, name: 'Erik Oliva Werner', item: url },
        ],
      },
    ],
  }
}
