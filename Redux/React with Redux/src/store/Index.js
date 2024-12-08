import { createStore } from "redux";

// initial value
const INITIAL_VALUE = {
    counter: 0
}
// creating reducer function
const counterReducer = (store=INITIAL_VALUE, action) => {
    let newStore = store;
    // to prevent the default first reducer call
    if (action.type === 'INCREMENT') {
        newStore = { counter: store.counter + 1 };
    }
    else if (action.type === 'DECREMENT') {
        newStore = { counter: store.counter - 1 };
    }
    else if (action.type === 'ADDITION') {
        newStore = { counter: store.counter + Number(action.payload.num) };
    }
    else if (action.type === 'SUBTRACTION') {
        newStore = { counter: store.counter - Number(action.payload.num) };
    }
    return newStore;
}
// creating store
const counterStore = createStore(counterReducer);

export default counterStore;