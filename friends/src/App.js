import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import FriendsList from './components/FriendsList';
import PrivateRoute from './PrivateRoute'
function App() {
  return (
    <div className="App">
      <Router>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/friends'>Friends</Link>
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/friends' component={FriendsList} />
      </Router>
    </div>
  );
}

export default App;
