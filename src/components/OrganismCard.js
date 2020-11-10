import React from 'react'

const OrganismCard = ({ organism }) => {
    console.log(organism)
    return(
        <div className="organism-card">
            <h1>{organism.AcceptedCommonName}</h1>
            <h4>{organism.ScientificName}</h4>
            <h2>{organism.ClassName}</h2>
            <h2>{organism.KingdomName}</h2>
        </div>
    )
}

export default OrganismCard