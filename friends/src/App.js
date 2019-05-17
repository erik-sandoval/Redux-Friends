import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import FriendsList from './components/FriendsList';
import PrivateRoute from './PrivateRoute'
import AddFriendForm from './components/AddFriendForm'

function App() {
  return (
    <div className="App">
      <Router>
        <Link to='/login'>Login</Link>
        <Link to='/friends'>Friends</Link>
        <Link to='/add-friend'>Add Friend</Link>
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/friends' component={FriendsList} />
        <PrivateRoute exact path='/add-friend' component={AddFriendForm} />
      </Router>
    </div>
  );
}

export default App;
