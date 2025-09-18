import About from './layout/about'
import Projects from './layout/projects'
import Navbar from './layout/navbar'
import Footer from './layout/footer'
import Marquee from './components/ui/marquee'

function App() {

  const skills = ["React", "React Native", "Pytest", "Git", "Flutter", "Go", "Python", "Javascript", "Typescript", "SQL", "WebdriverIO", "Mockserver", "Cypress", "Docker"]

  return (
    <div className='p-6'>
      <Navbar />
      <Marquee items={skills} />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
