import React, { Component } from 'react';
import Nav from '../../../styled/componetents/Nav';
import Ul from '../../../styled/componetents/Ul';
import Li from '../../../styled/componetents/Li';

class NavBar extends Component {
    state = {}
    render() {
        return (
            <Nav>
                <Ul main>
                    <Li>Dodaj produkt</Li>
                    <Li>Usun produkt</Li>
                    <Li>Znajdz produkt</Li>
                </Ul>
            </Nav>
        );
    }
}

export default NavBar;