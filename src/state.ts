export type FormInProgress = {
    type: 'form_in_progress';
    name?: string,
    amount?: number,
    currency?: string
}

type FormSubmitted = {
    type: 'form_submitted',
    shared: boolean
}

export type FormState = FormInProgress | FormSubmitted;
