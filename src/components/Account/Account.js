import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Account extends Component {
    state = {}
    render() {
        const { doLogin } = this.props;
        if (!doLogin) return <Redirect to='/' />;
        return (<div>lll</div>);
    }
}

export default Account;