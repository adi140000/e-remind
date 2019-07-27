import React, { Component } from 'react';
import Nav from '../../styled/componetents/Nav';
import Section from '../../styled/componetents/Section';
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
                            <Nav />
                            <Section />
                        </>
                    )
                }}
            </ContextConsumer>
        );
    }
}

export default Account;