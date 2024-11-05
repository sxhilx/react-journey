Currency Converter 

How it works:
First of all i created my own hook called useCurrencyInfo which basically fetches the data from an API and returns that data, by creating this hook i learned how to fetch data from an API and even tho the API is in .json format i had to convert the response to .json() by using .then() function. i also use the useEffect hook to re-render the function as soos and the currecy change.

there after i created an InputBox component where i created the inputbox with the input feild and select feild, 
the inputbox box conatins props fro label (from, to), amount (the amount passed by user), onAmountChange  (function that activates on change which basically sets the value of the amount on App.js by using setAmount), onCurrencyChange (same as onAMountChange but for the currency  values), currrencyOptions (an array of options fetched from the useCurrencyInfo hook), and the selectCurrency (currently selected currency from the dropdown)

on input field i used the onChange function which fires a call back function with sets the changed value on the onAmountChange (which then sets the value on setAmount)

on the select field i used the same logic and set the changed currency value to setFrom and setTo setters so that when the user swaps i just have to swap the variables

and to render the currencyOptions the array prop i used .map function to go over the array and return the currency as an option, (the key for .map function is very importatnt for performance by asigning a unique key to every function) 