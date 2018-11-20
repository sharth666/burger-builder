import React from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import IngredientBuilder from '../IngredientControls/IngredientControls';
import classes from './BurgerBuilder.module.css';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.46,
    meat: 2.5,
    bacon: 0.6
};

const INGREDIENT_TYPES = {
    salad: "Salat", 
    cheese: "Käse", 
    meat: "Fleisch",
    bacon: "Speck"
};


class BurgerBuilder extends React.Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0
        },
        totalPrice: 0
    }    

    onClickIngredientPlusHandler = (event) => {
        const ingredientName = event.target.id;
        const currentIngredients= this.state.ingredients;
        console.log(currentIngredients[ingredientName]);

        let totalPrice = this.state.totalPrice;
        totalPrice += INGREDIENT_PRICES[ingredientName]; 
        this.setState({totalPrice:totalPrice})
        
        currentIngredients[ingredientName]++;  
        this.setState({
            ingredients:currentIngredients
        });
    }

    onClickIngredientMinusHandler = (event) => {
        const ingredientName = event.target.id;
        const currentIngredients= this.state.ingredients;

        let totalPrice = this.state.totalPrice;
        totalPrice -= INGREDIENT_PRICES[ingredientName]; 
        this.setState({totalPrice:totalPrice})
        
        if(currentIngredients[ingredientName] > 0)
            currentIngredients[ingredientName]--;  
        this.setState({
            ingredients:currentIngredients
        });
    }

    render(){
        const actualIngredients = this.state.ingredients;
        const allIngredientControls = Object.keys(actualIngredients).map(ingredient => {
            return (
                <IngredientBuilder type={INGREDIENT_TYPES[ingredient]} ingredient={ingredient}
                    onMinusClick={this.onClickIngredientMinusHandler} 
                    onPlusClick={this.onClickIngredientPlusHandler} />
            )
        });

        return (
            <Aux>      
                <Burger ingredients={this.state.ingredients} />
                <div className={classes.controlsContainer}>
                    <div style={{padding:"8px"}}>
                        <span className={classes.totalPrice}>Preis: {this.state.totalPrice.toFixed(2)}</span>
                    </div>
                    {allIngredientControls}
                    <button className={classes.orderButton}>Bestellen</button>
                </div>
            </Aux>
        );
    }
}

export default BurgerBuilder;