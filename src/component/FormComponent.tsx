import React from "react";
import {AmountComponent, OnAmountChange} from "./AmountComponent";

type OnNameChange = (name: string) => void;

export type OwnFormProps = {
    title: string
};

type FormProps = {
    onSubmit: () => void;
    onNameChange: OnNameChange;
    onAmountChange: OnAmountChange;
    name?: string;
    amount?: number;
    currency?: string;
    submitEnabled: boolean;
} & OwnFormProps

export const Form: React.FC<FormProps> = ({title, onSubmit, onNameChange, onAmountChange, currency, amount, submitEnabled}: FormProps) => {
    return (
        <div>
            <h1>{title}</h1>
            <div>Your name:<input onChange={e => onNameChange(e.target.value)}/></div>
            <div>Amount to donate:<AmountComponent onChange={onAmountChange} currency={currency} amount={amount}/></div>
            <button disabled={!submitEnabled} type="submit" onClick={onSubmit}>Donate</button>
        </div>
    );
};