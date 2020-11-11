import React from 'react'

const DisplayUserInfo = ( {user} ) => {

    return(
        <div>
            <h1>{user.name}</h1>
            <h3>{user.bio}</h3>
        </div>
    )
}

export default DisplayUserInfo