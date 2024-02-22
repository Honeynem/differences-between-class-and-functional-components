import React from "react";
import Product from "./product";

class Products extends React.Component { 
    
    state = {
        products : [
            {id: 1, count: 2, productName: 'laptop'},
            {id: 2, count: 4, productName: 'phone'},
            {id: 3, count: 3, productName: 'airpods'}
        ]

    }
    render() {
        return (
            <>
              <button onClick={this.handleReset} className="btn btn-primary">Reset</button>
              {this.state.products.map((p , index)=> (
                <Product 
                onIncrement = {this.handleIncerement}
                onDecrement = {this.handleDecrement}
                onDelete={this.handledelete} 
                id={p.id} key={index} 
                productName={p.productName} 
                count={p.count}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus distinctio doloremque perferendis labore quibusdam molestiae pariatur autem fuga voluptas, tenetur quisquam commodi quaerat. Velit, facilis corporis! Ojkjdglfficia adipisci nihil nostrum.</Product>
              ))}
            </>
        )
              }

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

export default Products;