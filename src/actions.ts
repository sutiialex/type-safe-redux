type SubmitAction = { type: 'submit' }
type NameChangeAction = { type: 'name_change', name: string }
type AmountChangeAction = { type: 'amount_change', amount?: number, currency?: string }
type ShareAction = { type: 'share' }

export type FormAction = SubmitAction | NameChangeAction | AmountChangeAction | ShareAction
