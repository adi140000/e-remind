import React, { Component } from 'react';
import H1Title from '../styled/componetents/H1Title';
import Ul from '../styled/componetents/Ul';
import LiAttention from '../styled/componetents/LiAttention';
import Article from '../styled/componetents/Article';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <H1Title>Sprawdz !</H1Title> 
                <Article>
                    <Ul>
                        <LiAttention>
                            Won
                        </LiAttention>
                        <LiAttention>
                            Won
                        </LiAttention>
                    </Ul>
                </Article>
            </>)
    }
}

export default Dashboard;