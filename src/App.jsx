import { useState } from "react"
import Cursor from "./components/Cursor"
import Header from "./components/Header"
function App() {
  const [hover, setHover] = useState('default')
  return (
    <div className=" h-screen">
      <Cursor hover={hover}/>
      <Header setHover={setHover}/>
    </div>
  )
}

export default App
