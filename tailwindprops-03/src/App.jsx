import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-100 text-black p-4 rounded-xl mb-4'>Sammy react with tailwind</h1>
      
      <Card username="shreck" btnTxt="click me"/>
      <Card username="Shreck Sammy"/>
    </>
  )
}

export default App
