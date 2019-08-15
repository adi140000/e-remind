import React, { Component } from 'react';
import Leyout from './styled/Leyout/Leyout';
import LoginSection from './components/LoginSection/LoginSection';
import Add from './components/Add';
import Edit from './components/Edit';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard'
import Main from './styled/componetents/Main';
import Section from './styled/componetents/Section';
import { BrowserRouter as Router,  Redirect, Route, Switch } from "react-router-dom";
import { Context, ContextConsumer } from './store/Context';


function Account({children}) {
  return  <ContextConsumer>
  {({ hamburger }) => {
      return (
          <>
              <NavBar />
              <Section hamburger={hamburger} >
                  <Main >
                      {children}
                  </Main>
              </Section>
          </>
      )
  }}
</ContextConsumer>
}


function LoginUserRoutes() {
  return (<Route path='/account/'>
        <Account>
          <Route exact path='/account/dashboard' component={Dashboard} />
          <Route path='/account/add' component={Add} />
          <Route path='/account/edit' component={Edit}/>
          <Route exect path='/account/' render={() => <Redirect to='/account/dashboard' />}></Route>
        </Account>
      </Route>)
}

function AnonymousUserRoutes() {
  return (<>
    <Route path='/' exact component={LoginSection} />
    <Route render={() => <Redirect to='/' />} />
  </>)
}

class App extends Component {
  render() {
    return (
      <Context>
        <Leyout>
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <ContextConsumer>
              {({isLogin}) => {
              if (isLogin) {
                return <LoginUserRoutes />
              } else {
                return <AnonymousUserRoutes />
              }
              }}
              </ContextConsumer>
            </Switch>
          </Router>
        </Leyout >
      </Context>);
  }
}





export default App;
