import React, { Component } from 'react';

const CurrentContext = React.createContext();
const temProducts= [
    {
        id:'1',
        title: 'Ajax wdwwddwede wwddw wwddd',
        code: '1290',
        amount: '19',
        date:'2019-09-20'
    },
    {
        id:'2',
        title: 'Domestos',
        code: '122',
        amount: '19',
        date:'2021-12-10'
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

    checkDate = (scope) => {
        const now = Date.parse(new Date());
        const products = temProducts.filter(({ date }) => {
            const js = Date.parse(date);
            const result = js - now;
            console.log(result);
            return result < scope;
        })
        this.setState({
            products
        })
    }

    render() {
        const { children } = this.props;
        const { state, handleInput,handleHamburger,searchProducts,checkDate } = this;
        return (
            <CurrentContext.Provider
                value={{                    
                    ...state,
                    handleInput,
                    handleHamburger,
                    searchProducts,
                    checkDate
                }}
            >
                {children}
           </CurrentContext.Provider>
       )
   }
}

export const ContextConsumer=CurrentContext.Consumer;