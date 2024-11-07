import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

const Posts = () => {

    const [posts, setPosts] = useState('')

    const {setUser} = useContext(UserContext)
    const handelSubmit = (e) => {
        e.preventDefault()
        setUser({posts})
    }

  return (
    <div>
        <h1>Create Post</h1>
        <input 
        value={posts}
        onChange={(e) => setPosts(e.target.value)}
        type="text" placeholder='Whats on your mind?' />
        <button onClick={handelSubmit}>Post</button>
    </div>
  )
}

export default Posts