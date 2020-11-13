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
            {selectedSpecies.Species.Image ? (selectedSpecies.Species.Image.URL ? <img src={selectedSpecies.Species.Image.URL} height="400" width="400" alt={selectedSpecies.Species.Image.Title}/> : selectedSpecies.Species.Image.map(image => <img key={image.URL} height="400" width="400" src={image.URL} alt={image.Title}/>)) :
            <div>
            <img height="300" width="400" src={process.env.PUBLIC_URL + '/images/steve1.png'} alt="No Organism Pic Available"></img>
            <h3>Sorry! No Image Available</h3>
            </div>
            }
            <div className="orgInfo">
            <h1><u>{titleCase(selectedSpecies.Species.AcceptedCommonName)}</u></h1>
            <h3><i>{selectedSpecies.Species.ScientificName}</i></h3>
            <h2>Class Name: {selectedSpecies.Species.ClassName}</h2>
            <h2>Common Class Name: {titleCase(selectedSpecies.Species.ClassCommonName)}</h2>
            <h2>Family Name: {selectedSpecies.Species.FamilyName}</h2>
            <h2>Common Family Name: {selectedSpecies.Species.FamilyCommonName}</h2>
            <h2>Environment: {selectedSpecies.Species.SpeciesEnvironment}</h2>
            {selectedSpecies.Species.Endemicity === "N" ? <h3>Species is native to Australia</h3> : <h3>Species is not native to Australia</h3>}
            </div>   
            {currentUser ? <button className='favorite-button' onClick={() => addToFavorites(selectedSpecies)}>Add To Favorites</button> : <h4>Sign up to add organism to favorites!</h4> }
            {selectedSpecies.Species.Profile ? <p>{Object.values(selectedSpecies.Species.Profile)}</p> : null}    
            <button onClick={handleClick}>Return to Search Results</button><br></br><br></br><br></br>

        </div>
    )
}

export default OrganismInfoCard