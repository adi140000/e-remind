import React, { Component } from 'react';
import Form from '../styled/componetents/Form';
import Input from '../styled/componetents/Input';
import Label from '../styled/componetents/Label';
import Div from '../styled/componetents/Div';


class Add extends Component {
    state = {

    }
    render() {
        return (
            <Form option>
                <Div>
                    <Label>Nazwa:</Label>
                    <Input />
                </Div>
                <Div>
                    <Label>Kod:</Label>
                    <Input
                        type='number'
                    />
                </Div>
                <Div>
                    <Label>Ilosc:</Label>
                    <Input
                        type='number'
                    />
                </Div>
                <Div>
                    <Label>Data zakonczenia:</Label>
                    <Input
                        type='date'
                    />
                </Div>


            </Form>
        )
    }
}

export default Add;