import React from 'react'

const UserEditPage = ( {user, editProfile} ) => {

    return(
        <div className='login'>
            <form onSubmit={editProfile}>
            <h2>Edit {user.username}:</h2>
                <label htmlFor="bio">Bio:</label>
                <input type="bio" id="bio" name="bio" defaultValue={user.bio} required></input><br></br>
                <label htmlFor="location">Location:</label>
                <input type="location" id="location" name="location" defaultValue={user.location} ></input><br></br>
                <label htmlFor="profile_pic">Profile Pic URL:</label>
                <input type="profile_pic" id="profile_pic" name="profile_pic" defaultValue={user.profile_pic} ></input><br></br>
                

                <input type="submit" id="login-submit" name="login-submit"></input><br></br>
            </form>
        </div>
    )
}

export default UserEditPage