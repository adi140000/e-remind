import React, { Component } from 'react';

const CurrentContext = React.createContext();

export class Context extends Component {

    state = {
        login:'',
        password: '',
        isLogin:true,
        hamburger: true,
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