import React from 'react';
import classes from './NavigationItem.module.css';

const navigationItem = (props) => {
    return (
        <li className={classes.navigationItem}><a href={props.href} target="_blank">{props.name}</a></li>
    );
}

export default navigationItem;