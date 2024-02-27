import React from 'react';
import { useState, useContext } from 'react';
import productContext from '../../context/products';


const Product = ({productName , count , id}) => {
    

  // const [count, setCount] = useState(propCount)
  return (
    <div>
        <span  className='m-2 text-info'>{props.productName}</span>
        <span className='m-2 badge bg-primary'>{format(count)}</span>
        <button onClick={handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>
        <button onClick={handleDecrement} className='m-2 btn btn-sm btn-warning'>-</button>
        <button className='m-2 btn btn-sm btn-danger'>delete</button>
        {children}
    </div>
  )
 
  function handleIncrement(){
    // setCount(count+1)
    productContext.onIncrement(id)}
  function handleDecrement (){
    // setCount(count-1)
    productContext.onDecrement(id)}
  function handleDelete(){
    productContext.onDelete(id)
  }
    

  function format(){
    if(count === 0 ){
        return 'zero';
    }
    else{
        return count;
    }}
}



export default Product
