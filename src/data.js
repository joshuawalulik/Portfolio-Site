// All site content lives here. Wording mirrors the master resume bank (v20)
// under its application-workflow rules: every claim traces to the bank, no
// invented or upgraded scope, internal platform names stay genericized, and
// Python/SQL stay off the skills lists. Update the bank first, then mirror
// changes here.

export const profile = {
  name: 'Joshua Walulik',
  title: 'Software Engineer',
  location: 'Scottsdale, AZ',
  availability: 'Open to new opportunities in New York City',
  email: 'joshuawalulik@gmail.com',
  bio: 'Software Engineer with 3+ years at Wells Fargo building React and TypeScript front-ends, Node.js Experience APIs, and .NET and Java Spring Boot microservices. Owned enhancements on a core loan origination service processing 25,000 to 30,000 applications daily and was the sole developer of the Experience API layer on a new full-stack system.',
  links: {
    github: 'https://github.com/joshuawalulik',
    linkedin: 'https://www.linkedin.com/in/joshuawalulik/',
  },
}

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Wells Fargo',
    dates: 'Jul 2024 – Nov 2026',
    location: 'Chandler, AZ',
    bullets: [
      'Owned enhancements on a core .NET microservice processing 25,000 to 30,000 auto loan applications daily, part of an initiative replacing a 30-year-old Progress monolith',
      'Built React/TypeScript screens and the Node Experience API for a campaign management tool letting business teams manage Volkswagen and Audi data used in downstream loan pricing',
      'Extended the .NET loan application service with Ducati-specific application comments published over Kafka to downstream services, supporting a separate intake path for the partnership’s second launch phase',
      'Diagnosed a production Kafka serialization failure during a partner pilot in under 10 minutes using Splunk log queries and shipped a same-evening fix restoring event publication',
      'Built the Node/TypeScript Experience API and its domain service integration as sole developer on a new full-stack system (React/TypeScript, Java Spring Boot, MongoDB) routing work through an organizational hierarchy',
      'Shipped React and TypeScript features across an internal portal of 15+ screens, including web replacements for legacy green-screen underwriter workflows, from technical design through production release',
      'Built Java Spring Boot endpoints over MongoDB, joining two related collections in the service layer so the Experience API could serve a detailed screen without client-side assembly',
      'Used GitHub Copilot as a daily pair and primary debugger and handed scoped tasks to Devin, reviewing every generated change manually before merge',
    ],
  },
  {
    role: 'Technology Analyst',
    company: 'Wells Fargo',
    dates: 'Jul 2023 – Jul 2024',
    location: 'Chandler, AZ',
    bullets: [
      'Integrated Harness CI/CD pipelines that cut buildpack upgrade time to under 5 minutes, becoming the team’s go-to resource for CI/CD questions',
      'Built React/TypeScript screens from Figma and business requirements for the team’s first React/Node micro-frontend production release, extending automation tests and completing release readiness',
      'Built an automated test suite for a core loan-processing service, adding 200+ test cases and resolving MongoDB data-mapping issues',
      'Migrated the team’s UI components off legacy deployment tooling onto Harness and wrote the migration guide three teammates used to move their own components',
    ],
  },
  {
    role: 'Intern Analyst',
    company: 'Wells Fargo',
    dates: 'Jun 2022 – Aug 2022',
    location: 'Chandler, AZ',
    bullets: [
      'Built and improved backend APIs in Java that populated production databases, working inside an enterprise Agile delivery process',
    ],
  },
]

export const projects = [
  {
    name: 'JobSearcher',
    tech: ['Python', 'FastAPI', 'HTMX', 'SQLite', 'MCP'],
    description:
      'A job-search pipeline that scrapes Greenhouse, Lever, and Ashby ATS APIs, scores postings deterministically against a keyword profile with human-readable reasons, and tracks applications in a FastAPI and HTMX UI. Integrates with Claude through a custom MCP server and classifies Gmail replies over IMAP, with 300+ pytest tests covering scrapers, scoring, and the web app.',
    link: 'https://github.com/joshuawalulik/jobsearcher',
  },
  {
    name: 'Oura Partner Dashboard',
    tech: ['TypeScript', 'Cloudflare Workers', 'Hono', 'OAuth2'],
    description:
      'A serverless health dashboard on Cloudflare Workers integrating the Oura API v2 over OAuth2, with two independent auth layers (Cloudflare Access plus in-Worker JWT verification), field allowlisting, and a CI pipeline with post-deploy smoke tests.',
    link: 'https://github.com/joshuawalulik/oura-dashboard',
  },
  {
    name: 'Portfolio Website',
    tech: ['React', 'Vite'],
    description:
      'This site: a fast single-page portfolio built with React and deployed on GitHub Pages, with a build-time Content Security Policy injected via a custom Vite plugin.',
    link: 'https://github.com/joshuawalulik/Portfolio-Site',
  },
]

export const skills = [
  {
    group: 'Frontend',
    items: ['React.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Micro Frontend Architecture', 'Material UI', 'Figma'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'REST & Experience APIs', 'Java', 'Spring Boot', '.NET', 'C#', 'MongoDB', 'Kafka'],
  },
  {
    group: 'Testing & Observability',
    items: ['Jest', 'Playwright', 'BlazeMeter', 'JMeter', 'Performance & NFR Testing', 'Splunk'],
  },
  {
    group: 'DevOps, Cloud & AI Tools',
    items: ['Harness CI/CD', 'OpenShift', 'PCF', 'Git', 'GitHub Copilot', 'Devin'],
  },
]

export const education = [
  {
    school: 'W. P. Carey School of Business, Arizona State University',
    degree: 'B.S., Computer Information Systems',
    dates: 'May 2023',
    details: 'Minor in Psychology · Certificate in Applied Business Data Analytics',
  },
]

export const additional = [
  {
    label: 'Certifications',
    items: 'Microsoft Azure Fundamentals (AZ-900); NSE 1 Network Security Associate, Fortinet',
  },
  {
    label: 'Interests',
    items: 'Card collecting, gaming, reading, rating restaurants',
  },
  {
    label: 'Currently learning',
    items: 'Python, retrieval-augmented generation (RAG), agentic LLM workflows (Claude Code, MCP)',
  },
]
