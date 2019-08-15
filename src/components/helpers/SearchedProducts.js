import React from 'react';
import Div from '../../styled/componetents/Div';
import DivInner from '../../styled/componetents/DivInner';
import Span from '../../styled/componetents/Span';
import Li from '../../styled/componetents/Li';
import H2 from '../../styled/componetents/H2';
import IconButton from '../../styled/componetents/IconButton';



const SearchedProduct = ({ title, code, amount, date }) => {
    return (
        <Li>
            <Div edit>
                <DivInner
                    edit>
                    <Span>
                        <H2>Nazwa</H2>
                        {title}
                    </Span>
                    <Span>
                        <H2>Kod</H2>
                        {code}
                    </Span>
                    <Span>
                        <H2>Ilosc</H2>
                        {amount}
                    </Span>
                    <Span>
                        <H2>Data</H2>
                        {date}
                    </Span>
                </DivInner>
                <DivInner edit>
                    <IconButton>

                    </IconButton>
                    <IconButton>

                    </IconButton>
                </DivInner>

            </Div>

        </Li>
    );
}

export default SearchedProduct;