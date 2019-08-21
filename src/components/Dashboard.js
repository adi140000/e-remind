import React, { Component } from 'react';
import H1Title from '../styled/componetents/H1Title';
import Ul from '../styled/componetents/Ul';
import LiAttention from '../styled/componetents/LiAttention';
import Article from '../styled/componetents/Article';

const scope = {
    'month': 2592000000,
};

class Dashboard extends Component {

    componentDidMount = () => {
        const { checkDate } = this.props;
        checkDate(scope.month);
    }

   
    render() {
        const { products } = this.props;
        const LiProducts = products.map(({id, title }) => <LiAttention key={id} >{title}</LiAttention>)
        return (
            <>
                <H1Title>Sprawdz !</H1Title>
                <Article>
                    <Ul>
                        {LiProducts}
                    </Ul>
                </Article>
            </>)
    }
}

export default Dashboard;