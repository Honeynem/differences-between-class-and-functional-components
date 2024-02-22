import React from 'react';
import Product from '../product';
import { useState } from 'react';

const Products = () => {
  const [products , setProducts] = useState([
    {id: 1, count: 2, productName: 'laptop'},
    {id: 2, count: 4, productName: 'phone'},
    {id: 3, count: 3, productName: 'airpods'}
])
  return (
    <>
      {products.map((p , index)=> (
                <Product onDelete={handledelete} id={p.id} key={index} productName={p.productName} count={p.count}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus distinctio doloremque perferendis labore quibusdam molestiae pariatur autem fuga voluptas, tenetur quisquam commodi quaerat. Velit, facilis corporis! Officia adipisci nihil nostrum.</Product>
              ))}

    </>
  )

  function handledelete (productId){
    const newProducts = products.filter(p => p.id !== productId)
    setProducts(newProducts)
  }
}

export default Products
