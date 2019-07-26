import React, { Component } from 'react';

const CurrentContext = React.createContext();

export class Context extends Component {

    state = {
        login:'',
        password: '',
        isLogin:true,
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
        const { state, handleInput } = this;
        return (
            <CurrentContext.Provider
                value={{                    
                    ...state,
                    handleInput                    
                }}
            >
                {children}
           </CurrentContext.Provider>
       )
   }
}

export const ContextConsumer=CurrentContext.Consumer;