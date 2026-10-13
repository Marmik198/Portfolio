// ---------------------------------------------------------------------
// All portfolio content lives here. Edit this file to update the site.
// Items marked TODO use placeholder values that you should replace.
// ---------------------------------------------------------------------

export const profile = {
  name: 'Marmik Shah',
  role: 'Senior Software Developer',
  location: 'Mumbai, India',
  email: 'shahmarmik1@gmail.com',
  phone: '+91 87676 62635',
  linkedin: 'https://linkedin.com/in/marmik-shah19',
  github: 'https://github.com/Marmik198',
  resume: '/Marmik_Shah_Resume.pdf',
  typedRoles: [
    'builds event-driven platforms.',
    'designs real-time APIs.',
    'ships loyalty and rewards systems.',
    'keeps services running with zero downtime.',
  ],
  tagline:
    'I build the backend systems behind loyalty and rewards programs: Kafka ingestion pipelines, real-time APIs and low-latency services that process millions of records every day.',
};

export const about = {
  // Keep this to one or two short sentences.
  summary: 'I build the backend systems behind loyalty and rewards platforms, where high volume, low latency and correctness all matter at once.',
  // Short proof points, shown as a checklist.
  points: [
    'Kafka ingestion handling 1M+ records a day',
    'Real-time APIs replacing T+1 bulk-file settlement, 99% under 800ms',
    'Architected a channel loyalty product for manufacturers and finance companies',
  ],
  facts: [
    { label: 'Based in', value: 'Mumbai, India' },
    { label: 'Role', value: 'Senior Software Developer' },
    { label: 'Promoted', value: 'April 2025' },
    { label: 'Domain', value: 'Loyalty and rewards' },
  ],
  highlights: [
    { icon: 'Bolt', color: 'violet', title: 'Throughput and latency', text: 'Kafka, Redis and Bloom filters tuned for scale.' },
    { icon: 'Hub', color: 'coral', title: 'System design', text: 'Microservices and event-driven flows, used where they fit.' },
    { icon: 'Cloud', color: 'sky', title: 'Cloud and reliability', text: 'Kubernetes, HA setups, monitoring and alerts.' },
    { icon: 'Dashboard', color: 'mint', title: 'Tools for teams', text: 'Admin panels and dev tools so teams manage configs themselves.' },
  ],
};

// For each entry: `place` is the school or college, `subjects` is optional (add a list to show it),
// `logo` is optional (put the image in public/logos/ and use a path like '/logos/kjsce.png').
export const education = [
  {
    title: 'B.Tech, Computer Engineering',
    place: 'K J Somaiya College of Engineering, Mumbai',
    period: '2021 – 2023',
    note: 'CGPI 8.93',
    logo: '', // optional
    subjects: [], // optional, e.g. ['Data Structures', 'Operating Systems']
  },
  {
    title: 'HSC',
    place: 'Mumbai University',
    period: '2019',
    note: '84.62%',
    logo: '', // optional
    subjects: [], // optional
  },
  {
    title: 'SSC',
    place: 'Mumbai University',
    period: '2017',
    note: '89.80%',
    logo: '', // optional
    subjects: [], // optional
  },
];

export const achievements = [
  { title: 'Rising Star', period: '2023–24', note: 'Company award.' },
  { title: 'Extraordinary Diligence', period: '2024–25', note: 'Company award.' },
  { title: 'Think Out of the Box', period: '2025–26', note: 'Company award.' },
  {
    title: 'HackerBash hackathon, first place',
    period: 'College',
    note: 'Won first place at the CSI HackerBash hackathon as Team GrowMore. Project: Co-Vaccine web portal.',
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
    items: ['Java', 'JavaScript', 'Python', 'SQL', 'C', 'C++', 'Solidity'],
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
    title: 'DevOps and infra',
    icon: 'Cloud',
    color: 'mint',
    items: ['Jenkins', 'Prometheus', 'Grafana', 'New Relic', 'ELK', 'Alertmanager', 'Linux', 'Bash', 'Nginx', 'Crontab', 'High Availability'],
  },
  {
    title: 'Tools and platforms',
    icon: 'Hub',
    color: 'amber',
    items: ['Docker', 'Kubernetes', 'Git', 'Azure', 'Apache Camel', 'Kong Gateway', 'IPFS', 'Parcel'],
  },
  {
    title: 'Messaging and APIs',
    icon: 'Stream',
    color: 'coral',
    items: ['Apache Kafka', 'RabbitMQ', 'REST', 'JPA', 'GraphQL', 'Bloom Filters'],
  },
];

export const experience = {
  company: 'Loylty Rewardz',
  group: 'A Bill Desk Group Company',
  domain: 'Loyalty and rewards platforms',
  location: 'Mumbai, India',
  logo: '', // optional: '/logos/company.png' (file in public/logos/)
  roles: [
    {
      title: 'Senior Software Developer',
      period: 'Apr 2025 – Present',
      color: 'coral',
      bullets: [
        'Architected and implemented a new channel loyalty product for manufacturers and finance companies, serving DSAs, agents and channel partners across the distribution lifecycle with KPI management, leaderboards, tier computation, customer segmentation and an approval module.',
        'Designed a real-time, API-driven microservices platform replacing T+1 bulk-file settlement, with 99% of transactions under 800ms; used Spring AOP for cross-cutting concerns and tracing, plus a webhook-based data-relay service.',
        'Built a low-latency balance service using caching, Bloom filters and database views, handling 300 TPS, letting partners fetch balances and burn points across corporates and LOBs in a single go.',
        'Built a unified vendor integration layer for multiple modules using strategy-based orchestration and Kong gateway, cutting configuration and development effort when onboarding clients.',
        'Designed a bucket-based reward matrix framework and optimized enrichment and tenant loading, reducing database calls and improving Hikari connection-pool use and startup time.',
        'Built admin panels and development tools using AI, so client, product and RM teams manage configurations independently; migrated services to Java 21 and handled SSL and TLS certificate migrations.',
      ],
      tags: ['Spring Boot', 'Spring AOP', 'Redis', 'Bloom Filters', 'Kong Gateway', 'Kubernetes', 'Java 21'],
    },
    {
      title: 'Software Developer',
      period: 'Jun 2023 – Mar 2025',
      color: 'violet',
      bullets: [
        'Built a Kafka-driven ingestion platform processing 1M+ records daily, leveraging polling and webhook patterns for asynchronous status tracking and reconciliation to catch missed status updates.',
        'Designed an enterprise-wide loyalty program letting one program span multiple lines of business, with generic APIs.',
        'Developed a milestone-based journey rewards product on GraphQL; architected a profile-driven multi-database setup and a strategy-driven post-award layer for cashback and other redemption modules.',
        'Designed a parallel-processing lock for distributed ad hoc transactions and implemented the budget module to control reward spend, with threshold-based actions and real-time budget updates.',
        'Achieved zero downtime on production services with keep-alive, virtual IPs and master-slave HA; cut Redis memory by over 50% with a purging policy, a cluster setup and tuned RDB snapshots.',
        'Deployed a microservices architecture on a cloud Kubernetes cluster; implemented observability using ELK, Prometheus and Grafana.',
      ],
      tags: ['Kafka', 'GraphQL', 'Redis Cluster', 'Kubernetes', 'ELK', 'Prometheus', 'Grafana'],
    },
  ],
};

export const internships = [
  {
    company: 'ComED Learning',
    logo: '', // optional
    role: 'Software Development Intern',
    location: 'Remote',
    period: 'Apr 2022 – Jul 2022',
    color: 'amber',
    bullets: [
      'Developed UI/UX components and backend functionality for the ComED Learning platform.',
      'Integrated backend APIs for data exchange and dynamic content rendering; debugged application issues and performed functional testing to improve reliability.',
    ],
    tags: ['UI/UX', 'REST APIs', 'Testing'],
  },
  {
    company: 'K J Somaiya College of Engineering',
    logo: '', // optional
    role: 'Web Development Intern',
    location: 'Mumbai, India',
    period: 'Feb 2021 – Apr 2021',
    color: 'coral',
    bullets: [
      'Developed the website for the college cultural fest, Symphony, collaborating with the cultural and design teams.',
      'Built responsive web interfaces with interactive components and animations, optimizing layouts for different screen sizes.',
    ],
    tags: ['Responsive design', 'Animations', 'Web'],
  },
];

export const freelancing = {
  availability: 'Open to select freelance projects', // TODO
  intro:
    'Alongside my full-time role I take on a limited number of freelance engagements: backend APIs, data pipelines and front-ends for small teams and startups who want production-grade engineering without a full-time hire.',
  services: [
    {
      icon: 'Api',
      color: 'violet',
      title: 'Backend and API development',
      text: 'REST and GraphQL services in Java, Spring Boot, Node.js or Python, with clean contracts and tracing built in.',
    },
    {
      icon: 'Stream',
      color: 'sky',
      title: 'Data pipelines and ingestion',
      text: 'Kafka-based ingestion with status tracking and reconciliation, so no record goes missing.',
    },
    {
      icon: 'Speed',
      color: 'mint',
      title: 'Performance and caching',
      text: 'Redis caching, locking and query tuning to hit the latency and throughput targets you set.',
    },
    {
      icon: 'Cloud',
      color: 'coral',
      title: 'Cloud and DevOps setup',
      text: 'Docker and Kubernetes deployments, monitoring with Prometheus, Grafana and ELK, and alerting.',
    },
    {
      icon: 'Web',
      color: 'amber',
      title: 'Web front ends',
      text: 'React and Next.js sites and dashboards with Material UI, built to be fast and accessible.',
    },
    {
      icon: 'Dashboard',
      color: 'violet',
      title: 'Admin panels',
      text: 'Configurable internal tools that let non-engineers manage rules, programs and data.',
    },
  ],
  // TODO: add your freelance case studies here. Each entry renders as a card.
  caseStudies: [],
};

// Personal and college projects. (Work projects live in the Experience section.)
// `logo` is optional: put the image in public/logos/ and use a path like '/logos/newzer.png'.
export const projects = [
  {
    title: 'Mumbai Police web portal',
    color: 'sky',
    logo: '', // optional
    description: 'A full-stack complaint portal with station routing and status tracking.',
    stack: ['Django', 'PostgreSQL', 'Leaflet.js'],
    github: 'https://github.com/Marmik198/Mumbai_Police',
  },
  {
    title: 'Waiterio application',
    color: 'mint',
    logo: '', // optional
    description: 'A client-server desktop app where waiters place orders and the chef fulfills them.',
    stack: ['Java', 'Swing', 'Sockets'],
    github: 'https://gitlab.com/grow_more/waiter-ordering-system',
  },
  {
    title: 'Newzer',
    color: 'coral',
    logo: '', // optional
    description: "A personalized news recommendation website that curates and summarizes articles based on users' interests, preferences and feedback, using a recommendation algorithm.",
    stack: ['Django', 'JavaScript', 'ML Algorithms'],
    github: 'https://github.com/Marmik198/Newzer',
  },
];
