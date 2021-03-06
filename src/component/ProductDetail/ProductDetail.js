import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '../product/product';
import { useState } from 'react';
import { useEffect } from 'react';

const ProductDetail = () => {
    const {productKey} = useParams();
    const [product, setProduct] = useState(null);
    
    useEffect(() =>{
        fetch('http://localhost:1000/product/'+ productKey)
        .then(res =>res.json())
        .then(data => {
            setProduct(data);
        })
    }, [productKey])

    return (
        <div>
            <h1>Your Product details</h1>
            {
                product && <Product showAddToCart={false} product={product}></Product>
            }
        </div>
    );
};

export default ProductDetail;