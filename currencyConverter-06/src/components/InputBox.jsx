import React from 'react'

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
}) => {


  return (

    <div className='flex max-w-lg mx-auto bg-slate-100 shadow-lg p-3 justify-between rounded'>
        <div className='flex flex-col w-1/2'>
            <label htmlFor="amount" className='mb-4 text-gray-600 px-1'> {label} </label>
            <input type="number" id="amount" className='outline-none bg-slate-100 px-1 text-2xl text-gray-500 appearance-none' placeholder='amount'
            value={amount}
            onChange={(event) => {
                const value = Number(event.target.value); 
                onAmountChange && onAmountChange(value); 
            }}/>

        </div>
        <div className='flex flex-col w-1/4'>
            <label htmlFor="currency" className='mb-4 text-gray-600 px-1 text-right'> Currency </label>
            <select
            id="currency"
            value={selectCurrency}
            className='outline-none bg-slate-100 p-1 text-lg text-gray-500 border rounded-lg shadow-md text-right'
            onChange={(e) => {
                onCurrencyChange && onCurrencyChange(e.target.value)
            }}
            >

            {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
            ))}

            </select>
        </div>
    </div>
  )
}

export default InputBox