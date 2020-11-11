import React from 'react'

const LogIn = ( { handleLogin } ) => {
    
    return(
        <div>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username"></input>
                <label htmlFor="bio">Bio:</label>
                <input type="bio" id="bio" name="bio"></input>
                <input type="submit" id="login-submit" name="login-submit"></input>
            </form>
        </div>
    )
}
export default LogIn