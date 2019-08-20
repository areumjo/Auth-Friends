import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import SignUp from './components/SignUp';
import Protected from './components/Protected';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>Meet your friends</p>
          <div className="header-right">
            <Link to="/login" className="link">Login</Link>
            <Link to="/signup" className="link">Be my friend</Link>
            <Link to="/protected" className="link">Friends</Link>
          </div>
        </header>
        <p>Auth-friends</p>
        <Route path="/login" render={ props => <Login {...props} /> } />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute exact path="/protected" component={Protected} />
      </div>
    </Router>
  );
}

export default App;
