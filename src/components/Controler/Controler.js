import React from 'react';
import NavBar from '../NavBar';
import { ContextConsumer } from '../../store/Context';
import { Redirect } from "react-router-dom";
import Main from '../../styled/componetents/Main';
import Section from '../../styled/componetents/Section';




const Controler = () => {
    return (
        <ContextConsumer>
            {({ isLogin, hamburger }) => {
                if (!isLogin) {
                    return <Redirect to='/' />
                }
                return (
                    <>
                        <NavBar />
                        <Section hamburger={hamburger} >
                            <Main >

                            </Main>
                        </Section>
                    </>
                )

            }}
        </ContextConsumer>
    );
}

export default Controler;