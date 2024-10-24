import React from 'react'
import {useState} from 'react';

function ShoppingCart() {
    const [cartItems,setCartItems]=useState([]);//initialise cart as empty

    const products=[
        {id:1,name:'product 1',price:10},
        {id:2,name:'product 2',price:20},
        {id:3,name:'product 3',price:30},
        {id:4,name:'product 4',price:40},
    ];

    const addtoCart=(product)=>{
        setCartItems([...cartItems,product]);
    };
    //calculate total items and total amount in the cart
    const totalItems=cartItems.length;
    const totalAmount=cartItems.reduce((total,item)=> total+item.price,0);

  return (

    <div>
      <h1>product</h1>
      {products.map(product=>(
        <div key={product.id}>
            <p>{product.name}-${product.price}</p>
            <button onClick={()=>addtoCart(product)}>add to cart  </button>
        </div>

      ))}

<h1>cart</h1>
      {cartItems.map(item=>(
        <div key={item.id}>
            <p>{item.name}-${item.price}</p>
            
        </div>

      ))}

      <h2>total Items:{totalItems}</h2>
      <h2>total Amount:{totalAmount}</h2>
    </div>
  )
}

export default ShoppingCart
