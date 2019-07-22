import React, { Component } from 'react';
import Section from "../../styled/componetents/Section";
import LoginForm from "../../styled/componetents/LoginForm";
import Button from "../../styled/componetents/Button";
import InputForm from "../../styled/componetents/InputForm";

class TitleSection extends Component {
    state = {}
    render() {
        return (
            <Section>
                <LoginForm >
                    <InputForm />
                    <InputForm />
                    <Button>Zaloguj</Button>
                </LoginForm>
            </Section>);
    }
}

export default TitleSection;