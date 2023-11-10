import { useState } from 'react'

import './App.css'
import PlayerProvider from './features/context/PlayerProvider'
import Player from './features/player/Player'
import PlayList from './features/playList/PlayList'

function App() {
  const [count, setCount] = useState(0)

  return (

   <PlayerProvider>

    <PlayList/>
    <Player/>


   </PlayerProvider>
   



  )
}

export default App
