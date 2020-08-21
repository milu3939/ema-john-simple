import React, { useEffect } from 'react';
import {useState} from 'react';
import './Shop.css'
import Product from '../product/product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(()=>{
      fetch('http://localhost:1000/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })  
  }, [])


  useEffect(()=>{
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    if (products.length){
      const cartProducts = productKeys.map( key => {
        const product = products.find( pd => pd.key === key);
        product.quantity = savedCart[key];
        return product;
    });
    setCart(cartProducts);
    }
  }, [products])

  const handleAddProduct = (product) =>{
    //console.log( product);
    const toBeAddedKey = product.key;
    const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
    let count = 1;
    let newCart;
    if(sameProduct){
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter(pd => pd.key !== toBeAddedKey);
      newCart = [...others, sameProduct];
    }
    else{
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart); 
    addToDatabaseCart(product.key, count);
  
  }
    return (
        <div className="twin-container">
            <div className="product-container">
             
            
             {
                products.map(products => <Product 
                    key={products.key}
                    showAddToCart={true}
                    handleAddProduct = {handleAddProduct}
                    product={products}></Product>)
             }
            

            </div>   
            <div className="cart-container">
                <Cart cart={cart}>
                  <Link to="/Review">
                    <button className="main-btn">Review Order</button>
                  </Link>
                </Cart>
            </div>
            
        </div>
    );
};

export default Shop;