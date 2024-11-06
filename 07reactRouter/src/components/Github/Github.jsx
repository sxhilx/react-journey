import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/user/sxhilx', {
    //         headers: {
    //             Authorization: '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'
    //         }
    //     })
    //     .then((res) => res.json())
    //     .then((data) => setData(data))
    // })

  return (
    <div className='text-center m-4 bg-slate-200 text-black text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="github profile pic" />
    </div>
    
  )
}

export default Github

export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/sxhilx', {
             headers: {
                 Authorization: 'token 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'
             }
    })
   return response.json()
}