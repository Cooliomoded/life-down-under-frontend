import React from 'react';
import FavoriteInfoCard from './FavoriteInfoCard';

const FavoriteContainer = ({ coolAnimals, handleClick }) => {
    return(
        <div className="favContainer">
            {coolAnimals.map(favorite => <FavoriteInfoCard key={favorite.tag} favorite={favorite} handleClick={handleClick}/>)}
        </div>
    )
}

export default FavoriteContainer