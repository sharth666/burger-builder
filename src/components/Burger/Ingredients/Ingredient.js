import React, {Component} from 'react';
import classes from './Ingredients.module.css';
import PropTypes from 'prop-types';

class Ingredient extends Component {
    render(){
        let ingredient = null;

        switch(this.props.type) {
            case "bread-bottom":
                ingredient = <div className={classes.breadBottom}></div>
            break;
            case "cheese":
                ingredient = <div className={classes.cheese}></div>
            break;
            case "meat":
                ingredient = <div className={classes.meat}></div>
            break;
            case "salad":
                ingredient = <div className={classes.salad}></div>
            break;
            case "bread-top":
                ingredient = <div className={classes.breadTop}></div> 
            break;  
            default:
                ingredient =<div></div>
            break;
        }
        return ingredient;
    }
}

Ingredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default Ingredient;