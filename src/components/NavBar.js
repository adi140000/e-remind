import React, { Component } from 'react';
import Nav from '../styled/componetents/Nav';
import Ul from '../styled/componetents/Ul';
import Li from '../styled/componetents/Li';
import StyledNavLink from '../styled/componetents/StyledNavLink';
import Footer from '../styled/componetents/Footer';
import Hamburger from '../styled/componetents/Hamburger';
import InnerBar from '../styled/componetents/InnerBar';
import { ContextConsumer } from '../store/Context'



class NavBar extends Component {
   
    render() {
        
        return (
            <ContextConsumer>
                {({hamburger ,handleHamburger }) => {
                 
                    return (
                        <>
                            <Hamburger onClick={handleHamburger}>
                                <InnerBar hamburger={hamburger} />
                            </Hamburger>
                            <Nav hamburger={hamburger}>
                                <Ul main>
                                    <Li><StyledNavLink activeClassName='selected' className='link' to='/account/add'>Dodaj produkt</StyledNavLink></Li>
                                    <Li><StyledNavLink activeClassName='selected' className='link' to='/account/delete'>Usun produkt</StyledNavLink></Li>
                                    <Li><StyledNavLink activeClassName='selected' className='link' to='/account/find'>Znajdz produkt</StyledNavLink></Li>
                                </Ul>
                                <Footer>
                                    Copy Adrian Żmuda
                                </Footer>
                            </Nav>
                        </>
                    )
                }}
            </ContextConsumer>
        );
    }
}

export default NavBar;