import React, {Fragment} from 'react';
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";

const Modal = props => {
    return (
        <Fragment>
            <div className='Modal' style={{
                transform: props.show ? 'translateY(-10vh)' : 'translateY(-200vh)',
                opacity: props.show ? '1' : 0
            }}>
                <div className='Top'>
                    <Button type='Danger Modal_button' Click={props.close}>X</Button>
                    <h3>{props.title}</h3>
                </div>
                {props.children}
            </div>
            <Backdrop show={props.show} onClick={props.close}/>
        </Fragment>
    );
};

export default Modal;