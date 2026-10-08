import { useMemo, useState } from 'react'
import { communities, entries, profile, type Kind } from './content'
import './App.css'

type Filter = 'all' | Kind

const NAV: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Home' },
  { id: 'game', label: 'Games' },
  { id: 'map', label: 'Maps' },
  { id: 'web', label: 'Web' },
]

const KIND_LABEL: Record<Kind, string> = { game: 'Game', map: 'Map', web: 'Web' }

const gradient = (tone: [string, string]) =>
  `linear-gradient(145deg, ${tone[0]}, ${tone[1]})`

export default function App() {
  const [filter, setFilter] = useState<Filter>('all')
  const [query, setQuery] = useState('')

  const featured = entries.find((e) => e.featured) ?? entries[0]

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return entries.filter(
      (e) =>
        (filter === 'all' || e.kind === filter) &&
        (!q || `${e.name} ${e.tagline} ${e.meta ?? ''}`.toLowerCase().includes(q)),
    )
  }, [filter, query])

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="me">
          <div className="avatar" aria-hidden>
            {profile.name.charAt(0)}
          </div>
          <div>
            <strong>{profile.name}</strong>
            <span>{profile.role}</span>
          </div>
        </div>

        <nav aria-label="Library">
          {NAV.map((n) => (
            <button
              key={n.id}
              className={filter === n.id ? 'nav-item active' : 'nav-item'}
              onClick={() => setFilter(n.id)}
            >
              {n.label}
              <em>{n.id === 'all' ? entries.length : entries.filter((e) => e.kind === n.id).length}</em>
            </button>
          ))}
        </nav>

        <p className="status">
          <i /> {profile.status}
        </p>
      </aside>

      <main className="main">
        <a className="banner" href={featured.link} target="_blank" rel="noreferrer"
           style={{ background: gradient(featured.tone) }}>
          {featured.cover && <img src={featured.cover} alt="" />}
          <div className="banner-text">
            <span className="chip">Featured {KIND_LABEL[featured.kind]}</span>
            <h1>{featured.name}</h1>
            <p>{featured.tagline}</p>
            <span className="play">{featured.kind === 'web' ? 'Open' : 'Play'}</span>
          </div>
        </a>

        <div className="bar">
          <h2>Library</h2>
          <input
            type="search"
            placeholder="Search"
            aria-label="Search the library"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="grid">
          {visible.map((e) => (
            <a key={e.name} className="tile" href={e.link} target="_blank" rel="noreferrer">
              <div className="cover" style={{ background: gradient(e.tone) }}>
                {e.cover ? <img src={e.cover} alt="" loading="lazy" /> : <b>{e.name}</b>}
                <span className="kind">{KIND_LABEL[e.kind]}</span>
              </div>
              <strong>{e.name}</strong>
              <span>{e.meta ?? e.tagline}</span>
            </a>
          ))}
          {visible.length === 0 && <p className="empty">Nothing here yet.</p>}
        </div>
      </main>

      <aside className="rail">
        <section className="panel">
          <h3>Communities</h3>
          <ul>
            {communities.map((c) => (
              <li key={c.name}>
                <div className="avatar sm" style={{ background: gradient(c.tone) }} aria-hidden>
                  {c.name.charAt(0)}
                </div>
                <div className="grow">
                  <strong>{c.name}</strong>
                  <span>{[c.platform, c.members].filter(Boolean).join(' · ')}</span>
                </div>
                <a className="join" href={c.link} target="_blank" rel="noreferrer">
                  Join
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel">
          <h3>About</h3>
          <p>{profile.bio}</p>
        </section>

        <section className="panel">
          <h3>Contact</h3>
          <p className="links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.cv}>Resume (PDF)</a>
          </p>
        </section>
      </aside>
    </div>
  )
}
