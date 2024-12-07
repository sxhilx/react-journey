import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


const myElement = React.createElement(
  'a',
  {href: 'google.com'},
  "Click ME"
 )

createRoot(document.getElementById('root')).render(
  myElement
)
