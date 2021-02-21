import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        const order  = {
            ingredients: this.props.ingredients,
            price: this.props.price,
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
        };

        this.setState({
            loading: true
        });

        axios.post('/order.json', order)
            .then( response => { 
                this.setState({
                    loading: false
                })
                console.log('Success, Response -> ' + response );
                this.props.history.push('/');
            } ).catch( error => {
                this.setState({
                    loading: false
                })
                console.log('Something went wrong -> '+error);
        } );

        setTimeout(() => {
            console.log('done')
        }, 5000);
    }

    render() {
        let form = (
                    <div className={classes.ContactData}>
                        <h4>Enter your Contact Data</h4>
                        <form>
                            <input className={classes.Input} type='text' name='name' placeholder='Your Name'/>
                            <input className={classes.Input} type='text' name='email' placeholder='EMail'/>
                            <input className={classes.Input} type='text' name='street' placeholder='Street'/>
                            <input className={classes.Input} type='text' name='postalCode' placeholder='Postal Code'/>
                            <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
                        </form>            
                    </div>
        );
        if (this.state.loading === true) {
            form = <Spinner/>
        }
        return form;
    }

}

export default ContactData;