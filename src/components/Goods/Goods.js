import React from 'react';
import Product from "./Product/Product";

const Goods = (props) => {
    let goods = props.goods.smartPhones;
    return (
        <div className='Goods'>
            {goods.map((product, index) => (
                <Product
                    remove={props.remove}
                    key={product.id}
                    add={() => props.add(product.id, index)}
                    image={product.image}
                    brand={product.brand}
                    model={product.model}
                    price={product.price}
                />
            ))}
        </div>
    );

};

export default Goods;
