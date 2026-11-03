// All site content lives here. Update this file when your resume changes.

export const profile = {
  name: 'Joshua Walulik',
  title: 'Software Engineer at Wells Fargo',
  location: 'Scottsdale, AZ',
  email: 'joshuawalulik@gmail.com',
  bio: 'Full-stack software engineer with 3+ years at Wells Fargo, working across React/Node UIs, .NET microservices, and Java microservices. I take UI modernization, APIs, CI/CD pipelines, and performance testing from design to production.',
  links: {
    github: 'https://github.com/joshuawalulik',
    linkedin: 'https://www.linkedin.com/in/joshuawalulik/',
  },
}

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Wells Fargo',
    dates: 'Jul 2024 – Present',
    location: 'Chandler, AZ (Hybrid)',
    bullets: [
      'Recognized as one of very few engineers in the organization proficient in all three core stacks: React/Node UI, .NET microservices, and Java microservices',
      'Led UI modernization, migrating 6+ UI components to OpenShift Container Platform lower environments',
      'Designed, built, and deployed business-facing UI screens in Cloud Foundry — with editing, filtering, and role-based permission features — owning the full SDLC from design to production',
      'Developed experience APIs connecting the UI layer to domain microservices backed by MongoDB',
      'Pioneered BlazeMeter performance testing for UI components on the team, extending coverage to Kafka topics and .NET API endpoints',
      'Drove platform buildpack upgrades across production and lower environments, leveraging GitHub Copilot and AI-assisted tooling to improve delivery efficiency',
    ],
  },
  {
    role: 'Technology Analyst',
    company: 'Wells Fargo',
    dates: 'Jul 2023 – Jul 2024',
    location: 'Chandler, AZ (Hybrid)',
    bullets: [
      'Engineered Harness CI/CD pipelines that cut buildpack upgrade times to under 5 minutes; became the recognized Harness expert for the organization',
      'Pioneered migration of the organization’s UI components from UCD to Harness — authored the migration guidelines and mentored 3 teammates',
      'Presented the Harness pipeline solution to a leadership forum, driving adoption across the organization and leading its first production use',
      'Built multiple UI screens for the organization’s first React/Node micro-frontend production release',
      'Added 200+ automated test cases for a loan application service, covering multi-applicant workflows',
    ],
  },
  {
    role: 'Intern Analyst',
    company: 'Wells Fargo',
    dates: 'Jun 2022 – Aug 2022',
    location: 'Chandler, AZ',
    bullets: [
      'Developed and improved Java APIs that populate backend databases',
      'Gained foundational experience with enterprise development, Agile/Scrum, and financial technology systems',
    ],
  },
]

export const projects = [
  {
    name: 'JobSearcher',
    tech: ['Python', 'FastAPI', 'HTMX', 'SQLite', 'MCP'],
    description:
      'A job-search pipeline that scrapes Greenhouse/Lever/Ashby boards, ranks postings with a deterministic, fully explainable scoring engine, and tracks applications end to end — 300+ tests, an MCP server for AI-assisted tailoring, and a YAML→DOCX resume renderer.',
    link: 'https://github.com/joshuawalulik/jobsearcher',
  },
  {
    name: 'Oura Partner Dashboard',
    tech: ['TypeScript', 'Cloudflare Workers', 'Hono', 'OAuth2'],
    description:
      'A serverless health dashboard on Cloudflare Workers integrating the Oura API v2 over OAuth2 — two independent auth layers (Cloudflare Access + in-Worker JWT verification), field allowlisting, and a CI pipeline with post-deploy smoke tests.',
    link: 'https://github.com/joshuawalulik/oura-dashboard',
  },
  {
    name: 'Portfolio Website',
    tech: ['React', 'Vite'],
    description:
      'This site — a fast, single-page portfolio built with React and deployed on GitHub Pages, with a build-time CSP injected via a custom Vite plugin.',
    link: 'https://github.com/joshuawalulik/Portfolio-Site',
  },
]

export const skills = [
  {
    group: 'Frontend',
    items: ['React.js', 'Node.js', 'JavaScript', 'HTML & CSS', 'Micro Frontend (MFE) Architecture'],
  },
  {
    group: 'Backend',
    items: ['.NET Microservices', 'Java', 'Experience APIs', 'REST APIs', 'MongoDB', 'Kafka', 'Python', 'SQL'],
  },
  {
    group: 'DevOps & Cloud',
    items: ['Harness CI/CD', 'PCF', 'OpenShift (OCP)', 'Git', 'GitHub Copilot', 'BlazeMeter'],
  },
  {
    group: 'Methodologies',
    items: ['Agile / Scrum', 'SDLC', 'NFR Testing', 'Performance Testing'],
  },
]

export const education = [
  {
    school: 'Arizona State University — W. P. Carey School of Business',
    degree: 'B.S. Computer Information Systems',
    dates: '2019 – 2023',
    details: 'Minor in Psychology · Certificate in Applied Business Data Analytics',
  },
]

export const certificates = [
  {
    name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    date: 'Aug 2022',
  },
  {
    name: 'NSE 1 Network Security Associate',
    issuer: 'Fortinet',
    date: 'Sep 2022',
  },
]
