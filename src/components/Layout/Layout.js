import React from 'react';
import Aux from '../../hoc/Auxi';
import classes from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <div>SideDrawer, Toolbar, Logo</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;