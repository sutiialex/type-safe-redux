import React from "react";
import {FormInProgress, FormState} from "../state";
import ThankYouComponent from "./ThankYouComponent";
import FormComponent from "./FormComponent";

type AppProps = {
    state: FormState,
    onSubmit: () => void;
    onNameChange: (name: string) => void;
    onAmountChange: (currency: string | undefined, amount: number | undefined) => void;
    onShare: () => void;
}

const showSubmit = (state: FormInProgress) => (
    state.currency !== undefined && state.amount !== undefined && state.name !== undefined
);

export default ({state, ...restProps}: AppProps) => (
    state.type === 'form_in_progress' ?
        <FormComponent
            title="Donation Form" {...state} {...restProps} submitEnabled={showSubmit(state)}/> :
        <ThankYouComponent {...restProps} shareEnabled={!state.shared}/>
);