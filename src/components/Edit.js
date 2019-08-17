import React, { Component } from 'react';
import H1Title from '../styled/componetents/H1Title';
import H3 from '../styled/componetents/H3';
import Div from '../styled/componetents/Div';
import Label from '../styled/componetents/Label';
import Article from '../styled/componetents/Article';
import Ul from '../styled/componetents/Ul';
import SearchedProduct from './helpers/SearchedProducts'
import Input from '../styled/componetents/Input';
import DivSearch from '../styled/componetents/DivSearch';
import IconButton from '../styled/componetents/IconButton';
import Radio from '../styled/componetents/Radio';


class Edit extends Component {

    state = {
        search: '',
        
    }

    handleInput = (e) => {
        const { value } = e.target;
        this.setState({
            search: value
        })

    }

    handleButton = () => {
        let { search } = this.state
        const { searchProducts } = this.props;
        searchProducts(search);

    }


    render() {
        const { search } = this.state;
        const { products } = this.props;
        const MatchedProducts = products.map(item => (<SearchedProduct key={item.id} {...item} />));
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
                            placeholder='szukaj...'
                            value={search}
                            onChange={this.handleInput}
                        />

                        <IconButton
                            onClick={this.handleButton}
                        >
                            <i className="fas fa-search"></i>
                        </IconButton>
                    </DivSearch>
                    <Radio type='radio'/>                    
                </Div>
                <Article>
                    {MatchedProducts.length > 0 ? <Ul>

                        {MatchedProducts}
                    </Ul> :
                        <H3>Brak</H3>}
                </Article>
            </>
        );
    }
}

export default Edit;