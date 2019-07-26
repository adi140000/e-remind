import React, { Component } from 'react';
import { ContextConsumer } from '../../store/Context';
import { Redirect } from "react-router-dom";

class Account extends Component {
    state = {}
    render() {

        return (
            <ContextConsumer>
                {({ isLogin }) => {
                    if (!isLogin) {
                        return <Redirect to='/'/>
                    }
                    return (
                        <h1>Zalogowany</h1>
                    )
                }}
            </ContextConsumer>
        );
    }
}

export default Account;