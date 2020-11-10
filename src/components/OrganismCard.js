import React from 'react'

const OrganismCard = ({ organism, handleClick }) => {
    return(
        <div onClick={() => handleClick(organism)} className="orgCard minOrgCard maxOrgCard">
            <h3>{organism.AcceptedCommonName}</h3>
            <h5>{organism.ScientificName}</h5>
            <h4>{organism.ClassName}</h4>
            <h4>{organism.KingdomName}</h4>
        </div>
    )
}

export default OrganismCard