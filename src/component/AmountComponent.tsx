import React from "react";

export type AmountProps = {
    onChange: (currency: string | undefined, amount: number | undefined) => void,
    currency?: string,
    amount?: number
};

export const AmountComponent: React.FC<AmountProps> = ({onChange, currency, amount}) => {
    const handleCurrencyChange = (c: string) => onChange(c, amount);
    const handleAmountChange = (amtStr: string) => {
        const amt = parseFloat(amtStr);
        if (!isNaN(amt))
            onChange(currency, amt);
    };

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