import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) => {
    return (
        props.show ? <div className={classes.backdrop}></div> : null
    )
};

export default backdrop;