import React from 'react'

const DisplayUserInfo = ( {user, displayEditPage} ) => {

    return(
        <div>
            {/* <p>{console.log(user.favorites)</p> */}
            <h1>{user.username}</h1>
            <h3>Bio: {user.bio}</h3>
            <img src={user.profile_pic}></img>
            <h3>Location: {user.location}</h3>
            <button onClick={() => displayEditPage(user)}>Edit Profile</button>
        </div>
    )
}

export default DisplayUserInfo