import { useEffect, useState } from 'react'
import { profile, experience, projects, skills, education, certificates } from './data.js'

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M13.6 0H2.4A2.4 2.4 0 0 0 0 2.4v11.2A2.4 2.4 0 0 0 2.4 16h11.2a2.4 2.4 0 0 0 2.4-2.4V2.4A2.4 2.4 0 0 0 13.6 0ZM4.98 13.63H2.61V6.02h2.37v7.61ZM3.79 4.98a1.37 1.37 0 1 1 0-2.75 1.37 1.37 0 0 1 0 2.75Zm9.84 8.65h-2.37V9.93c0-.88-.02-2.02-1.23-2.02-1.23 0-1.42.96-1.42 1.96v3.76H6.24V6.02h2.27v1.04h.03c.32-.6 1.09-1.23 2.25-1.23 2.4 0 2.84 1.58 2.84 3.63v4.17Z" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M4 12 12 4M6 4h6v6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ChevronDownIcon = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="m3.5 6 4.5 4.5L12.5 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function Section({ id, title, children }) {
  return (
    <section className="screen section" id={id}>
      <div className="section-scroll">
        <div className="container">
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    </section>
  )
}

const navItems = ['Experience', 'Projects', 'Skills', 'Education']
const screenIds = ['top', ...navItems.map((item) => item.toLowerCase())]

export default function App() {
  const [active, setActive] = useState('top')

  useEffect(() => {
    // Play the hero entrance only once the page is actually visible; content
    // stays fully readable without this class (no JS, hidden tab, crawler).
    const play = () => document.documentElement.classList.add('hero-enter')
    if (document.visibilityState === 'visible') {
      play()
      return undefined
    }
    const onVisible = () => {
      if (document.visibilityState === 'visible') {
        play()
        document.removeEventListener('visibilitychange', onVisible)
      }
    }
    document.addEventListener('visibilitychange', onVisible)
    return () => document.removeEventListener('visibilitychange', onVisible)
  }, [])

  useEffect(() => {
    // Screens are exactly (viewport - nav) tall and snap to multiples of that
    // height, so the active section falls straight out of the scroll offset.
    const update = () => {
      const snapHeight = window.innerHeight - 64
      const index = Math.min(
        screenIds.length - 1,
        Math.max(0, Math.round(window.scrollY / snapHeight)),
      )
      setActive(screenIds[index])
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const initials = profile.name
    .split(' ')
    .map((word) => word[0])
    .join('')

  return (
    <>
      <a className="skip-link" href="#experience">
        Skip to content
      </a>
      <nav className="nav">
        <div className="container nav-inner">
          <a className="nav-brand" href="#top">
            <span className="brand-full">{profile.name}</span>
            <span className="brand-short" aria-hidden="true">
              {initials}
            </span>
          </a>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={active === item.toLowerCase() ? 'active' : undefined}
                  aria-current={active === item.toLowerCase() ? 'true' : undefined}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <header className="screen hero" id="top">
        <div className="container">
          <h1>{profile.name}</h1>
          <div className="tagline">{profile.title}</div>
          <p className="bio">{profile.bio}</p>
          <div className="meta">{profile.location}</div>
          <div className="hero-links">
            <a className="btn primary" href={`mailto:${profile.email}`}>
              Get in touch
            </a>
            <a className="btn" href={profile.links.github} target="_blank" rel="noreferrer">
              <GitHubIcon /> GitHub
            </a>
            <a className="btn" href={profile.links.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </div>
        <div className="scroll-cue">
          <ChevronDownIcon />
        </div>
      </header>

      <Section id="experience" title="Experience">
        {experience.map((job) => (
          <div className="entry" key={job.role + job.company}>
            <div className="dates">{job.dates}</div>
            <div>
              <h3>{job.role}</h3>
              <div className="org">
                {job.company}
                {job.location ? ` · ${job.location}` : ''}
              </div>
              <ul>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Section>

      <Section id="projects" title="Projects">
        <div className="project-grid">
          {projects.map((p) => (
            <a className="project-card" href={p.link} target="_blank" rel="noreferrer" key={p.name}>
              <h3>
                {p.name} <ArrowIcon />
              </h3>
              <p>{p.description}</p>
              <div className="tags">
                {p.tech.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-group" key={group.group}>
              <h3>{group.group}</h3>
              <div className="pills">
                {group.items.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education">
        {education.map((edu) => (
          <div className="entry" key={edu.school}>
            <div className="dates">{edu.dates}</div>
            <div>
              <h3>{edu.school}</h3>
              <div className="org">{edu.degree}</div>
              <div className="details">{edu.details}</div>
            </div>
          </div>
        ))}
        <div className="certs">
          {certificates.map((cert) => (
            <div className="cert" key={cert.name}>
              <div>
                <div className="name">{cert.name}</div>
                <div className="issuer">{cert.issuer}</div>
              </div>
              <div className="date">{cert.date}</div>
            </div>
          ))}
        </div>
      </Section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </span>
        </div>
      </footer>
    </>
  )
}
