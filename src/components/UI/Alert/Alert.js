import React, {Fragment} from 'react';
import './Alert.css';
import Backdrop from "../Backdrop/Backdrop";
const Alert = props => {
    return (
        <Fragment>
            <div
                className={['Alert', props.type].join(' ')}
                style={{transform: props.showAlert ? 'translateY(0)' : 'translateY(-150vh)'}}
            >
                {props.children}
                {props.dismiss ? <button className='Button' onClick={props.dismiss}>X</button> : null}
            </div>
            <Backdrop show={props.showAlert} onClick={props.close}/>
        </Fragment>
    );
};

export default Alert;