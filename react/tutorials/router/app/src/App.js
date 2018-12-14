import React, { Component } from 'react';

import './App.css';
import Nav from './components/nav/Nav';
import Main from './components/main/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Main/>
      </div>
    );
  }
}
export default App;
