import React, { Component } from 'react'
class Product extends React.Component {
    
    state = {
        count : this.props.count
    }
    render(){
        
        return (
        <>
           <span  className='m-2 text-info'>{this.props.productName}</span>
           <span className='m-2 badge bg-primary'>{this.format(this.count)}</span>
           <button onClick={this.handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>
           <button onClick={this.handledecrement} className='m-2 btn btn-sm btn-warning'>-</button>
           <button className='m-2 btn btn-sm btn-danger'>delete</button>
           <p>{this.props.children}</p>
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