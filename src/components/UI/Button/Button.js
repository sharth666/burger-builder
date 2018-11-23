import React from 'react';
import classes from './Button.module.css';

const button = (props) => {
    console.log("Classses: ", classes);
    return (
        <button className={[classes.button, classes[props.buttonType]].join(" ")} onClick={props.clicked}>
            {props.children}
        </button>
    )
}

export default button;