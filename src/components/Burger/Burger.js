import React from 'react';
import classes from './Burger.module.css';
import Ingredient from './Ingredients/Ingredient'

const burger = (props) => {
    const ingredients = props.ingredients;



    
    //breadTop: 1
    const ingredientKeys = [];  //Object.keys(ingredients);
    const ingredientValues = Object.values(ingredients);
    
    for (var prop in ingredients) {
        if (ingredients.hasOwnProperty(prop)) { 
          for(let i=0; i<ingredients[prop]; i++)
            ingredientKeys.push(prop);
        }
      }

    const mappedIngredient = ingredientKeys.map(ingredient => {        
        return (<Ingredient type={ingredient} key={Math.random()}/>);
    });

    return (
        <div className={classes.burger}>
            <Ingredient type="bread-top"/>
                {mappedIngredient}
            <Ingredient type="bread-bottom"/>
        </div>
    );
}

export default burger;