import React from "react";
import Product from "./product";
import productContext from "../context/products";

class Products extends React.Component { 
  static contextType = productContext;
    
    render() {
        return (
            <>
              <button onClick={this.context.onReset} className="btn btn-primary">Reset</button>
              {this.context.products.map((p , index)=> (
                <Product  
                id={p.id} key={index} 
                productName={p.productName} 
                count={p.count}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus distinctio doloremque perferendis labore quibusdam molestiae pariatur autem fuga voluptas, tenetur quisquam commodi quaerat. Velit, facilis corporis! Ojkjdglfficia adipisci nihil nostrum.</Product>
              ))}
            </>
              )
            }

    
}

export default Products;