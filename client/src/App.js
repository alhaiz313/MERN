import React, { Fragment, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import setAuthToken from './utils/setAuthToken';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import Routes from './components/routing/Routes';

if (localStorage.token) {
  //set the header with token if there is one
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    // like componentDidMount in class Components
    store.dispatch(loadUser());
  }, []); //to make it only runs when mounted

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
