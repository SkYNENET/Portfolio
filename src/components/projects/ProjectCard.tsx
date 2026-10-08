import { motion } from 'framer-motion'
import { ExternalLink, Gamepad2, Code2 } from 'lucide-react'
import type { Project, ProjectCategory } from '../../data/projects'

export const categoryLabel: Record<ProjectCategory, string> = {
  roblox: 'Roblox',
  web: 'Web',
  school: 'School',
}

export function ProjectLinks({ project }: { project: Project }) {
  const repo = project.github ?? (project.category !== 'roblox' ? project.link : undefined)
  const game = project.category === 'roblox' ? project.link : undefined
  return (
    <div className="pj-links">
      {game && (
        <a className="btn btn-primary" href={game} target="_blank" rel="noopener noreferrer">
          <Gamepad2 size={16} aria-hidden="true" /> Play on Roblox
          <span className="pj-sr"> (opens in a new tab)</span>
        </a>
      )}
      {project.demo && (
        <a className="btn btn-primary" href={project.demo} target="_blank" rel="noopener noreferrer">
          <ExternalLink size={16} aria-hidden="true" /> Live demo
          <span className="pj-sr"> (opens in a new tab)</span>
        </a>
      )}
      {repo && (
        <a className="btn btn-ghost" href={repo} target="_blank" rel="noopener noreferrer">
          <Code2 size={16} aria-hidden="true" /> GitHub
          <span className="pj-sr"> (opens in a new tab)</span>
        </a>
      )}
    </div>
  )
}

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: (p: Project) => void
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className="card pj-card"
    >
      <button
        type="button"
        className="pj-media"
        onClick={() => onOpen(project)}
        aria-label={`View details for ${project.name}`}
      >
        <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" />
        <span className={`pj-badge pj-badge-${project.category}`}>
          {categoryLabel[project.category]}
        </span>
      </button>
      <div className="pj-body">
        <h3>
          <button type="button" className="pj-title" onClick={() => onOpen(project)}>
            {project.name}
          </button>
        </h3>
        <p>{project.description}</p>
        <ul className="pj-tags" aria-label="Technologies">
          {project.tags.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
        <ProjectLinks project={project} />
      </div>
    </motion.article>
  )
}
