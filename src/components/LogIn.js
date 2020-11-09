import React, { Component } from 'react'

class LogIn extends Component {

    render() {
        return(
            <div>
                <form>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username"></input>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password"></input>
                    <input type="submit" id="login-submit" name="login-submit"></input>
                </form>
            </div>
        )
    }
}

export default LogIn