import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5) // the useState hook, changes the value wherever its being used.
  let [msg, setMsg] = useState("")


  const addValue = () => {
    if(counter < 10){
      setCounter(prevCounter => prevCounter +1);  
      setCounter(prevCounter => prevCounter +1);
      setCounter(prevCounter => prevCounter +1);
      setMsg("")
    }else{
      setMsg("Maximum value reached")
    }
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1);  
    }else{
      setMsg("Minimum value reached")
    }
  }


  return (
    <>
      <h1>Sammy learning react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue} >Add Value {counter}</button>
      <br /><br />
      <button onClick={removeValue}>Remove Value {counter}</button>

      {msg && <p>{msg}</p>}
     
    </>
  )
}

export default App
