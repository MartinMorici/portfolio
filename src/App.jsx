import { useContext } from "react"
import About from "./components/About"
import Cursor from "./components/Cursor"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import { CursorContext } from "./context/CursorContext"

function App() {
  const {mouseEnterSections, mouseLeaveSections} = useContext(CursorContext)

  return (
    <div className=" h-screen">
      <Cursor />
      <Header  />

      <div className="bg-gris-oscuro" onMouseEnter={mouseEnterSections} onMouseLeave={mouseLeaveSections}>
        <About />
        <Skills/>
        <Projects/> 
      </div>

    </div>
  )
}

export default App
