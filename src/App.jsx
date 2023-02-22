import { useContext } from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import Cursor from "./components/Cursor"
import Header from "./components/Header"
import MenuFlotante from "./components/MenuFlotante"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import { CursorContext } from "./context/CursorContext"
function App() {
  const {mouseEnterSections, mouseLeaveSections} = useContext(CursorContext)

  return (
    <div className="bg-hero-pattern">
      <Cursor />
      <Header  />

      <div className="" onMouseEnter={mouseEnterSections} onMouseLeave={mouseLeaveSections}>
        <MenuFlotante />
        <About />
        <Skills/>
        <Projects/> 
        <Contact/>
      </div>

    </div>
  )
}

export default App
