import React, {Component} from 'react';
import Auxilliary from '../../hoc/Auxilliary/Auxilliary';
import Burger from '../../components/Burger/Burger';
import BuildControlList from '../../components/Burger/BuildControlList/BuildControlList';
import Modal from '../../components/UI/Modal/Modal';
import classes from './BurgerBuilder.css';
import OrderSummary from '../../components/Burger/BuildControlList/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 0,
        isPurchasable: false,
        loading: false,
        error: false
    };    

    // componentDidMount() {
    constructor(props) {
        super(props);
        axios.get('/ingredients.json')
                .then(response => {
                    console.log(response.data);
                    this.setState({
                        ingredients: response.data
                    });
                })
                .catch(error => {
                    this.setState({
                        error: true
                    })
                });
    }

    updatePurchaseState = (ingredients) => {
        let sum = Object.keys(ingredients)
                            .map((ing) => {
                                return ingredients[ing];
                            })
                            .reduce( (sum, ing) => sum + ing, 0);

        this.setState({
            isPurchasable: sum > 0        
        })
    }

    purchaseHandler = () => {
        this.setState({
            isPurchasable: true
        })
    }

    purchaseCancelHandler = () => {
        this.setState({
            isPurchasable: false
        })
    }

    purchaseContinueHandler = () => {
            const order  = {
                ingredients: this.state.ingredients,
                price: this.state.totalPrice,
                customer: {
                    name: 'Lalit Nagpal',
                    address: {
                        street: 'Kalas',
                        zipcode: '9999',
                        country: 'India'
                    },
                    email: 'xxx@yyy.com'
                },
                deliveryMethod: 'fastest'
            }
            this.setState({
                loading: true
            });
            axios.post('/order.json', order)
                .then( response => { 
                    this.setState({
                        loading: false, isPurchasable: false
                    })
                    console.log('Success, Response -> ' + response );
                } ).catch( error => {
                    this.setState({
                        loading: false, isPurchasable: false
                    })
                    console.log('Something went wrong -> '+error);
                } );
            setTimeout(() => {
                console.log('done')
            }, 5000);
        }

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
            ingredients: updateIngredients,
        });
        this.updatePurchaseState(updateIngredients);
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
        let newPrice = 0;
        if (oldPrice > 0) {
            newPrice = oldPrice - priceAddition;
        }
        this.setState({
            totalPrice: newPrice,
            ingredients: updateIngredients
        });
        this.updatePurchaseState(updateIngredients);
    }

    render() {

        const disabledInfo = {          
            //basically copied in a immutable way
            ...this.state.ingredients
        };

        // [ salad: 1, meat:0 ...] to [salad: false, meat: true]
        Object.keys(disabledInfo)
            .map( (ingredientKey) => {
                disabledInfo[ingredientKey] = disabledInfo[ingredientKey] <= 0;
                return disabledInfo;
             });


        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients could not be loaded</p> : <Spinner />;

        if (this.state.ingredients) {
            burger = (
                    <div className={classes.BurgerControlList}>
                        <Burger ingredients={this.state.ingredients}/>
                        <BuildControlList 
                            ingredientAdded = {this.addIngredientHandler}
                            ingredientDeleted = {this.deleteIngredientHandler}
                            disabledInfo = {disabledInfo}
                            canPurchase = { this.state.isPurchasable }
                            ordered = { this.purchaseHandler }
                            />
                    </div>
            );
            orderSummary = <OrderSummary 
                                ingredients={this.state.ingredients}
                                cancelHandler = {this.purchaseCancelHandler}
                                continueHandler = {this.purchaseContinueHandler}
                                price = { this.state.totalPrice }>
                        </OrderSummary>;                    
        }

        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        return( 
            <Auxilliary>
                <Modal show={this.state.isPurchasable} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Auxilliary>
        );
    }
}

export default WithErrorHandler(BurgerBuilder, axios);
