import React from 'react'
import OrganismInfoCard from './OrganismInfoCard'

const DisplayOrganism = ({ selectedSpecies, handleClick, addToFavorites, currentUser, coolAnimals }) => {
    return(
        <div className='displayOrgContainer'>
            <OrganismInfoCard selectedSpecies={selectedSpecies} handleClick={handleClick} addToFavorites={addToFavorites} currentUser={currentUser} coolAnimals={coolAnimals}/>
        </div>
    )

}

export default DisplayOrganism