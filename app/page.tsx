import { profile, skills, projects, experience, education, credentials } from "@/lib/data";

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="logo">
            {profile.name}
          </a>
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero container">
          <p className="eyebrow">Hi, I&apos;m</p>
          <h1>{profile.name}</h1>
          <h2>{profile.title}</h2>
          <p className="lead">{profile.tagline}</p>
          {profile.highlights.length > 0 && (
            <ul className="highlights">
              {profile.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}
          <div className="actions">
            <a className="btn primary" href="#projects">
              View my work
            </a>
            <a className="btn" href={`mailto:${profile.email}`}>
              Get in touch
            </a>
            {profile.resumeUrl && (
              <a className="btn" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                Résumé
              </a>
            )}
          </div>
        </section>

        <section id="about" className="container section">
          <h3 className="section-title">About</h3>
          <div className="about-grid">
            <div>
              {profile.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="skills">
              {skills.map((s) => (
                <div key={s.group}>
                  <h4>{s.group}</h4>
                  <ul className="chips">
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="container section">
          <h3 className="section-title">Projects</h3>
          <div className="cards">
            {projects.map((p) => (
              <article className={p.images ? "card featured" : "card"} key={p.title}>
                {p.badge && <span className="badge">{p.badge}</span>}
                <h4>{p.title}</h4>
                <p>{p.description}</p>
                {p.images && (
                  <div className="shots">
                    {p.images.map((img) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img key={img.src} src={img.src} alt={img.alt} loading="lazy" />
                    ))}
                  </div>
                )}
                <ul className="chips small">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="card-links">
                  {p.href && (
                    <a href={p.href} target="_blank" rel="noreferrer">
                      Live site ↗
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer">
                      Code ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="container section">
          <h3 className="section-title">Experience</h3>
          <ol className="timeline">
            {experience.map((e) => (
              <li key={`${e.company}-${e.period}`}>
                <div className="period">{e.period}</div>
                <div>
                  <h4>
                    {e.role} · <span>{e.company}</span>
                  </h4>
                  <p>{e.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="education" className="container section">
          <h3 className="section-title">Education &amp; Credentials</h3>
          <div className="cards">
            {education.map((e) => (
              <article className="card" key={e.degree}>
                <h4>{e.degree}</h4>
                <p>{e.school}</p>
                <p className="meta">{e.period}</p>
              </article>
            ))}
            {credentials.map((c) => (
              <article className="card" key={c.title}>
                <h4>{c.title}</h4>
                <p>{c.issuer}</p>
                {c.note && <p className="meta">{c.note}</p>}
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="container section contact">
          <h3 className="section-title">Contact</h3>
          <p className="lead">
            Have a project in mind or just want to say hello? My inbox is open.
          </p>
          <a className="btn primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <ul className="socials">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="footer container">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </footer>
    </>
  );
}
