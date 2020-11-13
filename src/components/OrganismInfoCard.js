import React from 'react'

const OrganismInfoCard = ({ selectedSpecies, handleClick, addToFavorites, currentUser }) => {
    
    function titleCase(str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        return splitStr.join(' '); 
     }

    return(
        <div>
            {selectedSpecies.Species.Image ? (selectedSpecies.Species.Image.URL ? <img src={selectedSpecies.Species.Image.URL} alt={selectedSpecies.Species.Image.Title}/> : selectedSpecies.Species.Image.map(image => <img key={image.URL} src={image.URL} alt={image.Title}/>)) : <h2>Sorry! No Image Available</h2>}
            <h1>{titleCase(selectedSpecies.Species.AcceptedCommonName)}</h1>
            <h3><i>{selectedSpecies.Species.ScientificName}</i></h3>
            <h2>Class Name: {selectedSpecies.Species.ClassName}</h2>
            <h2>Common Class Name: {titleCase(selectedSpecies.Species.ClassCommonName)}</h2>
            <h2>Environment: {selectedSpecies.Species.SpeciesEnvironment}</h2>
            {selectedSpecies.Species.Endemicity == "N" ? <h3>Species is native to Australia</h3> : <h3>Species is not native to Australia</h3>}
            {currentUser ? <button onClick={() => addToFavorites(selectedSpecies)}>Add To Favorites</button> : <h4>Sign up to add organism to favorites!</h4> }
            {selectedSpecies.Species.Profile ? <p>{Object.values(selectedSpecies.Species.Profile)}</p> : null}       
            <button onClick={handleClick}>Return to Search Results</button>
        </div>
    )
}

export default OrganismInfoCard