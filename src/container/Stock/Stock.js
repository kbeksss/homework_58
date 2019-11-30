import React, {Component} from 'react';
import './Stock.css';
import Goods from "../../components/Goods/Goods";

import GOODS from "../../components/Goods/WareHouse";

class Stock extends Component {
    state = {
        cart: [],
    };
    addToCart = (id, index) => {
        let cart = [...this.state.cart];
        let [findProduct] = cart.filter(product => product.id === id);
        let existingProductIndex = cart.findIndex(product => product === findProduct);
        if(existingProductIndex >= 0){
            cart[existingProductIndex].count++;
        } else {
            let newProduct = GOODS.smartPhones[index];
            newProduct.count = 1;
            cart.push(newProduct);
        }
        this.setState({cart});
    };
    render() {
        console.log('cart: ', this.state.cart);
        return (
            <div className='Stock'>
                <div>
                    <button className='CartOrder'/>
                </div>
                <Goods
                    goods={GOODS}
                    add={this.addToCart}
                />
            </div>
        );
    }

}

export default Stock;