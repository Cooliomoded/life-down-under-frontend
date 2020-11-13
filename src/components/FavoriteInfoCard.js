import React from 'react'

const FavoriteInfoCard = ({ favorite, handleClick }) => {
    
    function titleCase(str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        return splitStr.join(' '); 
    }

    console.log(favorite.img)
    return(
        <div onClick={() => handleClick(favorite)} className="orgCard minOrgCard maxOrgCard">
            <h2>{titleCase(favorite.name)}</h2>
            {favorite.img ? <img height="308" width="400" src={favorite.img}/> : 
            <div>
                <img height="250" width="400" src={process.env.PUBLIC_URL + '/images/steve1.png'}></img>
                <h3>Sorry! No Image Available</h3>
            </div>
            }
        </div>
    )
}

export default FavoriteInfoCard