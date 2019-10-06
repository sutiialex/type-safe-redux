import React from "react";

export type OnAmountChange = (currency: string | undefined, amount: number | undefined) => void
export type AmountProps = {
    onChange: OnAmountChange,
    currency?: string,
    amount?: number
};

export const AmountComponent: React.FC<AmountProps> = ({onChange, currency, amount}) => {
    const handleCurrencyChange = (c: string) => onChange(c, amount);
    const handleAmountChange = (a: string) => onChange(currency, parseFloat(a));

    return (
        <>
            <select value={currency} onChange={e => handleCurrencyChange(e.target.value)}>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
            </select>
            <input value={amount} onChange={e => handleAmountChange(e.target.value)}/>
        </>
    );
};