import React from 'react';
import { useState } from 'react';

const Product = (props) => {

  const [count, setCount] = useState(0)
  return (
    <div>
        <span  className='m-2 text-info'>{props.productName}</span>
        <span className='m-2 badge bg-primary'>{format(count)}</span>
        <button onClick={handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>
        <button onClick={handledecrement} className='m-2 btn btn-sm btn-warning'>-</button>
        <button className='m-2 btn btn-sm btn-danger'>delete</button>
    </div>
  )
 
  function handleIncrement(){
    setCount(count+1)}
  function handledecrement (){
    setCount(count-1)  }
    

  function format(){
    if(count === 0 ){
        return 'zero';
    }
    else{
        return count;
    }}
}



export default Product
