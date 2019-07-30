import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { ContextConsumer } from '../store/Context'


class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <ContextConsumer>
                {({ isLogin }) => {
                    if (!isLogin) {
                        return <Redirect to='/' />
                    }
                    return (<div>owwwwswoswsdeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</div>)

            }}
            </ContextConsumer>)
    }
}

export default Add;