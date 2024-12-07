const redux = require('redux');

const INITIAL_VALUE = {
    counter: 0
}
// creating reducer
const reducer = (store = INITIAL_VALUE, action) => {
    let newStore = store;
    // to prevent the default first reducer call
    if (action.type === 'INCREMENT') {
        newStore = { counter: store.counter + 1 };
    }
    else if (action.type === 'DECREMENT') {
        newStore = { counter: store.counter - 1 };
    }
    else if (action.type === 'ADDITION') {
        newStore = { counter: store.counter + action.payload.number };
    }
    // console.log("Reducer Called",action);
    return newStore;
}
// creating store
const store = redux.createStore(reducer);

// creating subscriber
const subscriber = () => {
    // to get any state form the store
    const state = store.getState();
    console.log(state);
}
// method to get subscription
store.subscribe(subscriber);

// dispatching actions
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
// dispatching action with payload
store.dispatch({ type: 'ADDITION', payload: { number: 7 } })

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });