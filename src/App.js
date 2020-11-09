import logo from './logo.svg';
import './App.css';
import LogIn from './components/LogIn'
import SearchBar from './components/SearchBar'
import MainBody from './components/MainBody'

function App() {
  return (
    <div className="App">
      <LogIn />
      <SearchBar />
      <MainBody />
    </div>
  );
}

export default App;
