import React from 'react';
import Leyout from './styled/Leyout/Leyout';
import TitleSection from './components/TitleSection/TitleSection';
import { BrowserRouter as Router, Route} from "react-router-dom";


const App = () => {
  return (
    <Leyout>
      <Router>
        <Route path='/' component={TitleSection}/>
      </Router>
    </Leyout>
  );
}



export default App;
