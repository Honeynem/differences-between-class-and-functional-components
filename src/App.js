//assigining class based components
import React from "react";
import  {Component} from "react";
import Navbar from "./components/navbar";
import {Product} from "./components/product";
import Products from "./components/products";

// class App extends Component {
//     render(){
//         return (<>
//             <h1>hello world</h1>
//             <h2>basics with react</h2>
//             </>)
//     }
// }

class App extends React.Component {
    state = {
        products : [
            {id: 1, count: 2, productName: 'laptop'},
            {id: 2, count: 4, productName: 'phone'},
            {id: 3, count: 3, productName: 'airpods'}
        ]
    }

    render(){
    return (<>
        <Navbar products={this.state.products}/>
        <Products products={this.state.products} 
        onDelete={this.handledelete}
        onIncrement={this.handleIncerement}
        onDecrement={this.handleDecrement}
        onReset={this.handleReset}/>         
         </>)}



    handleIncerement = (productId)=>{
        const newProducts = [...this.state.products];
        const index = newProducts.findIndex(p => p.id === productId)
        newProducts[index].count += 1;
        this.setState({products : newProducts})

    }  
    
    handleDecrement = (productId)=>{
        const newProducts = [...this.state.products];
        const index = newProducts.findIndex(p => p.id === productId)
        newProducts[index].count -= 1;
        this.setState({products : newProducts})

    }  
    

    handledelete = (productId)=> {
        const newProducts = this.state.products.filter(p => p.id !== productId);
        this.setState({products : newProducts})
    }

    //in this method we should map through the array and for each element assign the count to zero and then with setState change the state
    handleReset = ()=>{
        const newProducs = this.state.products.map(p =>{
            p.count = 0;
            return p
        })

        this.setState({products : newProducs})
    }

    
}
export default App;