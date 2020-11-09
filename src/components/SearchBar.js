import React, { Component } from 'react'

class SearchBar extends Component {

    state = {
        filter: null
    }

    handleSearchSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.kingdom.value, event.target.animal[1].value)
            fetch("http://localhost:3000/search_by_species", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                kingdom: event.target.kingdom.value,
                animal: event.target.animal[1].value
            })
            })
            .then(res => res.json())
            .then(data => console.log(data))

    }

    render() {
        return(
            <div>
                <div>
                    <form onSubmit={this.handleSearchSubmit}>
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