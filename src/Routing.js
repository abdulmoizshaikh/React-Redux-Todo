import React, { Component } from 'react';
import SignIn from './container/SignIn/SignIn';
import SignUp from './container/SignUp/SignUp';
import Todo from './container/Todo/Todo';
import Error from './components/Error/Error';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import classes from './Routing.css';


class Routing extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Todo} />
            <Route exact path='/' component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Routing;





