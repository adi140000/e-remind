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
            <Route path='/account/add' exact render={()=>(<Account name='add' />)} />
            <Route path='/account/delete' exact render={() => (<Account name='delete' />)} />
            <Route path='/account/find' exact render={()=>(<Account name='find'/>)} />
          </Context>
        </Router>
      </Leyout>);
  }
}





export default App;
