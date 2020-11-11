import React from 'react'

const DisplayUser = ( {user, handleLogout, showProfile} ) => {

    console.log(user)
    return(
        <div>
            <h1>Logged In As: {user.username}</h1>
            <button onClick={handleLogout}>Log Out</button>
            <button onClick={showProfile}>Show User Profile</button>
        </div>
    )
}

export default DisplayUser