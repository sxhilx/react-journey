import React from 'react'
import { useParams } from 'react-router-dom'



const User = () => {
const {userid} = useParams()
  return (
    <div className='text-center bg-slate-400 p-4 rounded '>User: {userid}</div>
  )
}

export default User