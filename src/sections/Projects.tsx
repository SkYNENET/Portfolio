import { useCallback, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import { projects, type Project, type ProjectCategory } from '../data/projects'
import ProjectCard, { categoryLabel } from '../components/projects/ProjectCard'
import ProjectModal from '../components/projects/ProjectModal'
import './Projects.css'

type Filter = 'all' | ProjectCategory

const ORDER: ProjectCategory[] = ['roblox', 'web', 'school']

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all')
  const [active, setActive] = useState<Project | null>(null)

  const tabs = useMemo(() => {
    const present = ORDER.filter((c) => projects.some((p) => p.category === c))
    return [
      { id: 'all' as Filter, label: 'All', count: projects.length },
      ...present.map((c) => ({
        id: c as Filter,
        label: categoryLabel[c],
        count: projects.filter((p) => p.category === c).length,
      })),
    ]
  }, [])

  const visible = projects.filter((p) => filter === 'all' || p.category === filter)
  const hasWeb = projects.some((p) => p.category === 'web')
  const showPlaceholder = !hasWeb && (filter === 'all' || filter === 'web')
  const close = useCallback(() => setActive(null), [])

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-eyebrow">Projects</p>
        <h2 className="section-title">Things I've built</h2>

        <div className="pj-tabs" role="group" aria-label="Filter projects by category">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`pj-tab${filter === t.id ? ' is-active' : ''}`}
              aria-pressed={filter === t.id}
              onClick={() => setFilter(t.id)}
            >
              {t.label} <span className="pj-count">{t.count}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="pj-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <ProjectCard key={p.name} project={p} onOpen={setActive} />
            ))}
            {showPlaceholder && (
              <motion.div
                layout
                key="coming-soon"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="pj-soon"
              >
                <Code2 size={28} aria-hidden="true" />
                <h3>Web / Full stack</h3>
                <p>More coming soon</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={close} />}
      </AnimatePresence>
    </section>
  )
}
