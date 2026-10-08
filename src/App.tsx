import { content } from './content'

export default function App() {
  return (
    <main className="page">
      <header>
        <h1>{content.name}</h1>
        <p className="role">{content.role}</p>
        <p>{content.intro}</p>
      </header>

      {content.sections.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          <ul>
            {section.items.map((item) => (
              <li key={item.name}>
                <span className="year">{item.year}</span>
                <div>
                  <h3>
                    {'link' in item && item.link ? (
                      <a href={item.link} target="_blank" rel="noreferrer">
                        {item.name}
                      </a>
                    ) : (
                      item.name
                    )}
                  </h3>
                  <p>{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section>
        <h2>Skills</h2>
        <p>{content.skills.join(', ')}</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>
          <a href={`mailto:${content.email}`}>{content.email}</a>
          <br />
          <a href={content.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {' · '}
          <a href={content.cv}>Resume (PDF)</a>
        </p>
      </section>
    </main>
  )
}
