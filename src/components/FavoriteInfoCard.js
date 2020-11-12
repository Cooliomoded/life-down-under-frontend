import React from 'react'

const FavoriteInfoCard = ({ favorite, handleClick }) => {
    
    return(
        <div onClick={() => handleClick(favorite)}>
            <h2>{favorite.name}</h2>
            {favorite.img ? <img src={favorite.img} alt={favorite.name}/> : <h3>Sorry! No Image Available</h3>}
        </div>
    )
}

export default FavoriteInfoCard