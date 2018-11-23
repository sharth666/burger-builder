import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';

const toolbar = (props) => {
    return (
        <header className={classes.toolbar}>
            <Logo />
            <div>MENU</div>            
            <NavigationItems/>
        </header>
    );   
}

export default toolbar;