import React from 'react'

const OrganismInfoCard = ({ selectedSpecies, handleClick, addToFavorites, currentUser }) => {

    return(
        <div>
            {selectedSpecies.Species.Image ? (selectedSpecies.Species.Image.URL ? <img src={selectedSpecies.Species.Image.URL} alt={selectedSpecies.Species.Image.Title}/> : selectedSpecies.Species.Image.map(image => <img key={image.URL} src={image.URL} alt={image.Title}/>)) : <h2>Sorry! No Image Available</h2>}
            <h1>{selectedSpecies.Species.ScientificName}: Commonly known as the {selectedSpecies.Species.AcceptedCommonName}</h1>
            <h2>{selectedSpecies.Species.ClassCommonName}</h2>
            <h2>{selectedSpecies.Species.ClassName}</h2>
            {currentUser ? <button onClick={() => addToFavorites(selectedSpecies)}>Add To Favorites</button> : <h4>Sign up to add organism to favorites!</h4> }
                   
            <button onClick={handleClick}>Return to Search Results</button>
        </div>
    )
}

export default OrganismInfoCard