import React from 'react'

const DisplayUser = ( {user, handleLogout, showProfile, displayUserFavorites} ) => {

    console.log(user)
    return(
        <div>
            <h1>Logged In As: {user.username}</h1>
            <button onClick={handleLogout}>Log Out</button>
            <button onClick={showProfile}>Show User Profile</button>
            <button onClick={displayUserFavorites}>Show Favorites</button>
        </div>
    )
}

export default DisplayUser