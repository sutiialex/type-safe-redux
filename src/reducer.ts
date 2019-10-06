import {Reducer} from "redux";
import {FormAction} from "./actions";
import {FormState} from "./state";

const reducer: Reducer<FormState, FormAction> = (state = {type: 'form_in_progress'}, action): FormState => {
    switch (state.type) {
        case "form_in_progress": {
            switch (action.type) {
                case "name_change":
                    return {...state, name: action.name};
                case "amount_change":
                    return {...state, amount: action.amount, currency: action.currency};
                case "submit":
                    return {type: "form_submitted", shared: false};
                default:
                    return state;
            }
        }
        case "form_submitted": {
            switch (action.type) {
                case "share":
                    return {...state, shared: true};
                default:
                    return state;
            }
        }
    }
};

export default reducer;