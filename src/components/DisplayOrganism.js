import React from 'react'
import OrganismInfoCard from './OrganismInfoCard'

const DisplayOrganism = ({ selectedSpecies, handleClick, addToFavorites }) => {
    return(
        <div className='displayOrgContainer'>
            <OrganismInfoCard selectedSpecies={selectedSpecies} handleClick={handleClick} addToFavorites={addToFavorites}/>
        </div>
    )

}

export default DisplayOrganism