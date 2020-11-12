import React from 'react'
import OrganismInfoCard from './OrganismInfoCard'

const DisplayOrganism = ({ selectedSpecies, handleClick, addToFavorites }) => {
    debugger
    return(
        <div className='displayOrgContainer'>
            <OrganismInfoCard selectedSpecies={selectedSpecies} handleClick={handleClick} addToFavorites={addToFavorites} />
        </div>
    )

}

export default DisplayOrganism