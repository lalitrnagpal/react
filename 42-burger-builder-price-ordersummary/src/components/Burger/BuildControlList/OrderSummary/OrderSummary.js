import React from 'react';
import Auxilliary from '../../../../hoc/Auxilliary';
import classes from './OrderSummary.css';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
                                .map( ingKey => {
                                    return <li key={ingKey}>
                                                <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}
                                            </li>
                                })
    return(
        <Auxilliary>
            <p className={classes.OrderTitle}>Your Order</p>
            Delicious Burger with following ingredients
            <ul>
                { ingredientSummary }
            </ul>
                <p className={classes.CheckoutTitle}>Continue to Checkout?</p>
        </Auxilliary>
    );
}

export default OrderSummary;