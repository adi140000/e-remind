import React, { Component } from 'react';

const CurrentContext = React.createContext();
const temProducts= [
    {
        id:'1',
        title: 'Ajax wdwwddwede wwddw wwddd',
        code: '1290',
        amount: '19',
        date:'2020-10-10'
    },
    {
        id:'2',
        title: 'Domestos',
        code: '122',
        amount: '19',
        date:'2020-10-10'
    }
]

export class Context extends Component {

    state = {
        login:'',
        password: '', 
        products:[],
        isLogin:true,
        hamburger:false
    }

    handleHamburger = () => {
        this.setState(prevState => ({
            hamburger: !prevState.hamburger,
        }))
    }

    searchProducts=(search)=>{
        if (search) {            
            const products = temProducts.filter(({ title }) => {
                title = title.toLowerCase();
                search = search.toLowerCase();
                return title.includes(search);
            });
            this.setState({
                products
            })
        } else {
            this.setState({
                products:[]
            })
        }
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
        const { state, handleInput,handleHamburger,searchProducts } = this;
        return (
            <CurrentContext.Provider
                value={{                    
                    ...state,
                    handleInput,
                    handleHamburger,
                    searchProducts
                }}
            >
                {children}
           </CurrentContext.Provider>
       )
   }
}

export const ContextConsumer=CurrentContext.Consumer;