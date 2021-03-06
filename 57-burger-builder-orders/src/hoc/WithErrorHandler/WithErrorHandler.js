import React, {Component} from 'react';
import Auxilliary from '../../hoc/Auxilliary/Auxilliary';
import Modal from '../../components/UI/Modal/Modal';

const WithErrorHandler = (WrappedComponent, axios) => {

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

        componentWillUnmount(){
            console.log('Will unmount -> ' + this.reqInterceptor + this.resInterceptor);
            axios.interceptors.request
                .eject(this.reqInterceptor);
            axios.interceptors.request
                .eject(this.resInterceptor);
            console.log('Will unmount -> ' + this.reqInterceptor + this.resInterceptor);
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

export default WithErrorHandler;
