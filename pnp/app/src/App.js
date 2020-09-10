import React, { Component } from 'react';
import './App.css';
import Landing from './pages/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/* import GroupList from './components/GroupList';
import GroupEdit from './components/GroupEdit';
 */
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Landing}/>
          {/* <Route path='/groups' exact={true} component={GroupList}/>
          <Route path='/groups/:id' component={GroupEdit}/>
 */}
        </Switch>
      </Router>
    )
  }
}

export default App;