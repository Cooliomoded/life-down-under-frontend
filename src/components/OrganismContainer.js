import React from 'react';
import OrganismCard from './OrganismCard';

const OrganismContainer = ({ speciesSearch }) => {
    return(
        <div>
            {speciesSearch.map(organism => <OrganismCard key={organism.TaxonID} organism={organism} />)}
        </div>
    )
}

export default OrganismContainer