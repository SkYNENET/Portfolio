import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Projects from './sections/Projects'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
