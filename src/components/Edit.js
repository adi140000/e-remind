import React, { Component } from 'react';
import H1Title from '../styled/componetents/H1Title';
import Div from '../styled/componetents/Div';
import Label from '../styled/componetents/Label';
import Input from '../styled/componetents/Input';
import Article from '../styled/componetents/Article';
import SearchedProduct from './helpers/SearchedProducts'

class Edit extends Component {

  

    render() {
        const { products } = this.props;
        const MatchedProducts=products.map(item=>(<SearchedProduct {...item} />))
        return (
            <>
                <H1Title>Edytuj produkt</H1Title>
                <Div>
                    <Label>Szukaj:</Label>
                    <Input/>
                </Div>
                <Article>
                    {MatchedProducts}
                </Article>
            </>
        );
    }
}

export default Edit;