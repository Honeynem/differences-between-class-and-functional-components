import React from 'react';
import Product from '../product';
import { useState, useContext } from 'react';
import productContext from '../../context/products';

const Products = (props) => {
  const [products , setProducts] = useState([
    {id: 1, count: 2, productName: 'laptop'},
    {id: 2, count: 4, productName: 'phone'},
    {id: 3, count: 3, productName: 'airpods'}
])

  //using useContext for functional components
  const productContext = useContext(productContext)


  return (

    <>
    <button onClick={productContext.onReset} className="btn btn-primary">Reset</button>
      {productContext.products.map((p , index)=> (
                <Product  
                id={p.id} 
                key={index} productName={p.productName} 
                count={p.count}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus distinctio doloremque perferendis labore quibusdam molestiae pariatur autem fuga voluptas, tenetur quisquam commodi quaerat. Velit, facilis corporis! Officia adipisci nihil nostrum.</Product>
              ))}

    </>
  )

  function handleIncerement (productId){
    const newProducts = [...products];
    const index = newProducts.findIndex(p => p.id === productId)
    newProducts[index].count += 1;
    setProducts(newProducts)

  }  

function handleDecrement (productId){
    const newProducts = [...products];
    const index = newProducts.findIndex(p => p.id === productId)
    newProducts[index].count -= 1;
    setProducts(newProducts)

  }  

  function handledelete (productId){
    const newProducts = products.filter(p => p.id !== productId)
    setProducts(newProducts)
  }

  function handleReset (){
    const newProducts = products.map(p =>{
        p.count = 0;
        return p
    })

  setProducts(newProducts)
}
}

export default Products
