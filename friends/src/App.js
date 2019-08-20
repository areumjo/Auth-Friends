import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>make-a-room</p>
          <Link to="/login">Login</Link>
          <Link to="/protected">Protected Page</Link>
        </header>
        <p>Welcome to make-a-room</p>
        <Route path="/login" component={Login} />
        <Route exact path="/protected" component={Protected} />
      </div>
    </Router>
  );
}

export default App;
