import { useState } from 'react'


function App() {
  const [color, setColor] = useState("purple")

  return (
    <div className='w-full h-screen duration-300' style = {{backgroundColor: color}}> 
      <div className='fixed bottom-12 flex justify-center items-center flex-wrap inset-x-0 px-2'>
        <div className='flex flex-wrap gap-5 justify-center bg-white px-4 py-2 rounded-2xl border shadow-lg'>
          <button 
          onClick={() => setColor("red")} // We cannot just set the function on onClick since the onClink function do not want the value being returned by the function it wants the function it-self. Basically the onClick function expects a refrence to the function 
          className='bg-red-500 px-4 py-2 rounded-xl shadow-lg text-white'> 
            Red
          </button>
          <button
          onClick = {() => setColor('green')}
          className='bg-green-500 px-4 py-2 rounded-xl shadow-lg text-white'>
            Green
          </button>
          <button
           onClick = {() => setColor('blue')}
           className='bg-blue-500 px-4 py-2 rounded-xl shadow-lg text-white'>
            Blue
          </button>
          <button
          onClick = {() => setColor('yellow')}
          className='bg-yellow-500 px-4 py-2 rounded-xl shadow-lg'>
            Yellow
          </button>
          <button
          onClick = {() => setColor('gray')}
          className='bg-gray-500 px-4 py-2 rounded-xl shadow-lg'>
            Gray
          </button>
          <button 
          onClick = {() => setColor('orange')}
          className='bg-orange-500 px-4 py-2 rounded-xl shadow-lg text-white'>
            Oragne
          </button>
          <button 
          onClick = {() => setColor('white')}
          className='bg-white px-4 py-2 rounded-xl shadow-lg border '>
            White
          </button>
          <button
          onClick = {() => setColor('black')}
          className='bg-black px-4 py-2 rounded-xl shadow-lg text-white'>
            Black
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
