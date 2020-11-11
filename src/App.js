import React, { Component } from 'react';
import './App.css';
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import SearchBar from './components/SearchBar'
import OrganismContainer from './components/OrganismContainer'
import DisplayOrganism from './components/DisplayOrganism'
import DisplayUser from './components/DisplayUser'
import DisplayUserInfo from './components/DisplayUserInfo'

class App extends Component {

  state = {
    speciesSearch: [],
    selectedSpecies: null,
    currentUser: null,
    displayUser: false,
    displaySignUp: false
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

  handleSignUp = () => {
    this.setState({
      displaySignUp: !this.state.displaySignUp
    })
  }

  submitSignUp = (event) => {
    event.preventDefault()
        fetch("http://localhost:3000/users/signup", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: event.target[0].value,
            password: event.target[1].value,
            profile_pic: event.target[2].value,
            bio: event.target[3].value,
            location: event.target[4].value   
        })
        })
        .then(res => res.json())
        .then(data => console.log(data))
  }

  showProfile = () => {
    this.setState({
      displayUser: !this.state.displayUser
    })
  }

  render() {
    return (
      <div className="App">

        {this.state.currentUser ? <DisplayUser user={this.state.currentUser} showProfile={this.showProfile}/> : (this.state.displaySignUp ?
        <SignUp submitSignUp={this.submitSignUp} /> : <LogIn handleLogin={this.handleLogin} handleSignUp={this.handleSignUp}/>)}
        
        
        <SearchBar handleSearchSubmit={this.handleSearchSubmit}/>

        {this.state.displayUser ? <DisplayUserInfo user={this.state.currentUser} /> : 
        (this.state.selectedSpecies ?
        <DisplayOrganism selectedSpecies={this.state.selectedSpecies} handleClick={this.clearSelectedSpecies}/>
        : <OrganismContainer speciesSearch={this.state.speciesSearch} handleClick={this.displayOrganism}/>)}
        
      </div>
    );
  }
}

export default App;
