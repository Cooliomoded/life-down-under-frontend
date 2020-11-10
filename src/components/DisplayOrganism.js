import React from 'react'
import OrganismInfoCard from './OrganismInfoCard'

const DisplayOrganism = ({ selectedSpecies, handleClick }) => {
    {console.log(selectedSpecies)}
    return(
        <div className='displayOrgContainer'>
            <OrganismInfoCard selectedSpecies={selectedSpecies} handleClick={handleClick}/>
        </div>
    )

}

export default DisplayOrganism