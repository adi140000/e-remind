import React, { Component } from 'react';
import Leyout from './styled/Leyout/Leyout';
import LoginSection from './components/LoginSection/LoginSection';
import Account from './components/Account/Account';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Context } from './store/Context';

class App extends Component {


  render() {

    return (
      <Leyout>
        <Router>
          <Context>
            <Route path='/' exact component={LoginSection} />
            <Route path='/account' exact component={Account} />
          </Context>
        </Router>
      </Leyout>);
  }
}





export default App;
