// ---------------------------------------------------------------------
// All portfolio content lives here. Edit this file to update the site.
// Items marked TODO use placeholder values that you should replace.
// ---------------------------------------------------------------------

export const profile = {
  name: 'Marmik Shah',
  role: 'Senior Software Developer',
  location: 'Mumbai, India',
  availability: 'PAN, India',
  email: 'shahmarmik1@gmail.com',
  phone: '+91 87676 62635',
  linkedin: 'https://linkedin.com/in/marmik-shah19',
  github: 'https://github.com/Marmik198',
  resume: '/Marmik_Shah_Resume.pdf',
  // Each line completes the sentence "<role> who ...". Keep them short (about 45 characters or fewer).
  typedRoles: [
    'builds event-driven BFSI platforms.',
    'designs real-time, API-driven microservices.',
    'crafts clean UIs and admin tools end to end.',
    'ships full-stack products, from UI to database.',
    'accelerates delivery with AI-assisted coding.',
    'keeps production running with zero downtime.'
  ],
  tagline:
    'Senior Software Developer building scalable, event-driven BFSI, loyalty and rewards platforms, from low-latency backends to polished UIs, and fluent in AI-assisted coding. Promoted to Senior in under two years.',
};

export const about = {
  // A short professional summary: two sentences, covering domain, tenure and promotion.
  summary:
    'Senior Software Developer with 3+ years of experience building scalable distributed systems for BFSI, loyalty and rewards platforms, across backend, front end and full stack. Architected a new loyalty product for manufacturers and finance companies, implemented Kafka ingestion at 1M+ records a day and a 300 TPS low-latency balance service, applying microservices, event-driven and strategy patterns. Proficient in AI-assisted development with Claude, Cursor, Kiro and Copilot. Promoted to Senior in under two years; recognised with an award every year.',
  // Three proof points that add to the summary, shown as a checklist.
  points: [
    'Architected a channel loyalty product for manufacturers and finance companies',
    'Low-latency balance service handling 300 TPS with caching and Bloom filters',
    'Zero downtime on production services; Redis memory cut by over 50%',
    'Kafka ingestion at 1M+ records a day and a 300 TPS balance service',
    'Built admin panels and dev tools with AI so teams manage configurations themselves'
  ],
  facts: [
    { label: 'Based in', value: 'Mumbai, India' },
    { label: 'Role', value: 'Senior Software Developer' },
    { label: 'Focus', value: 'Backend, Frontend and Full Stack' },
    { label: 'Promoted', value: 'April 2025' },
    { label: 'Domain', value: 'BFSI, Fintech, Loylty' },
  ],
  highlights: [
    { icon: 'Bolt', color: 'violet', title: 'Backend at scale', text: 'Kafka, Redis and Bloom filters tuned for high throughput and low latency.' },
    { icon: 'Hub', color: 'coral', title: 'System and interface design', text: 'Microservices and event-driven flows, paired with clean, usable interfaces.' },
    { icon: 'Cloud', color: 'sky', title: 'Cloud and reliability', text: 'Kubernetes, high availability, monitoring and alerting for zero-downtime services.' },
    { icon: 'Dashboard', color: 'mint', title: 'AI-assisted engineering', text: 'Claude, Cursor, Kiro and Copilot used to ship tools and prototypes faster.' },
  ],
};

// For each entry: `place` is the school or college, `subjects` is optional (add a list to show it),
// `logo` is optional (put the image in public/logos/ and use a path like '/logos/kjsce.png').
export const education = [
  {
    title: 'B.Tech, Computer Engineering',
    place: 'K J Somaiya College of Engineering, Mumbai',
    period: '2019 – 2023',
    note: 'CGPI 9.04',
    logo: '/logos/kjsce.png', // optional
    subjects: [
      'Data Structures',
      'Analysis of Algorithms',
      'Software Engineering',
      'Object Oriented Programming',
      'Artificial Intelligence',
      'Computer System',
      'Cryptography and Security',
      'Computer Networks',
      'Operating Systems',
      'Blockchain Technology',
      'Digital Accessibility',
      'Database Management',
    ],
    coCurricular: ['Organising Commitee'],
    // more: [{ label: 'Languages', items: ['English', 'Hindi'] }], // optional
  },
  {
    title: 'HSC',
    place: 'Sardar Vallabhbhai Patel Jr. College, Mumbai',
    period: '2019',
    note: '84.62%',
    logo: '/logos/svpv.jpeg', // optional
    subjects: ['Computer Science'], // optional
    competitiveExams: ['MHT-CET: 97.41', 'JEE-Mains: 84.07'], // optional
  },
  {
    title: 'SSC',
    place: 'Shantinagar High School, Mumbai',
    period: '2017',
    note: '89.80%',
    logo: '/logos/snhs.png', // optional
    more: [{ label: 'Art Examinations', items: ['Intermediate Grade: B', 'Elementary Grade: C'] }],
    subjects: [], // optional
  },
];

export const achievements = [
  {
    title: 'Think Out of the Box', 
    period: '2026', 
    note: 'Loylty Rewardz Award', 
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7455623075951222784/',
    linkLabel: 'View Recognition',
  },
  {
    title: 'Extraordinary Diligence', 
    period: '2025', 
    note: 'Loylty Rewardz Award', 
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7329455901826826240/',
    linkLabel: 'View Recognition',
  },
  {
    title: 'Rising Star', 
    period: '2024', 
    note: 'Loylty Rewardz Award.', 
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7192604874243510272/',
    linkLabel: 'View Recognition',
  },
  {
    title: 'HackerBash hackathon, Winner',
    period: '2021',
    note: 'Won first place at CSI HackerBash hackathon as Team GrowMore. Project: Co-Vaccine web portal.',
    href: 'https://devfolio.co/projects/covaccine-f381',
    linkLabel: 'View project',
  },
];

// TODO: replace these placeholders with your real certifications (title, issuer, year, one-line note).
export const certifications = [
  { title: 'Certification name', issuer: 'Issuing organisation', year: 'Year', note: 'Short description of what it covers.' },
  { title: 'Certification name', issuer: 'Issuing organisation', year: 'Year', note: 'Short description of what it covers.' },
  { title: 'Certification name', issuer: 'Issuing organisation', year: 'Year', note: 'Short description of what it covers.' },
];

export const skills = [
  {
    title: 'Programming languages',
    icon: 'Code',
    color: 'violet',
    items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'C', 'C++', 'Solidity'],
  },
  {
    title: 'Frameworks and libraries',
    icon: 'Web',
    color: 'coral',
    items: ['Spring', 'Spring Boot', 'Node.js', 'Django', 'React', 'Next.js', 'Vue.js', 'SASS', 'Bootstrap'],
  },
  {
    title: 'Databases and caches',
    icon: 'Storage',
    color: 'sky',
    items: ['MySQL', 'PostgreSQL', 'Greenplum', 'SQL Server', 'MongoDB', 'Supabase', 'Redis', 'Neo4j'],
  },
  {
    title: 'AI tools',
    icon: 'AutoAwesome',
    color: 'violet',
    items: ['Claude', 'GPT', 'Cursor', 'Kiro', 'Copilot'],
  },
  {
    title: 'DevOps and Infrastructure',
    icon: 'Cloud',
    color: 'mint',
    items: ['CI/CD', 'Jenkins', 'Prometheus', 'Grafana', 'New Relic', 'ELK', 'Alertmanager', 'Linux', 'Bash', 'Nginx', 'Crontab'],
  },
  {
    title: 'Tools and platforms',
    icon: 'Hub',
    color: 'amber',
    items: ['Docker', 'Kubernetes', 'Git', 'Azure', 'Apache Camel', 'Airflow', 'Kong Gateway', 'Parcel'],
  },
  {
    title: 'Messaging and APIs',
    icon: 'Stream',
    color: 'coral',
    items: ['Apache Kafka', 'RabbitMQ', 'REST', 'SOAP', 'JPA', 'GraphQL', 'Oauth 2.0', 'JWT'],
  },
  {
    title: 'Concepts',
    icon: 'Api',
    color: 'coral',
    items: ['Microservices', 'Distributed Systems', 'Caching', 'High Availability', 'Bloom Filters', 'Agile', 'Blockchain', 'Multi-Tenancy', 'UI/UX', 'Responsive Designs', 'State Management'],
  },
];

export const experience = {
  company: 'Loylty Rewardz',
  group: 'A BillDesk Group Company',
  domains: ['BFSI', 'Fintech', 'Loyalty'],
  location: 'Mumbai, India',
  period: 'Jun 2023 – Present',
  logo: '/logos/loylty.png', // optional: '/logos/company.png' (file in public/logos/)
  roles: [
    {
      title: 'Senior Software Developer',
      period: 'Apr 2025 – Present',
      color: 'coral',
      bullets: [
        'Architected and implemented a new channel loyalty product for manufacturers and finance companies, serving DSAs, agents, and channel partners across the distribution lifecycle with Hierarchy Management, KPI management, leaderboards, tier computations, customer segmentation, and an approval module.', 
        'Engineered a real-time, API-driven microservices platform replacing T+1 bulk-file settlement, with 99\% of transactions under 800ms; used Spring AOP for cross-cutting concerns and tracing, plus a webhook-based data-relay service.', 
        'Built a low-latency balance service using caching, Bloom filters and database views, handling 300 TPS, letting partners fetch balances and burn points across corporates and Line of business\'s in a single go.', 
        'Developed a unified vendor integration layer for multiple modules using strategy-based orchestration and Kong gateway, cutting configuration and development effort by 60\% when onboarding clients.', 
        'Structured a bucket-based reward matrix framework and optimized enrichment and tenant loading, reducing database calls by over 45\% and improving Hikari connection-pool utilization and cutting startup time from 300s to 85s.', 
        'Created AI-assisted admin panels and dev tools using React, so client, product and RM teams manage configurations independently.', 
        'Migrated services to Java 21 and handled SSL/TLS certificate migrations.', 
      ],
      tags: ['System Design', 'Spring Boot', 'Spring AOP', 'Redis', 'Bloom Filters', 'Kong Gateway', 'Kubernetes', 'Java 8-21'],
    },
    {
      title: 'Software Developer',
      period: 'Jun 2023 – Mar 2025',
      color: 'violet',
      bullets: [
        'Engineered a Kafka-driven ingestion platform processing 1M+ records daily, leveraging polling and webhook patterns for asynchronous status tracking and reconciliation to catch missed status updates.',
        'Designed an enterprise-wide loyalty program letting one program span multiple lines of business, with generic APIs.',
        'Developed a milestone-based journey rewards product on GraphQL; architected a profile-driven multi-database setup and a strategy-driven post-award layer for cashback and other redemption modules.',
        'Devised a parallel-processing lock for distributed ad hoc transactions and implemented the budget module to control reward spend, with threshold-based actions and real-time budget updates.',
        'Achieved zero downtime on production services with keep-alive, virtual IPs and master-slave HA; cut Redis memory by over 50\% with a purging policy, a cluster setup and tuned RDB snapshots.',
        'Deployed microservices architecture on a Kubernetes cluster; introduced observability using ELK, Prometheus, and Grafana.',
      ],
      tags: ['Multi Tenancy', 'Kafka', 'GraphQL', 'Redis Cluster', 'Kubernetes', 'ELK', 'Prometheus', 'Grafana', 'MySQL', 'MongoDB'],
    },
  ],
};

export const internships = [
  {
    company: 'Techq Connect',
    logo: '/logos/tq.jpeg', // optional
    role: 'Software Development Intern',
    location: 'Remote',
    period: 'Feb 2022 – March 2022',
    color: 'amber',
    bullets: [
      'Built a full-stack Django quiz application with JWT-based registration and login, plus a superadmin module for user management.',
      'Implemented quiz creation by admins for MCQ and text-input questions, with auto-evaluation for MCQs, manual grading for text answers, result review for users, and validations, timers, and shuffled questions.',
      'Assisted on several ongoing client projects alongside the main quiz application.',
    ],
    tags: ['Django', 'React JS', 'Pyhton', 'UI/UX', 'REST APIs', 'Testing'],
  },
  {
    company: 'ComED Learning',
    logo: '/logos/comed.jpeg', // optional
    role: 'Software Development Intern',
    location: 'Remote',
    period: 'Apr 2022 – Jul 2022',
    color: 'amber',
    bullets: [
      'Built UI/UX components and server-side functionality for the ComED Learning platform using Django and React',
      'Connected backend APIs to enable data exchange and dynamic content rendering; resolved application bugs and ran functional tests to make the platform more reliable.',
    ],
    tags: ['Django', 'React JS', 'Pyhton', 'UI/UX', 'REST APIs', 'Testing'],
  },
  {
    company: 'K J Somaiya College of Engineering',
    logo: '/logos/kjsce.png', // optional
    role: 'Web Development Intern',
    location: 'Mumbai, India',
    period: 'Feb 2021 – Apr 2021',
    color: 'coral',
    bullets: [
      'Created the website for Symphony, the college cultural fest, collaborating with the cultural and design teams.',
      'Designed responsive web interfaces featuring interactive components and animations, tuning layouts to fit a range of screen sizes.',
    ],
    tags: ['JavaScript', 'CSS', 'Responsive design', 'Animations', 'Web'],
  },
];

export const freelancing = {
  availability: 'Open to select freelance projects', // TODO
  intro:
    'Alongside my full-time role, I take on a limited number of freelance projects: full-stack products, backend APIs and data pipelines, and polished front ends, delivered with production-grade engineering and AI-assisted speed.',
  services: [
    {
      icon: 'Web',
      color: 'violet',
      title: 'Full-stack web applications',
      text: 'End-to-end products with React or Next.js front ends and Java, Python or Node.js back ends.',
    },
    {
      icon: 'Palette',
      color: 'coral',
      title: 'UI/UX and front ends',
      text: 'Responsive, accessible interfaces and dashboards that are fast and easy to use.',
    },
    {
      icon: 'Api',
      color: 'sky',
      title: 'Backend and API development',
      text: 'REST and GraphQL services with clean contracts, tracing and caching built in.',
    },
    {
      icon: 'Stream',
      color: 'mint',
      title: 'Data pipelines and ingestion',
      text: 'Kafka-based ingestion with status tracking and reconciliation, so no record goes missing.',
    },
    {
      icon: 'Dashboard',
      color: 'amber',
      title: 'Admin panels and internal tools',
      text: 'Configurable tools, built quickly with AI assistance, that let non-engineers manage rules and data.',
    },
    {
      icon: 'Cloud',
      color: 'violet',
      title: 'Cloud, performance and DevOps',
      text: 'Docker and Kubernetes deployments, monitoring, alerting and performance tuning.',
    },
  ],
  // TODO: add your freelance case studies here. Each entry renders as a card.
  caseStudies: [],
};

// Personal and college projects. (Work projects live in the Experience section.)
// `logo` is optional: put the image in public/logos/ and use a path like '/logos/newzer.png'.
export const projects = [
  {
    title: 'Mumbai Police Portal',
    color: 'sky',
    logo: '/logos/mumbaipolice.png', 
    description: 'A full-stack complaint portal with station routing and status tracking.',
    stack: ['Django', 'PostgreSQL', 'Leaflet.js'],
    github: 'https://github.com/Marmik198/Mumbai_Police',
  },
  {
    title: 'Waiterio Application',
    color: 'mint',
    logo: '/logos/waiterio.png', // optional
    description: 'A client-server desktop app where waiters place orders and the chef fulfills them.',
    stack: ['Java', 'Swing', 'Sockets'],
    github: 'https://gitlab.com/grow_more/waiter-ordering-system',
  },
  {
    title: 'Newzer',
    color: 'coral',
    logo: '/logos/newzer.png', 
    description: "A personalized news recommendation website that curates and summarizes articles based on users' interests, preferences and feedback, using a recommendation algorithm.",
    stack: ['Django', 'JavaScript', 'ML'],
    github: 'https://github.com/Marmik198/Newzer',
  },
  {
    title: 'Chakra',
    color: 'sky',
    logo: '/logos/chakra.png', // optional
    description: 'A your personal life tracker, a web and Android app that keeps your tasks, streaks, money, health, sleep, food, investments, work board and notes together in one place.',
    stack: ['Node', 'Next JS', 'Supabase'],
    github: 'https://github.com/Marmik198/Chakra',
  },
  {
    title: 'Mapty',
    color: 'mint',
    logo: '/logos/mapty.png', // optional
    description: 'Web application that lets you keep track of your workouts associated to map locations',
    stack: ['JavaScript', 'Geolocation', 'Leaflet'],
    github: 'https://github.com/Marmik198/Mapty',
  },
  {
    title: 'Forkify',
    color: 'coral',
    logo: '/logos/forkify.png', // optional
    description: "Web application that lets you explore different recipes, add your own recipes, bookmark your favourite ones.",
    stack: ['JavaScript', 'Parcel', 'Async', 'SASS'],
    github: 'https://github.com/Marmik198/Forkify',
  },
];
