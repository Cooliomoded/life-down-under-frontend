import React, { Component } from 'react';
import './App.css';
import LogIn from './components/LogIn'
import SearchBar from './components/SearchBar'
import OrganismContainer from './components/OrganismContainer'

class App extends Component {

  state = {
    speciesSearch: [],
    selectedSpecies: null
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
        .then(organisms => this.setState({
          speciesSearch: organisms.Species
        }))
  }

  displayOrganism = (organism) => {
    fetch("http://localhost:3000/search_by_taxonID", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            taxonID: organism.TaxonID
        })
        })
        .then(res => res.json())
        .then(organism => this.setState({
          selectedSpecies: organism
        }))
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <LogIn />
        <SearchBar handleSearchSubmit={this.handleSearchSubmit}/>
        <OrganismContainer speciesSearch={this.state.speciesSearch} handleClick={this.displayOrganism}/>
      </div>
    );
  }
}

export default App;
