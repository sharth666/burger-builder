import React from 'react';
import Aux from '../../hoc/Auxi';
import classes from './Layout.module.css';
import Toolbar from './Toolbar/Toolbar';

const layout = (props) => (
    <Aux>
        <Toolbar s/>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;