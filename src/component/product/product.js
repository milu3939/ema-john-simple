import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css';

const Product = (props) => {
    const {img,name, price, seller, stock} = props.product ;
    return (            
        <div className="Product">
            <div>
                <img src={img} alt=""/>  
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p><small>only{stock}left in stock - order soon</small></p>
                <button className="main-btn" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
            
            
        </div>
    );
};

export default Product;       