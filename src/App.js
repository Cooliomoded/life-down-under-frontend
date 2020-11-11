import React, { Component } from 'react';
import './App.css';
import LogIn from './components/LogIn'
import SearchBar from './components/SearchBar'
import OrganismContainer from './components/OrganismContainer'
import DisplayOrganism from './components/DisplayOrganism'
import DisplayUser from './components/DisplayUser'

class App extends Component {

  state = {
    speciesSearch: [],
    selectedSpecies: null,
    currentUser: null,
    displayUser: false
  }

  handleLogin = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: event.target.username.value
        // bio: event.target.bio.value
      })
    })
    .then(res => res.json())
    .then(user => this.setState({
      currentUser: user
    }))
  }
  
  handleSearchSubmit = (event) => {
    event.preventDefault()
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

  clearSelectedSpecies = () => {
    this.setState({
      selectedSpecies: null
    })
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
  }

  showProfile = () => {
    this.setState({
      displayUser: !this.state.displayUser
    })
  }

  render() {
    console.log(this.selectedSpecies)
    return (
      <div className="App">

        {!this.state.currentUser ? <LogIn handleLogin={this.handleLogin}/> : null}

        {this.state.currentUser ? <DisplayUser user={this.state.currentUser} /> : null}

        <SearchBar handleSearchSubmit={this.handleSearchSubmit}/>

        {this.state.selectedSpecies ?
        <DisplayOrganism selectedSpecies={this.state.selectedSpecies} handleClick={this.clearSelectedSpecies}/>
        : <OrganismContainer speciesSearch={this.state.speciesSearch} handleClick={this.displayOrganism}/>}
        
      </div>
    );
  }
}

export default App;
