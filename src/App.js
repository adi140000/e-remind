import React, { Component } from 'react';
import Leyout from './styled/Leyout/Leyout';
import LoginSection from './components/LoginSection/LoginSection';
import Add from './components/Add';
import Dashboard from './components/Dashboard'
import Controler from './components/Controler/Controler'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Context } from './store/Context';

class App extends Component {


  render() {

    return (
      <Leyout>
        <Router>
          <Context>
            <Switch>
              <Route path='/' exact component={LoginSection} />
              <Route path='/account' exact render={() => <Controler>
                <Dashboard />
              </Controler>} />
              <Route path='/account/add'  render={() => <Controler>
                <Add />
              </Controler>} />
            </Switch>
          </Context>
        </Router>
      </Leyout >);
  }
}





export default App;
