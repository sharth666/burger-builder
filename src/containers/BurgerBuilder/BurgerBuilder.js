import React, {Component} from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends React.Component {
    state = {
        ingredients: {            
            salad: 2,
            meat: 2,
            cheese: 1            
        }


    }
    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>BuCtrols</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;