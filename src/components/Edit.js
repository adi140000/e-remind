import React, { Component } from 'react';
import H1Title from '../styled/componetents/H1Title';
import Div from '../styled/componetents/Div';
import Label from '../styled/componetents/Label';
import Article from '../styled/componetents/Article';
import Ul from '../styled/componetents/Ul';
import SearchedProduct from './helpers/SearchedProducts'
import Input from '../styled/componetents/Input';
import DivSearch from '../styled/componetents/DivSearch';
import IconButton from '../styled/componetents/IconButton';


class Edit extends Component {



    render() {
        const { products } = this.props;
        const MatchedProducts = products.map(item => (<SearchedProduct {...item} />))
        return (
            <>
                <H1Title>Edytuj produkt</H1Title>
                <Div>
                    <Label
                        htmlFor='search'
                    >Szukaj:</Label>
                    <DivSearch>
                        <Input
                            id='search'
                            placeholder='szukaj...' />
                        <IconButton>
                            <i class="fas fa-search"></i>
                        </IconButton>
                    </DivSearch>
                    
                </Div>
                <Article>
                    <Ul>
                        {MatchedProducts}
                    </Ul>

                </Article>
            </>
        );
    }
}

export default Edit;