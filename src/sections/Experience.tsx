import { motion } from 'framer-motion'
import { experience } from '../data/experience'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section-eyebrow">Experience</p>
        <h2 className="section-title">My journey</h2>
        <ol className="timeline">
          {experience.map((item, i) => (
            <motion.li
              key={item.title}
              className="timeline-item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <span className="timeline-dot" aria-hidden="true" />
              <div className="card">
                <div className="timeline-meta">
                  <span className="timeline-period">{item.period}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="timeline-org">{item.org}</p>
                <p className="timeline-summary">{item.summary}</p>
                <ul>
                  {item.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
