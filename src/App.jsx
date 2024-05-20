import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CloseView from './components/closed view/CloseView'
import FabButton from './components/fab button/FabButton'
import Issue from './components/report an issue/Issue'
import Suggesion from './components/give suggestion/Suggesion'
import Feedback from './components/share feedback/Feedback'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <CloseView/> */}
    <div id="hero">
    {/* <Issue/> */}
    <Feedback/>
    {/* <Suggesion/> */}
    </div>
    
    </>
  )
}

export default App
