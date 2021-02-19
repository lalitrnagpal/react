import React, {Component} from 'react';
import Auxilliary from '../../hoc/Auxilliary/Auxilliary';
import Modal from '../../components/UI/Modal/Modal';
import axios from 'axios';
import classes from './WithErrorHandler.css';

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {

        state = {
            error: null
        }

        componentDidMount() {
            axios.interceptors.request.use( request => {
                this.setState({
                    error: null
                });
                return request;
            });
            axios.interceptors.response.use( response => response, error => {
                this.setState({
                    error: error
                });
            });
        }

        errorConfirmHandler = () => {
            this.setState({
                error: null
            });
        }
        
        render() {
            return <Auxilliary>
                        <Modal 
                        show={this.state.error} 
                        modalClosed={this.errorConfirmHandler}>
                            {this.state.error ? this.state.error.message : null }
                        </Modal>
                        <WrappedComponent {...this.props}></WrappedComponent>
                    </Auxilliary>
        }

    }

};

export default withErrorHandler;
