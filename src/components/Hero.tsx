import { motion } from 'framer-motion'
import { Mail, Download, ArrowRight } from 'lucide-react'
import { profile } from '../data/profile'
import './Hero.css'

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function Hero() {
  const [first, ...rest] = profile.name.split(' ')
  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <motion.div
        className="container hero-inner"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.img
          variants={item}
          className="hero-photo"
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width={300}
          height={300}
        />
        <div>
          <motion.div variants={item} className="hero-badge">
            <span className="hero-dot" aria-hidden="true" />
            Open to internship · {profile.lookingFor}
          </motion.div>
          <motion.h1 variants={item} className="hero-name">
            {first} <span>{rest.join(' ')}</span>
          </motion.h1>
          <motion.p variants={item} className="hero-role">{profile.role}</motion.p>
          <motion.p variants={item} className="hero-tagline">{profile.tagline}</motion.p>
          <motion.div variants={item} className="hero-cta">
            <a href="#projects" className="btn btn-primary">View projects <ArrowRight size={18} /></a>
            <a href={profile.cvUrl} className="btn btn-ghost" download>
              <Download size={18} /> Download CV
            </a>
            <a href="#contact" className="btn btn-ghost">Contact</a>
          </motion.div>
          <motion.div variants={item} className="hero-social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Send an email">
              <Mail size={20} />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
