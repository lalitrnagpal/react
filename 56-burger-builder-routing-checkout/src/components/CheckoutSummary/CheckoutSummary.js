import React from 'react';
import classes from './CheckoutSummary.css'
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';

const checkoutSummary = (props) => {

    return(
        <div className={classes.CheckoutSummary}>
            <h1>Hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto', alignContent: 'center'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType='Danger' clicked={props.checkoutCancelled}>
                Cancel</Button>
            <Button 
                btnType='Success' clicked={props.checkoutContinued}>
                    Continue</Button>

        </div>
    );
}

export default checkoutSummary;