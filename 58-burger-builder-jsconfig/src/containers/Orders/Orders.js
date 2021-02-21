import React, {Component} from 'react';
import classes from './Orders.css'
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/order.json')
            .then( res => {
                const fetchOrders = [];
                for (let key in res.data) {
                    fetchOrders.push({
                        ...res.data[key], 
                        id: key
                    });
                }
                console.log(fetchOrders);
                this.setState({
                    loading: false,
                    orders: fetchOrders
                })
            })
            .catch(error => {
                this.setState({
                    loading: false
                })
            })
    }

    render() {
        return (
            <div> {
                this.state.orders.map( order => (
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                    />
                ))
            }
            </div>
        );
    }

}

export default WithErrorHandler(Orders, axios);