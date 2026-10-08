import { motion } from 'framer-motion'
import { Gamepad2, LayoutTemplate, Database, Terminal } from 'lucide-react'
import { skillGroups } from '../data/skills'
import './Skills.css'

const icons = { gamepad: Gamepad2, layout: LayoutTemplate, database: Database, terminal: Terminal }

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-title">What I work with</h2>
        <div className="skills-grid">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon]
            return (
              <motion.div
                key={group.title}
                className="card skills-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="skills-head">
                  <Icon size={22} aria-hidden="true" />
                  <h3>{group.title}</h3>
                </div>
                <p className="skills-desc">{group.description}</p>
                <ul className="skills-tags">
                  {group.items.map((item) => (
                    <li key={item} className="tag">{item}</li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
