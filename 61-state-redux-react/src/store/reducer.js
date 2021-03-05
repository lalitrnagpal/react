const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter > 0 ? state.counter - 1 : state.counter
        }
    }
    if (action.type === 'INCREMENTBY5') {
        return {
            counter: state.counter + 5
        }
    }
    if (action.type === 'DECREMENTBY5') {
        return {
            counter: state.counter >= 5 ? state.counter - 5 : state.counter
        }
    }
    return state;
}

export default reducer;