import { useState, useCallback, useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const [buttonText, setText] = useState("Copy")

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numbersAllowed) str += "0123456789";
    if(charAllowed) str += "!#$%&()*+-/<=>?@[]^_{|}~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);      
    }

    setPassword(pass)

  }, [length, numbersAllowed, charAllowed, setPassword]); 

  const copyPassword = useCallback(() => {
    passwordRef.current?.select(); // (?) means optional select since the value could be null
    window.navigator.clipboard.writeText(password);
    setText("Copied");
  }, [password, buttonText])

  useEffect(() => {
    passwordGenerator();
    setText("Copy");
  }, [length, numbersAllowed, charAllowed, passwordGenerator])

  return (

    <>
      <div className='w-[90%] max-w-lg mx-auto bg-slate-400 shadow-lg rounded-lg px-4 py-2 my-8'>
        <h1 className='text-lg text-center font-bold underline mb-4'> <span className='text-teal-600'>Passwordy</span> - The Password Generator</h1>
          <div className='flex overflow-hidden outline-none mb-2 shawdow rounded-lg'>
              <input 
              type="text"
              value={password}
              className='w-full py-1 px-3 rounded shadow-lg'
              placeholder='Password'
              ref={passwordRef}
              readOnly
               />
               <button 
               onClick={copyPassword}
               className='bg-teal-500 inline px-3 py-1 text-black font-medium font-mono hover:bg-teal-600'>{buttonText}</button>
          </div>
          <div className='flex gap-x-4 overflow-hidden flex-wrap'>
            <div className='flex items-center gap-1'>
              <input 
              type="range"
              min={8}
              defaultValue={8}
              max={50}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
              />
              <label htmlFor="length">Length: {length}</label>
            </div>
            
            <div className='flex items-center gap-1 flex-wrap'>
              <input 
              type="checkbox"
              defaultChecked={numbersAllowed}
              onChange={()=>{
                setNumbersAllowed((prev) => !prev)
              }}
              />
              <label htmlFor="numbers">Numbers</label>          
            </div>

            <div className='flex items-center gap-1 flex-wrap m-2 md:m-0'>
              <input 
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={()=>{
                setCharAllowed((prev) => !prev)
              }}
              />
              <label htmlFor="numbers">Characters</label>          
            </div>

          </div>
          
      </div>
    </>
    
  )
}

export default App
