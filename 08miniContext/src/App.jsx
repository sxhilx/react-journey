import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import Posts from './components/Posts'


function App() {

  return (
    <UserContextProvider>
      <h1>Sammy learning react</h1>
      <Login />
      <Posts />
      <Profile />

    </UserContextProvider>
  )
}

export default App
