import React, {useEffect} from 'react';
import './App.css';

import { Provider } from 'react-redux'
import store from './store';

import { loadUser } from './actions/auth'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/common/Header';
import PrivateRoute from './components/common/PrivateRoute';
import Dashboard from './components/Dashboard';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  // call the loadUser here
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
          <Header />
            <Switch>
              <PrivateRoute path="/" exact component={Dashboard} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
            </Switch>
      </Router>
    </Provider>
  )
}

export default App;