import { useState } from "react"
import About from "./components/About"
import Cursor from "./components/Cursor"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  const [hover, setHover] = useState('default')
  const [hoverLarge, setHoverLarge] = useState('default')

  const mouseEnterSections = () => {
    setHoverLarge('sections');
    setHover('sections');
  };
  const mouseLeaveSections = () => {
    setHoverLarge('default');
    setHover('default');
  };

  return (
    <div className=" h-screen">
      <Cursor hover={hover} hoverLarge={hoverLarge}/>
      <Header setHover={setHover} mouseEnterGradient={mouseEnterSections} mouseLeaveGradient={mouseLeaveSections} />

      <div className="bg-gris-oscuro" onMouseEnter={mouseEnterSections} onMouseLeave={mouseLeaveSections}>
        <About/>
        <Skills/>
        <Projects/>
      </div>

    </div>
  )
}

export default App
