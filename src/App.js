import React, { Component } from 'react';
import Leyout from './styled/Leyout/Leyout';
import LoginSection from './components/LoginSection/LoginSection';
import NavBar from './components//NavBar'
import Add from './components/Add'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Context } from './store/Context';

class App extends Component {


  render() {

    return (
      <Leyout>
        <Router>
          <Context>
            <Route path='/' exact component={LoginSection} />
            <Route path='/account'  component={NavBar} />
            <Route path='/account/add' exact  component={Add}/>
            
          </Context>
        </Router>
      </Leyout>);
  }
}





export default App;
