import React from 'react'
import OrganismInfoCard from './OrganismInfoCard'

const DisplayOrganism = ({ selectedSpecies, handleClick }) => {
    return(
        <div className='displayOrgContainer'>
            <OrganismInfoCard selectedSpecies={selectedSpecies} handleClick={handleClick}/>
        </div>
    )

}

export default DisplayOrganism