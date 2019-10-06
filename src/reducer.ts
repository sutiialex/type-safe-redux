import {Reducer} from "redux";
import {FormAction} from "./actions";
import {FormState} from "./state";

// create store
export const reducer: Reducer<FormState, FormAction> = (state = {submitted: false}, action) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case "name_change": {
            console.log(action);
            return {...state, name: action.name};
        }
        case "amount_change":
            return {...state, amount: action.amount, currency: action.currency};
        case "submit": {
            console.log(state);
            return {...state, submitted: true};
        }
    }
};