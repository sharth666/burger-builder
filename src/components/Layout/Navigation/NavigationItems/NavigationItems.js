import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = () => {
    return (
        <ul className={classes.navigationItems}>
            <NavigationItem name="Golem" href="http://www.golem.de"/>
            <NavigationItem name="Heise" href="http://www.golem.de"/>
            <NavigationItem name="BurgerMania" href="http://www.golem.de"/>
        </ul>
    );
}

export default navigationItems;