import React, { Component } from 'react';
import NavBar from './parts/NavBar'
import { ContextConsumer } from '../../store/Context';
import { Redirect } from "react-router-dom";

class Account extends Component {
    state = {}
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
                           
                        </>
                    )
                }}
            </ContextConsumer>
        );
    }
}

export default Account;