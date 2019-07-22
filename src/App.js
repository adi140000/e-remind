import React, { Component } from 'react';
import Leyout from './styled/Leyout/Leyout';
import TitleSection from './components/TitleSection/TitleSection';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    login: false,
  }

  render() {
    return (
      <Leyout>
        <Router>
          <Route path='/' exact component={TitleSection} />
          
        </Router>
      </Leyout>);
  }
}





export default App;
