import React from "react";
import {AmountComponent} from "./AmountComponent";

type FormProps = {
    title: string
    onSubmit: () => void;
    onNameChange: (name: string) => void;
    onAmountChange: (currency: string | undefined, amount: number | undefined) => void;
    name?: string;
    amount?: number;
    currency?: string;
    submitEnabled: boolean;
}

export default ({name, title, onSubmit, onNameChange, onAmountChange, currency, amount, submitEnabled}: FormProps) => (
    <div>
        <h1>{title}</h1>
        <div>Your name:<input value={name} onChange={e => onNameChange(e.target.value)}/></div>
        <div>Amount to donate:<AmountComponent onChange={onAmountChange} currency={currency} amount={amount}/></div>
        <button disabled={!submitEnabled} type="submit" onClick={onSubmit}>Donate</button>
    </div>
);