import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => {
    return (
        <div className={classes.logo}>
            <img src={burgerLogo} alt="BurgerMania" />
        </div>
    )
};

export default logo;