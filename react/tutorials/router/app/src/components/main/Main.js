import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../../pages/home/Home';
import About from '../../pages/about/About';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
    </Switch>
);
}
}
export default Main;
