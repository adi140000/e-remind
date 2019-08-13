import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Section from "../../styled/componetents/Section";
import Form from "../../styled/componetents/Form";
import Submit from "../../styled/componetents/Submit";
import Input from "../../styled/componetents/Input";
import H1 from "../../styled/componetents/H1";
import { ContextConsumer } from '../../store/Context'


class TitleSection extends Component {
    render() {
        return (
            <ContextConsumer>
                {({ login, password, isLogin, handleInput }) => {
                    if (isLogin) {
                        return <Redirect to='/account/dashboard'/>
                    }
                    return (
                        <Section
                            login>
                            <H1>e-Remind</H1>
                            <Form
                                login>
                                <Input
                                    placeholder='login'
                                    type='text'
                                    value={login}
                                    onChange={handleInput}
                                    id='login'
                                />
                                <Input
                                    placeholder='password'
                                    type='password'
                                    value={password}
                                    onChange={handleInput}
                                    id='password'
                                />
                                <Submit
                                        type='submit'
                                    value='Zaloguj' />
                            </Form>
                        </Section>)
                }}
            </ContextConsumer>
        )

    }
}

export default TitleSection;