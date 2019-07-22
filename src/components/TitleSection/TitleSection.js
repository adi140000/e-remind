import React, { Component } from 'react';
import Section from "../../styled/componetents/Section";
import LoginForm from "../../styled/componetents/LoginForm";
import Button from "../../styled/componetents/Button";
import InputForm from "../../styled/componetents/InputForm";
import Remind from "../../styled/componetents/Remind";

class TitleSection extends Component {
    state = {}
    render() {
        return (
            <Section>
                <Remind>e-Remind</Remind>
                <LoginForm >
                    <InputForm />
                    <InputForm />
                    <Button>Zaloguj</Button>
                </LoginForm>
            </Section>);
    }
}

export default TitleSection;