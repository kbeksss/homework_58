import React from 'react';
import './Product.css';

const Product = (props) => {
    return (
        <div className='Product'>
            <div><img src={props.image} height='100' width='auto' alt="product"/></div>
            <span className='Brand'>{props.brand}</span>
            <span className='Model'>{props.model}</span>
            <span className='Price'>{props.price}</span>
            <div className='Hover'>
                <span className='Add' onClick={props.add}>Add to the cart</span>
                <span className='Remove' onClick={props.remove}>Remove from the cart</span>
            </div>
        </div>
    );
};

export default Product;