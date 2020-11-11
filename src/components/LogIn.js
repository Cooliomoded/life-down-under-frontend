import React from 'react'

const LogIn = ( { handleLogin, handleSignUp } ) => {
    
    return(
        <div>
            <form onSubmit={handleLogin}>
                <h2>Log In:</h2>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username"></input><br></br>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password"></input>
                <input type="submit" id="login-submit" name="login-submit"></input><br></br>
                <button onClick={handleSignUp}>Not a User? Sign Up!</button>

            </form>
        </div>
    )
}
export default LogIn