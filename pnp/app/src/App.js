import React, { Component } from 'react';
import './App.css';
import Landing from './pages/sharer/Landing';
import Dashboard from './pages/sharer/Dashboard';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from "./store";
import { Provider } from "react-redux";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Landing}/>
            <Route path='/dashboard' exact={true} component={Dashboard}/>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;