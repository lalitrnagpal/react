import React from 'react';
import Auxilliary from '../../../../hoc/Auxilliary';
import classes from './OrderSummary.css';
import Button from '../../../UI/Button/Button';

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
            <div className={classes.Price}>
                    &nbsp;&nbsp;Burger Price: &nbsp;&nbsp;
                    <strong>
                        { Math.abs( props.price.toFixed(2) )}
                    </strong>
                    &nbsp;&nbsp;
            </div>
            <p>Continue to Checkout?</p>
            <div className={classes.ButtonDiv}>
                <Button btnType='Danger' clicked={props.cancelHandler}>Cancel</Button> &nbsp; &nbsp;
                <Button btnType='Success' clicked={props.continueHandler}>Continue</Button>
            </div>
        </Auxilliary>
    );
}

export default OrderSummary;