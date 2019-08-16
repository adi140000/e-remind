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

    state = {
        search: '',
        thisProducts: [],
    }

    handleInput = (e) => {
        const { value } = e.target;        
        this.setState({
            search:value
        })
        
    }

    handleButton = () => {
        const { products } = this.props;
        let { search } = this.state;
        const thisProducts = products.filter(({ title }) => {
            title=title.toLowerCase();
            search = search.toLowerCase();
            return title.includes(search);
        });
        this.setState({
            thisProducts
        })
        
    }


    render() {        
        const { search ,thisProducts} = this.state;
        const MatchedProducts =thisProducts.map(item => (<SearchedProduct key={item.id} {...item} />));        
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