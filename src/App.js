import React, { Component } from 'react';
import './App.css';
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import SearchBar from './components/SearchBar'
import OrganismContainer from './components/OrganismContainer'
import FavoriteContainer from './components/FavoriteContainer'
import DisplayOrganism from './components/DisplayOrganism'
import DisplayUser from './components/DisplayUser'
import DisplayUserInfo from './components/DisplayUserInfo'
import UserEditPage from './components/UserEditPage'

class App extends Component {

  state = {
    speciesSearch: [],
    selectedSpecies: null,
    currentUser: null,
    currentUserFavorites: [],
    displayUserFavorites: null,
    coolAnimals: [],
    displayUser: false,
    displaySignUp: false,
    displayEditPage: false
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
      currentUser: user,
      currentUserFavorites: user.favorites
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
        .then(organisms => {
          let sortedOrganisms = organisms.Species.sort((a, b) => (a.AcceptedCommonName.toLowerCase() > b.AcceptedCommonName.toLowerCase()) ? 1 : -1)
          this.setState({
          speciesSearch: sortedOrganisms
        })})
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

  displayFavoriteOrganism = (favorite) => {
    fetch("http://localhost:3000/search_by_taxonID", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            taxonID: favorite.tag
        })
        })
        .then(res => res.json())
        .then(organism => this.setState({
          coolAnimals: null,
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
      speciesSearch: [],
      selectedSpecies: null,
      currentUser: null,
      currentUserFavorites: [],
      displayUserFavorites: null,
      displayUser: false,
      displaySignUp: false,
      coolAnimals: [],
      displayEditPage: false
    })
  }

  handleSignUp = () => {
    this.setState({
      displaySignUp: !this.state.displaySignUp
    })
  }

  submitSignUp = (event) => {
    event.preventDefault()
        fetch('http://localhost:3000/users/signup', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
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

  addToFavorites = (organism) => {
    const imgURL = organism.Species.Image ? (organism.Species.Image.URL ?  organism.Species.Image.URL : organism.Species.Image[0].URL) : null
    fetch(`http://localhost:3000/organisms/create_organism`, {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name: organism.Species.AcceptedCommonName,
          img: imgURL,
          tag: organism.Species.TaxonID
      })
      })
      .then(res => res.json())
      .then(organism => this.createFavorite(organism))
    }

  showProfile = () => {
    this.setState({
      displayUser: !this.state.displayUser,
      coolAnimals: [],
      displayEditPage: false
    })
  }

    createFavorite = (organism) => {
      fetch('http://localhost:3000/favorites/create_favorite', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: this.state.currentUser.id,
          organism_id: organism.id
        })
      })
      .then(res => res.json())
      .then(favorite => {if(!this.state.currentUserFavorites.find(favorite => favorite.organism_id === organism.id)) {
        this.setState({
        currentUserFavorites: [...this.state.currentUserFavorites, favorite]
      })}})
    }

  displayUserFavorites = () => {
    this.setState({
      speciesSearch: [],
      selectedSpecies: null,
      displayUserFavorites: !this.state.displayUserFavorites
    })
    this.fetchFavorites()
  }

  fetchFavorites = () => {
    this.state.currentUserFavorites.map(favorite => (
      fetch(`http://localhost:3000/organisms/${favorite.organism_id}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        })
        .then(res => res.json())
        .then(favorite => this.setState({
          coolAnimals: [...this.state.coolAnimals, favorite]
        }))
    ))
  }

  displayEditPage = () => {
    this.setState ({
      displayEditPage: !this.state.displayEditPage,
      speciesSearch: [],
      selectedSpecies: null,
      displayUserFavorites: null,
      displayUser: false,
      displaySignUp: false,
    })
  }

  editProfile = (event) => {
    event.preventDefault()
    fetch(`http://localhost:3000/users/${this.state.currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        profile_pic: event.target.profile_pic.value,
        bio: event.target.bio.value,  
        location: event.target.location.value
      })
    })
    .then(res => res.json())
    .then(user => this.setState({
      currentUser: user,
      displayEditPage: !this.state.displayEditPage,
      displayUser: true
    }))
  }
  
  render() {
    console.log(this.state)
    return (
      <div className="App">

        {this.state.currentUser ? <DisplayUser user={this.state.currentUser} handleLogout={this.handleLogout} displayUserFavorites={this.displayUserFavorites} showProfile={this.showProfile} /> : (this.state.displaySignUp ?
        <SignUp submitSignUp={this.submitSignUp} /> : <LogIn handleLogin={this.handleLogin} handleSignUp={this.handleSignUp}/>)}
        
        <SearchBar handleSearchSubmit={this.handleSearchSubmit}/>
        {this.state.coolAnimals ? <FavoriteContainer coolAnimals={this.state.coolAnimals} handleClick={this.displayFavoriteOrganism}/> : null}
        {this.state.displayEditPage ? <UserEditPage user={this.state.currentUser} editProfile={this.editProfile}/> : null}
        {this.state.displayUser ? <DisplayUserInfo user={this.state.currentUser} displayEditPage={this.displayEditPage}/> : 
        (this.state.selectedSpecies ?
        <DisplayOrganism selectedSpecies={this.state.selectedSpecies} handleClick={this.clearSelectedSpecies} addToFavorites={this.addToFavorites} currentUser={this.state.currentUser}/>
        : <OrganismContainer speciesSearch={this.state.speciesSearch} handleClick={this.displayOrganism} displayUserFavorites={this.displayUserFavorites}/>)}
        
      </div>
    )
  }
}

export default App;
