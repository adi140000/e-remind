import React, { Component } from 'react';
import NavBar from './NavBar/NavBar'
import { ContextConsumer } from '../../store/Context';
import { Redirect } from "react-router-dom";
import Add from './pages/Add';

class Account extends Component {
    state = {}
    page = () => {
        const { name } = this.props;
        switch (name) {
            case 'add':
                return <Add />;               
            default:
                console.log('woow');
        }
    }
    render() {
        return (
            <ContextConsumer>
                {({ isLogin }) => {
                    if (!isLogin) {
                        return <Redirect to='/' />
                    }
                    return (
                        <>
                            <NavBar/>
                            {this.page()}

                        </>
                    )
                }}
            </ContextConsumer>
        );
    }
}

export default Account;