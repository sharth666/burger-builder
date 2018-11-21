import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxi';
import Backdrop from '../Backdrop/Backdrop';


const modal = (props) => {
    let classNames = [];
    classNames.push(classes.modal);
    if (props.show)
        classNames.push(classes.show);

    return (
        <Aux>
            <Backdrop show={props.show} />
            <div className={classNames.join(" ")} >
                <h2>Ihre Bestellung</h2>
                <span>Ein leckerer Burger mit diesen Zutaten:</span>
                <ul>
                    {props.ingredients}
                </ul>
                <button className={classes.okButton} onClick={props.closeModal}>OK</button>
            </div>            
        </Aux>
    )
};

export default modal;