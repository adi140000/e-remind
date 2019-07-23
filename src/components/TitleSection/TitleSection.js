import React, { Component } from 'react';
import Section from "../../styled/componetents/Section";
import LoginForm from "../../styled/componetents/Form";
import Button from "../../styled/componetents/Button";
import Input from "../../styled/componetents/Input";
import H1 from "../../styled/componetents/H1";


class TitleSection extends Component {
    state = {
        login: '',
        password:'',
    }

    handleInput = (e) => {
        const { value, id } = e.target;
        this.setState({
            [id]:value,
        })
    }

    render() {
        const { login, password } = this.state;
        return (
            <Section login>                
                <H1>e-Remind</H1>
                <LoginForm >
                    <Input
                        placeholder='login'
                        type='text'
                        value={login}
                        onChange={this.handleInput}
                        id='login'
                    />
                    <Input
                        placeholder='password'
                        type='password'
                        value={password}
                        onChange={this.handleInput}
                        id='password'
                    />
                    <Button>Zaloguj</Button>
                </LoginForm>
            </Section>);
    }
}

export default TitleSection;