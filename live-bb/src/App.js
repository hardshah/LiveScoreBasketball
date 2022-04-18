import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GetGames from './components/games';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'
           component={GetGames}></Route>
        </Switch>
      </Router>  
    </div> 
  );
} 

export default App;  
