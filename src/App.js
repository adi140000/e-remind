import React, { Component  } from 'react';
import Leyout from './styled/Leyout/Leyout';
import LoginSection from './components/LoginSection/LoginSection';
import Account from './components/Account/Account';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    doLogin: false,
  }

  render() {
    const { doLogin } = this.state;
    return (
      <Leyout>
        <Router>
          <Route path='/' exact render={() => <LoginSection doLogin={doLogin} />} />     
          <Route path='/account' exact render={() => <Account doLogin={doLogin} />} />   
        </Router>
      </Leyout>);
  }
}





export default App;
