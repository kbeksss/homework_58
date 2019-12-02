import React from 'react';
import Product from "./Product/Product";
import GOODS from "./WareHouse";

const Goods = (props) => {
    let goods = [];
    let disabledInfo = {};
    for (let i = 0; i < GOODS.smartPhones.length; i++){
        props.cart.forEach(product => {
            if(product.id === GOODS.smartPhones[i].id){
                disabledInfo[i] = true;
            }
        });
        goods.push(
            <Product
                key={GOODS.smartPhones[i].id}
                add={() => props.add(GOODS.smartPhones[i].id, i)}
                remove={() => props.remove(GOODS.smartPhones[i].id, i)}
                image={GOODS.smartPhones[i].image}
                brand={GOODS.smartPhones[i].brand}
                model={GOODS.smartPhones[i].model}
                price={GOODS.smartPhones[i].price}
                disabled={!disabledInfo[i]}
            />
        );
    }
    return (
        <div className='Goods'>
            {goods}
        </div>
    );

};

export default Goods;
