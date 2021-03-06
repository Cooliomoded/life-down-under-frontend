import React from 'react';
import FavoriteInfoCard from './FavoriteInfoCard';

const FavoriteContainer = ({ coolAnimals, handleClick }) => {
    return(
        <div className="orgContainer">
            {(coolAnimals.length > 0) ? 
            coolAnimals.map(favorite => <FavoriteInfoCard key={favorite.tag} favorite={favorite} handleClick={handleClick}/>)
            :
            <div className="noFavorites" >
                <img height="400" width="700" src={process.env.PUBLIC_URL + '/images/steve2.png'} alt="No Favorites Message"></img>
            <h3>Oops! No favorite animals... yet...</h3>
            </div>
            }
        </div>
    )
}

export default FavoriteContainer