import React from 'react';
import OrganismCard from './OrganismCard';

const OrganismContainer = ({ speciesSearch, handleClick }) => {
    return(
        <div className="orgContainer">
            {speciesSearch.map(organism => <OrganismCard key={organism.TaxonID} organism={organism} handleClick={handleClick}/>)}
        </div>
    )
}

export default OrganismContainer