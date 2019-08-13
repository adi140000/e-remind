import React, { Component } from 'react';
import Leyout from './styled/Leyout/Leyout';
import LoginSection from './components/LoginSection/LoginSection';
import Add from './components/Add';
import Dashboard from './components/Dashboard'
import Controler from './components/Controler/Controler'
import { BrowserRouter as Router, HashRouter,Redirect, Route, Switch } from "react-router-dom";
import { Context } from './store/Context';

class App extends Component {


  render() {

    return (
      <Leyout>
        <Router basename={process.env.PUBLIC_URL}>
          <Context>
            <Switch>
              <Route path='/' exact component={LoginSection} />
              <Route exact path='/account/' render={()=><Redirect to='/account/dashboard'/>}/>
              <Route exact path='/account/dashboard' render={() => <Controler>
                <Dashboard />
              </Controler>} />
              <Route path='/account/add' render={() => <Controler>
                <Add />
              </Controler>} />
              <Route path='/account/edit' render={() => <Controler>
                <Add />
              </Controler>} />
            </Switch>
          </Context>
        </Router>
      </Leyout >);
  }
}





export default App;
