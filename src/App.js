import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';
import SearchAsteroidIdDetails from './components/searchAsteroidIdDetails';
import AsteroidIdDetails from './components/asteroidIdDetails';


function App() {
  return (
    <div className="App">
    <Router>
      <SearchAsteroidIdDetails exact path='/' component={SearchAsteroidIdDetails} />
      <AsteroidIdDetails exact path="/asteroid-details" component={AsteroidIdDetails} />
    </Router>
    </div>
  );
}

export default App;
