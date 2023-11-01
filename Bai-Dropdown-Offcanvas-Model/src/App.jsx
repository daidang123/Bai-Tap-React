import { useState } from 'react'
import './App.css'
import MenuMain from './DropDown/MenuMain'
import Modal from './Modal/Modal'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='container'>
    <MenuMain/>
    <Modal/>

   </div>
  )
}

export default App
