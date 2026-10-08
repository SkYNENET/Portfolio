import { motion } from 'framer-motion'
import { Gamepad2, GraduationCap, Layers, Briefcase } from 'lucide-react'
import { profile } from '../data/profile'
import './About.css'

const highlights = [
  { icon: Gamepad2, title: 'Roblox games', text: 'Several years building and shipping live games.' },
  { icon: GraduationCap, title: `${profile.school} student`, text: 'C, algorithms, Python data and ML.' },
  { icon: Layers, title: 'Going full stack', text: 'React, Next.js, Supabase and PostgreSQL.' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">From game logic to full stack</h2>
        <div className="about-grid">
          <motion.div
            className="about-bio"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>
              I'm Hector, a student at {profile.school}. I learned programming logic by building Roblox games for
              several years, which taught me how to design modular client/server systems, persist player data and
              fight cheaters.
            </p>
            <p>
              Today I'm bringing that experience to the full stack: C and Python at school, and React, Next.js,
              Supabase and PostgreSQL on my own projects.
            </p>
            <p className="about-looking">
              <Briefcase size={18} aria-hidden="true" /> {profile.lookingFor}.
            </p>
          </motion.div>
          <ul className="about-cards">
            {highlights.map(({ icon: Icon, title, text }, i) => (
              <motion.li
                key={title}
                className="card about-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Icon size={22} aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
