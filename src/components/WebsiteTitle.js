import React from 'react'

const WebsiteTitle = () => {
    return(
        <div className="title">
            <div className="title_image">
                {/* <img src="https://images.vexels.com/media/users/3/162874/isolated/preview/3cf3cc9e28e3f460aee2de8e1d431e8d-australia-illustration-by-vexels.png"></img> */}
                <img height="400" width="400" src={process.env.PUBLIC_URL + '/images/aus_wildlife.png'}></img>
                <div className="title_text">LIFE DOWN UNDER</div>
            </div>
        </div>
    )
}
export default WebsiteTitle