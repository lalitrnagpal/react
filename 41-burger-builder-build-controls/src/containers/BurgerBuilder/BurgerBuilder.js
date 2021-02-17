import React, {Component} from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';
import BuildControlList from '../../components/Burger/BuildControlList/BuildControlList';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0
    };    

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updateIngredients
        });
    }

    deleteIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        let updatedCount = 0;
        if (oldCount >= 1) {
            updatedCount = oldCount - 1;
        } else {
            return;
        }
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updateIngredients
        });
    }

    render() {
        const disabledInfo = {          
            //basically copied in a immutable way
            ...this.state.ingredients
        }

        // [ salad: 1, meat:0 ...] to [salad: false, meat: true]
        Object.keys(disabledInfo)
            .map( (ingredientKey) => {
                disabledInfo[ingredientKey] = disabledInfo[ingredientKey] <= 0
        });
        
        return( 
            <Auxilliary>
                <Burger ingredients={this.state.ingredients}/>
                <br/>
                <BuildControlList 
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientDeleted = {this.deleteIngredientHandler}
                    disabledInfo = {disabledInfo}/>
            </Auxilliary>
        );
    }
}

export default BurgerBuilder;
