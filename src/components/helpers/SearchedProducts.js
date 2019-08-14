import React from 'react';
import Div from '../../styled/componetents/Div';
import Span from '../../styled/componetents/Span';

const SearchedProduct = ({ title, code, amount, date }) => {
    return (<>
        <Div
            edit>
            <Span>{title}</Span>
            <Span>{code}</Span>
            <Span>{amount}</Span>
            <Span>{date}</Span>
        </Div>
        
    </>);
}

export default SearchedProduct;