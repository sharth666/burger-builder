import React from 'react';
import classes from './IngredientControls.module.css';

class IngredientBuilder extends React.Component {


    render() {
        return (
            <div className={classes.ingredientContainer}>
                <div className={classes.ingredientLabel}>{this.props.type}</div>
                <button type="button" id={this.props.ingredient} onClick={this.props.onPlusClick}>+</button>
                <button type="button" id={this.props.ingredient} onClick={this.props.onMinusClick}>-</button>                 
            </div>
        )
    }
}

export default IngredientBuilder;