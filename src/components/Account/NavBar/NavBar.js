import React, { Component } from 'react';
import Nav from '../../../styled/componetents/Nav';
import Ul from '../../../styled/componetents/Ul';
import Li from '../../../styled/componetents/Li';
import StyledNavLink from '../../../styled/componetents/StyledNavLink';
import Footer from '../../../styled/componetents/Footer';



class NavBar extends Component {
    state = {}
    render() {
        return (

            <Nav>
                <Ul main>
                    <Li><StyledNavLink activeClassName='selected' className='link' to='/account/add'>Dodaj produkt</StyledNavLink></Li>
                    <Li><StyledNavLink activeClassName='selected' className='link' to='/account/delete'>Usun produkt</StyledNavLink></Li>
                    <Li><StyledNavLink activeClassName='selected' className='link' to='/account/find'>Znajdz produkt</StyledNavLink></Li>
                </Ul>
                <Footer>
                    Copy Adrian Żmuda
                </Footer>
            </Nav>

        );
    }
}

export default NavBar;