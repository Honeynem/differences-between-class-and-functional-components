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
              {this.state.products.map((p , index)=> (
                <Product onDelete={this.handledelete} id={p.id} key={index} productName={p.productName} count={p.count}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus distinctio doloremque perferendis labore quibusdam molestiae pariatur autem fuga voluptas, tenetur quisquam commodi quaerat. Velit, facilis corporis! Ojkjdglfficia adipisci nihil nostrum.</Product>
              ))}
            </>
        )
    }

    handledelete = (productId)=> {
        const newProducts = this.state.products.filter(p => p.id !== productId);
        this.setState({products : newProducts})
    }
}

export default Products;