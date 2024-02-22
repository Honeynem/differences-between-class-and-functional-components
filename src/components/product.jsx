import React, { Component } from 'react'
class Product extends React.Component {
    //no need for state 'Cause it gets all the datas from props
    // state = {
    //     count : this.props.count
    // }
    render(){
        
        return (
        <>
           <span  className='m-2 text-info'>{this.props.productName}</span>
           <span className='m-2 badge bg-primary'>{this.format(this.count)}</span>
           <button onClick={this.handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>
           <button onClick={this.handledecrement} className='m-2 btn btn-sm btn-warning'>-</button>
           <button onClick={this.handledelete} className='m-2 btn btn-sm btn-danger'>delete</button>
           <p>{this.props.children}</p>
        </>
        )
    }

    handleIncrement= ()=>{
    //or just using this.setState({count: this.state.count+1})
        //or object destructring like 
        // const {count}=this.state;
        // this.setState({count: count + 1});

        //for getting the data as props not just before with states
        this.props.onIncrement(this.props.id)
    }
    handledecrement= ()=>{
        // const {count}=this.state;
        // this.setState({count: count-1})
        this.props.onDecrement(this.props.id)
    }
    handledelete= ()=>{
        this.props.onDelete(this.props.id)
    }
    

    format(){
        if(this.props.count === 0 ){
            return 'zero';
        }
        else{
            return (this.props.count);
        }
    
    }
}

export default Product;