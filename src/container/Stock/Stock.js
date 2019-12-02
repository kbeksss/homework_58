import React, {Component} from 'react';
import './Stock.css';
import Goods from "../../components/Goods/Goods";

import GOODS from "../../components/Goods/WareHouse";
import Modal from "../../components/UI/Modal/Modal";
import Cart from "../../components/Cart/Cart";
import Alert from "../../components/UI/Alert/Alert";

class Stock extends Component {
    state = {
        cart: [],
        ordering: false,
        purchasable: false,
        totalPrice: 100,
        alertSuccess: false,
        alertWarning: false,
        alertDanger: false,
        alertPrimary: false,
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
        let totalPrice = this.state.totalPrice + GOODS.smartPhones[index].price;
        this.setState({cart, totalPrice});
        this.updatePurchaseState(cart);
    };
    removeFromCart = (id, index) => {
        let cart = [...this.state.cart];
        let [findProduct] = cart.filter(product => product.id === id);
        let existingProductIndex = cart.findIndex(product => product === findProduct);
        if(existingProductIndex >= 0){
            cart[existingProductIndex].count--;
            let totalPrice = this.state.totalPrice - GOODS.smartPhones[index].price;
            this.setState({cart, totalPrice});
            if(cart[existingProductIndex].count === 0){
                cart.splice(existingProductIndex, 1);
            }
            this.updatePurchaseState(cart);
        }
    };
    orderHandler = () => {
        this.setState({ordering: true});
    };
    orderCancelHandler = () => {
        this.setState({ordering: false, alertWarning: !this.state.alertWarning});
    };

    updatePurchaseState = cart => {
        this.setState({purchasable: cart.length > 0})
    };
    updateAlertSuccess = () => {
        this.setState({ordering: false, alertSuccess: !this.state.alertSuccess, cart: [], totalPrice: 100, purchasable: false});
    };
    updateAlertWarning = () => {
        this.setState({alertWarning: !this.state.alertWarning});
    };
    render() {
        return (
            <div className='Stock'>
                <h2>Welcome to our wholesale store</h2>
                <div className='Button-div'>
                    <button
                        className='CartOrder'
                        disabled={!this.state.purchasable}
                        onClick={this.orderHandler}
                    />
                </div>
                <Goods
                    cart={this.state.cart}
                    add={this.addToCart}
                    remove={this.removeFromCart}
                />
                <Modal
                    show={this.state.ordering}
                    close={this.orderCancelHandler}
                    title='Your order'
                >
                    <Cart
                        cart={this.state.cart}
                        price={this.state.totalPrice}
                        orderCancel={this.orderCancelHandler}
                        orderContinue={this.updateAlertSuccess}
                    />
                </Modal>
                <Alert
                    showAlert={this.state.alertSuccess}
                    type='Success'
                    dismiss={this.updateAlertSuccess}
                >
                    You have submitted your order successfully
                </Alert>
                <Alert
                    showAlert={this.state.alertWarning}
                    close={this.updateAlertWarning}
                    type='Warning'
                >
                    You haven't submitted your order!
                </Alert>
            </div>
        );
    }

}

export default Stock;