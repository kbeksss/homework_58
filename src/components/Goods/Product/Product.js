import React from 'react';
import './Product.css';

const Product = (props) => {
    return (
        <div className='Product'>
            <div><img src={props.image} height='100' width='auto' alt="product"/></div>
            <span className='Brand'>{props.brand}</span>
            <span className='Model'>{props.model}</span>
            <span className='Price'>{props.price}</span>
            <div className='Hover '>
                <button aria-disabled='true' className='Add' onClick={props.add}>Add to cart</button>
                <button className='Remove' disabled={props.disabled} onClick={props.remove}>Remove from cart</button>
            </div>
        </div>
    );
};

export default Product;