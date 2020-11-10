import React from 'react'

const OrganismInfoCard = ({ selectedSpecies }) => {
    
    return(
        <div>
            <img src={selectedSpecies.Species.Image.URL}></img>
            <h1>{selectedSpecies.Species.ScientificName}: Commonly known as the {selectedSpecies.Species.AcceptedCommonName}</h1>
            <h2>{selectedSpecies.Species.ClassCommonName}</h2>
            <h2>{selectedSpecies.Species.ClassName}</h2>
            {console.log(selectedSpecies.Species.Image.URL)}
        </div>
    )
}

export default OrganismInfoCard