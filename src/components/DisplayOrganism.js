import React from 'react'
import OrganismInfoCard from './OrganismInfoCard'

const DisplayOrganism = ({ selectedSpecies }) => {

    return(
        <div className='displayOrgContainer'>
            <OrganismInfoCard selectedSpecies={selectedSpecies} />
        </div>
    )

}

export default DisplayOrganism