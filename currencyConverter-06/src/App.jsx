import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("zar")

  const [convertedAmount, setConvertedAmount] = useState(0)

  let currencyInfo = useCurrencyInfo(from)
  

  const options = Object.keys(currencyInfo)

  

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)    
  }

  const convert = () => {
    const calculatedAmount = amount * currencyInfo[to];
    setConvertedAmount(Math.round(calculatedAmount * 1000)/1000);
  };

  return (
    <>
     <div className='w-full h-screen bg-[#001219] bg-no-repeat bg-cover bg-center flex justify-center items-center'>
      
      <div className='bg-slate-300 max-w-md mx-auto h-auto justify-center items-center rounded-lg shadow-lg p-3'>

        <h1 className='text-2xl text-center font-bold underline py-3'>Currency Converter</h1>

        <form onSubmit={(e) => {
          e.preventDefault();
          convert()
        }}>
        <div className='m-1'>
          <InputBox 
          label="From"
          onAmountChange={(value) => setAmount(value)}
          amount={amount}
          currencyOptions={options}
          selectCurrency={from}
          onCurrencyChange={(currency) => setFrom(currency)} 
          />
        </div>

        <div className='relative w-full h-0.5 bg-blue-300'>
          <button type="button" className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 px-2 py-0.5 bg-blue-500 rounded-lg font-bold hover:bg-blue-600 shadow-lg duration-200'
          onClick={swap}>
            swap
          </button>
        </div>

        <div className='m-1'>
          <InputBox 
           label="To"
           amount={convertedAmount}
           currencyOptions={options}
           selectCurrency={to}
           onCurrencyChange={(currency)=>{
            setTo(currency)
           }} 
          
          />
        </div>

        <div className='w-full mt-6'>
          <button type="submit" className='bg-blue-500 w-full p-3 rounded shadow-lg font-bold hover:bg-blue-600  duration-200'>
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </div>
        </form>
      </div>
      </div>
      
    </>
  )
}

export default App
