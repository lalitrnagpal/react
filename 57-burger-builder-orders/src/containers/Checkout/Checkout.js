import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import classes from './Checkout.css';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component {

    state = {
        ingredients : {},
        price: 0
    };

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()){
            if (param[0] === 'price') {
                price = param[1];
            } else {
                // ['salad', 1]
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({
            ingredients: ingredients,
            price: price
        });
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () =>  {
        this.props.history.replace('/checkout/contact-data');
    }    

    render() {
        return (
            <div style={{alignItems: 'center'}}>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
                    <br/>
                    <Route 
                        path={this.props.match.path + '/contact-data'}
                        render = {(props) => ( <ContactData ingredients={this.state.ingredients} 
                                                       price={this.state.price}
                                                       {...props}/> 
                                )}/>
            </div>
        );
    }
}
export default Checkout;