import React, { Component } from 'react';
import Nav from '../../../styled/componetents/Nav';
import Ul from '../../../styled/componetents/Ul';
import Li from '../../../styled/componetents/Li';
import StyledNavLink from '../../../styled/componetents/StyledNavLink';
import H1 from '../../../styled/componetents/H1'


class NavBar extends Component {
    state = {}
    render() {
        return (
            <Nav>
                <H1
                    nav
                >e-Remind</H1>
                <Ul main>
                    <Li><StyledNavLink to='/account/add'>Dodaj produkt</StyledNavLink></Li>
                    <Li><StyledNavLink to='/account/delete'>Usun produkt</StyledNavLink></Li>
                    <Li><StyledNavLink to='/account'>Znajdz produkt</StyledNavLink></Li>
                </Ul>
            </Nav>
        );
    }
}

export default NavBar;