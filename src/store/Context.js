import React, { Component } from 'react';

const CurrentContext = React.createContext();

export class Context extends Component {

    state = {
        login:'',
        password: '',
        products: [
            {
                title: 'Ajax',
                code: '1290',
                amount: '19',
                date:'2020-10-10'
            },
            {
                title: 'Domestos',
                code: '122',
                amount: '19',
                date:'2020-10-10'
            }
        ],
        isLogin:false,
        hamburger: false,
    }

    handleHamburger = () => {
        this.setState(prevState => ({
            hamburger: !prevState.hamburger,
        }))
    }

    handleInput = (e) => {        
        const { value, id } = e.target;
        console.log(value, id);
        this.setState({
            [id]: value,
        })
    }

    render() {
        const { children } = this.props;
        const { state, handleInput,handleHamburger } = this;
        return (
            <CurrentContext.Provider
                value={{                    
                    ...state,
                    handleInput,
                    handleHamburger
                }}
            >
                {children}
           </CurrentContext.Provider>
       )
   }
}

export const ContextConsumer=CurrentContext.Consumer;