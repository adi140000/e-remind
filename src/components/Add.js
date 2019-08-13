import React, { Component } from 'react';
import Form from '../styled/componetents/Form';
import Input from '../styled/componetents/Input';
import Label from '../styled/componetents/Label';
import Div from '../styled/componetents/Div';
import Submit from '../styled/componetents/Submit';
import H1Title from '../styled/componetents/H1Title';

class Add extends Component {
    day = new Date().getDate();
    month = new Date().getMonth() + 1;
    year = new Date().getFullYear();

    today = `${this.year}-${this.month < 10 ? '0' + this.month : this.month}-${this.day}`
    state = {
        title: '',
        code: '',
        amount: '',
        date: this.today

    }

    handelInput = (e) => {
        const { id, value } = e.target;
        this.setState({
            [id]: value,
        })
        console.log(this.today)
    }

    handleForm = (e) => {
        e.preventDefault()

    }
    render() {
        const { title, amount, code, date } = this.state;
        return (
            <>
                <H1Title>Dodaj produkt</H1Title>
                <Form
                    option
                    id='add'
                    onSubmit={this.handleForm}
                   >
                    <Div>
                        <Label
                            htmlFor='title'
                        >Nazwa:</Label>
                        <Input

                            id='title'
                            value={title}
                            onChange={this.handelInput}
                        />
                    </Div>
                    <Div>
                        <Label
                            htmlFor='code'
                        >Kod:</Label>
                        <Input
                            id='code'
                            value={code}
                            onChange={this.handelInput}
                        />
                    </Div>
                    <Div>
                        <Label
                            htmlFor='amount'
                        >Ilosc:</Label>
                        <Input
                            type='number'
                            id='amount'
                            value={amount}
                            onChange={this.handelInput}
                        />
                    </Div>
                    <Div>
                        <Label
                            htmlFor='date'
                        >
                            Data zakonczenia:</Label>
                        <Input

                            type='date'
                            id='date'
                            value={date}
                            onChange={this.handelInput}

                        />
                    </Div>
                    <Submit
                        type="submit"                        
                        value='Dodaj'                        
                    />

                </Form>
            </>
        )
    }
}

export default Add;