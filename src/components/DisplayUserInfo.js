import React from 'react'

const DisplayUserInfo = ( {user} ) => {

    return(
        <div>
            <h1>{user.username}</h1>
            <h3>{user.bio}</h3>
            <img src={user.profile_pic}></img>
        </div>
    )
}

export default DisplayUserInfo