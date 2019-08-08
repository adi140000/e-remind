import React, { Component } from 'react';
import H1Title from '../styled/componetents/H1Title';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
               <H1Title>Sprawdz !</H1Title> 
            </>)
    }
}

export default Dashboard;