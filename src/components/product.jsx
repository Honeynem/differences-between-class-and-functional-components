import React, { Component } from 'react'
class Product extends React.Component {
    
    state = {
        count : 0,
        productName : 'laptop'

    }
    render(){
        
        return (
        <>
           <span  className='m-2 text-info'>{this.state.productName}</span>
           <span className='m-2 badge bg-primary'>{this.format(this.count)}</span>
           <button onClick={this.handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>
           <button onClick={this.handledecrement} className='m-2 btn btn-sm btn-warning'>-</button>
           <button className='m-2 btn btn-sm btn-danger'>delete</button>
        </>
        )
    }

    handleIncrement= ()=>{
    //or just using this.setState({count: this.state.count+1})
        //or object destructring like 
        const {count}=this.state;
        this.setState({count: count + 1});
    }
    handledecrement= ()=>{
        const {count}=this.state;
        this.setState({count: count-1})
    }
    

    format(){
        if(this.state.count === 0 ){
            return 'zero';
        }
        else{
            return (this.state.count);
        }
    
    }
}

export default Product;