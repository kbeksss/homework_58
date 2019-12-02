import React, {Fragment} from 'react';
import Button from "../UI/Button/Button";
import nanoid from "nanoid";

const Cart = props => {
    const cart = props.cart.filter(good => good.count > 0).map(product => {
            return (
                <li key={nanoid()}>
                    {product.brand} {product.model} x {product.count}
                </li>
            )
        });
    return (
        <Fragment>
            <p>Awesome smart phones:</p>
            <ul>{cart}</ul>
            <p><strong>Total price: {props.price} KGS</strong></p>
            <p>Continue to checkout?</p>
            <Button
                type='Danger'
                Click={props.orderCancel}
            >
                CANCEL
            </Button>
            <Button
                type='Success'
                Click={props.orderContinue}
            >
                CONTINUE
            </Button>
        </Fragment>
    );
};

export default Cart;