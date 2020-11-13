import React from 'react'

const OrganismCard = ({ organism, handleClick }) => {
    
    function titleCase(str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        return splitStr.join(' '); 
    }

    return(
        <div onClick={() => handleClick(organism)} className="orgCard minOrgCard maxOrgCard">
            {organism.AcceptedCommonName ? <h3>{titleCase(organism.AcceptedCommonName)}</h3> : null}
            <h5><i>{organism.ScientificName}</i></h5>
            <h4>{organism.KingdomName}</h4>
            <h4>{organism.ClassName}</h4>
        </div>
    )
}

export default OrganismCard