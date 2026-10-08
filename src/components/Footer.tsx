import { profile } from '../data/profile'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <nav aria-label="Footer" className="footer-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.cvUrl} download>CV</a>
          <a href="#top">Back to top</a>
        </nav>
      </div>
    </footer>
  )
}
