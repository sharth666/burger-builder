import React from 'react';
import classes from './Burger.module.css';
import Ingredient from './Ingredients/Ingredient'

const burger = (props) => {
    const ingredients = props.ingredients;
    const addIngredientsMessage = <p>Bitte Zutaten hinzufügen</p>
    const ingredientKeys = [];  
    // const ingredientValues = Object.values(ingredients);
    
    for (var prop in ingredients) {
        if (ingredients.hasOwnProperty(prop)) { 
          for(let i=0; i<ingredients[prop]; i++)
            ingredientKeys.push(prop);
        }
      }

    const mappedIngredients = ingredientKeys.map(ingredient => {        
        return (<Ingredient type={ingredient} key={Math.random()*10}/>);
    });

    return (
        <div className={classes.burger}>
            <Ingredient type="bread-top"/>
                {mappedIngredients}
                {mappedIngredients.length < 1 ? addIngredientsMessage: ""}                 
            <Ingredient type="bread-bottom"/>
        </div>
    );
}

export default burger;