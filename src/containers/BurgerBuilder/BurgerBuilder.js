import React from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import IngredientBuilder from '../IngredientControls/IngredientControls';
import Modal from '../../components/UI/Modal/Modal';
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
        totalPrice: 0,
        purchase: false,
        showModal:false
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

        if(currentIngredients[ingredientName] > 0)
        {
            let totalPrice = this.state.totalPrice;
            totalPrice -= INGREDIENT_PRICES[ingredientName]; 
            this.setState({totalPrice:totalPrice})
        }
        
        if(currentIngredients[ingredientName] > 0)
            currentIngredients[ingredientName]--;  
        this.setState({
            ingredients:currentIngredients
        });
    }

    openModalHandler = () => {
        this.setState({showModal:true});
    }

    closeModalHandler = () => {
        this.setState({showModal:false, purchase:false});
    }

    render(){
        const actualIngredients = this.state.ingredients;
        const ingredientControls = Object.keys(actualIngredients).map(ingredient => {
            return (
                <IngredientBuilder key={ingredient} type={INGREDIENT_TYPES[ingredient]} ingredient={ingredient}
                    onMinusClick={this.onClickIngredientMinusHandler} 
                    onPlusClick={this.onClickIngredientPlusHandler} />
            )
        });

        const ingredientList = Object.keys(actualIngredients).map(ingredient => {    
            if(actualIngredients[ingredient] > 0)
            {       
                return (        
                    <Aux key={ingredient}>
                        <li>{INGREDIENT_TYPES[ingredient]}: {actualIngredients[ingredient]}x</li>
                    </Aux>
                )            
            }
            else
                return null;
        });

        return (
            <Aux>    
                <Modal ingredients={ingredientList} show={this.state.showModal} closeModal={this.closeModalHandler}/>  
                <Burger ingredients={this.state.ingredients} />
                <div className={classes.controlsContainer}>
                    <div style={{padding:"8px"}}>
                        <span className={classes.totalPrice}>Preis: {this.state.totalPrice.toFixed(2)}</span>
                    </div>
                    {ingredientControls}
                    <button className={classes.orderButton} onClick={this.openModalHandler}>Bestellen</button>
                </div>
            </Aux>
        );
    }
}

export default BurgerBuilder;