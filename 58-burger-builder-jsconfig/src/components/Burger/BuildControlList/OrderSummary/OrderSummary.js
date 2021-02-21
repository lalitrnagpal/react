import React, {Component} from 'react';
import Auxilliary from '../../../../hoc/Auxilliary/Auxilliary';
import classes from './OrderSummary.css';
import Button from '../../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate(){
        console.log('componentWillUpdate() OrderSummary');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
                                    .map( ingKey => {
                                        return <li key={ingKey}>
                                                    <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {this.props.ingredients[ingKey]}
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
                            { Math.abs( this.props.price.toFixed(2) )}
                        </strong>
                        &nbsp;&nbsp;
                </div>
                <p>Continue to Checkout?</p>
                <div className={classes.ButtonDiv}>
                    <Button btnType='Danger' clicked={this.props.cancelHandler}>Cancel</Button> &nbsp; &nbsp;
                    <Button btnType='Success' clicked={this.props.continueHandler}>Continue</Button>
                </div>
            </Auxilliary>
        );
    }
}

export default OrderSummary;