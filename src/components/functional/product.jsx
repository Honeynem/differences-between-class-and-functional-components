import React from 'react';
import { useState } from 'react';

const Product = () => {

  const [count, setCount] = useState(0)
  return (
    <>
        <span  className='m-2 text-info'>product name</span>
        <span className='m-2 badge bg-primary'>{format(count)}</span>
        <button onClick={handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>
        <button onClick={handledecrement} className='m-2 btn btn-sm btn-warning'>-</button>
        <button className='m-2 btn btn-sm btn-danger'>delete</button>
    </>
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
