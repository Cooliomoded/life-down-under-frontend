import React, { Component } from 'react'

class SearchBar extends Component {

    state = {
        filter: null
    }

    render() {
        const { handleSearchSubmit } = this.props
        return(
            <div>
                <div className='search-bar'>
                    <h3>Search For Australian Wildlife</h3>
                    <form onSubmit={handleSearchSubmit}>
                        <input type="radio" id="bacteria" name="kingdom" value="bacteria" checked></input>
                        <label htmlFor="bacteria">Bacteria</label>
                        <input type="radio" id="protists" name="kingdom" value="protists" checked></input>
                        <label htmlFor="protists">Protists</label>
                        <input type="radio" id="protozoans" name="kingdom" value="protozoans" checked></input>
                        <label htmlFor="protozoans">Protozoans</label>
                        <input type="radio" id="fungi" name="kingdom" value="fungi" checked></input>
                        <label htmlFor="fungi">Fungi</label>
                        <input type="radio" id="plant" name="kingdom" value="plants" checked></input>
                        <label htmlFor="plant">Plant</label>
                        <input type="radio" id="animal" name="kingdom" value="animals" checked></input>
                        <label htmlFor="animal">Animal</label><br></br><br></br>
                        <input type="text" id="animal-search" name="animal" placeholder="Search a Species" required></input>
                        <input type="submit" id="animal-search-submit" name="animal-search-submit"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchBar