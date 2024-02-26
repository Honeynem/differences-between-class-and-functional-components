import React from "react";
import Product from "./product";

class Products extends React.Component { 
    
    render() {
        return (
            <>
              <button onClick={this.props.onReset} className="btn btn-primary">Reset</button>
              {this.props.products.map((p , index)=> (
                <Product 
                onIncrement = {this.props.onIncrement}
                onDecrement = {this.props.onDecrement}
                onDelete={this.props.onDelete} 
                id={p.id} key={index} 
                productName={p.productName} 
                count={p.count}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus distinctio doloremque perferendis labore quibusdam molestiae pariatur autem fuga voluptas, tenetur quisquam commodi quaerat. Velit, facilis corporis! Ojkjdglfficia adipisci nihil nostrum.</Product>
              ))}
            </>
              )
            }

    
}

export default Products;