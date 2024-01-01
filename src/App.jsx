import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Components/Home'
import AudioPlayer from './Components/AudioPlayer'
import GamePlay from './Components/GamePlay'

function App() {
  const [isGameStarted,setisGameStarted] = useState(false);

  const toggleGamePlay=()=>{
    setisGameStarted((prev)=>!prev);
  }

  return (
    <>
      {
        isGameStarted ? <GamePlay toggle={toggleGamePlay}/> : <Home toggle={toggleGamePlay}/>
      }
      
      

    </>
  )
}

export default App
