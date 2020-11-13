import React from 'react'

const DisplayUserInfo = ( {user, displayEditPage, deleteUser} ) => {

    return(
        <div className="userProfile">
            {/* <p>{console.log(user.favorites)</p> */}
            <h1>{user.username}</h1>
            {user.profile_pic == "" ? <img height="300" width="300" src={process.env.PUBLIC_URL + '/images/default_profile.jpg'}/> : <img src={user.profile_pic}></img>}
            <h3>Bio: {user.bio}</h3>
            <h4>Location: {user.location}</h4>
            <button onClick={displayEditPage}>Edit Profile</button>
            <button onClick={deleteUser}>Delete User Profile</button><br></br><br></br>
        </div>
    )
}

export default DisplayUserInfo