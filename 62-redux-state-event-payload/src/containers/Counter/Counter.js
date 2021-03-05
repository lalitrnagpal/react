import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions'

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label={actionTypes.INCREMENT} clicked={this.props.onIncrementCounter} />
                <CounterControl label={actionTypes.DECREMENT} clicked={this.props.onDecrementCounter}  />
                <CounterControl label={actionTypes.INCREMENTBY5} clicked={this.props.onAddFiveCounter}  />
                <CounterControl label={actionTypes.DECREMENTBY5} clicked={this.props.onSubtractFiveCounter}  />
                <hr/>
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    { 
                        this.props.storedResults.map(
                            strResult => (
                                <li key={strResult.id} onClick={ () => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li> 
                            )
                        )
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT, val: 1}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT, val: 1}),
        onAddFiveCounter: () => dispatch({type: actionTypes.INCREMENTBY5, val: 5}),
        onSubtractFiveCounter: () => dispatch({type: actionTypes.DECREMENTBY5, val: 5}),
        onStoreResult: () => dispatch({type: actionTypes.STORE_RESULT}), 
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);