import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'


const Profile = () => {
    const {user} = useContext(UserContext)
    
    if(!user) return <div>"Please Login"</div>

    return <div>
        Welcome {user.username} : Posts : {user.posts ? user.posts : "No Posts"}        
        </div>
}

export default Profile