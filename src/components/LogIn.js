import React from 'react'

const LogIn = ( { handleLogin, handleSignUp } ) => {
    
    return(
        <div className="login">
            <form onSubmit={handleLogin}>
                <h3>Log In:</h3>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required></input><br></br>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required></input><br></br><br></br>
                <input type="submit" id="login-submit" name="login-submit"></input>
                <button onClick={handleSignUp}>Not a User? Sign Up!</button>
            </form>
        </div>
    )
}
export default LogIn