import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Protected from './components/Protected'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>Meet your friends</p>
          <Link to="/login">Login</Link>
          <Link to="/protected">Say hello</Link>
        </header>
        <p>Auth-friends</p>
        <Route path="/login" component={Login} />
        <Route exact path="/protected" component={Protected} />
      </div>
    </Router>
  );
}

export default App;
