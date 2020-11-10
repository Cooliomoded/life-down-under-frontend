import React, { Component } from 'react'

class SearchBar extends Component {

    state = {
        filter: null
    }

    render() {
        const { handleSearchSubmit } = this.props
        return(
            <div>
                <div>
                    <form onSubmit={handleSearchSubmit}>
                        <input type="radio" id="animal" name="kingdom" value="animals"></input>
                        <label htmlFor="animal">Animal</label>
                        <input type="radio" id="plant" name="kingdom" value="plants"></input>
                        <label htmlFor="plant">Plant</label>
                        <input type="radio" id="fungi" name="kingdom" value="fungi"></input>
                        <label htmlFor="fungi">Fungi</label>
                        <input type="radio" id="bacteria" name="kingdom" value="bacteria"></input>
                        <label htmlFor="bacteria">Bacteria</label>
                        <input type="radio" id="protists" name="kingdom" value="protists"></input>
                        <label htmlFor="protists">Protists</label>
                        <input type="radio" id="protozoans" name="kingdom" value="protozoans"></input>
                        <label htmlFor="protozoans">Protozoans</label>
                        <input type="text" id="animal-search" name="animal"></input>
                        <input type="submit" id="animal-search-submit" name="animal-search-submit"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchBar