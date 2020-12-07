import {BrowserRouter as Router , Route, Switch, Link} from 'react-router-dom';
import React, {useState} from 'react';
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import Login from "./components/Login/Login";
import './App.css';

function App() {
    const [token, setToken] = useState();
    if(!token) {
        return <Login setToken={setToken} />
    }
  return (
    <div className="App">
        <h1>Application</h1>
        <Router>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
