import React from 'react'
import OrganismInfoCard from './OrganismInfoCard'

const DisplayOrganism = ({ selectedSpecies, handleClick, addToFavorites, currentUser }) => {
    return(
        <div className='displayOrgContainer'>
            <OrganismInfoCard selectedSpecies={selectedSpecies} handleClick={handleClick} addToFavorites={addToFavorites} currentUser={currentUser}/>
        </div>
    )

}

export default DisplayOrganism