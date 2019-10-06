import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import {FormAction} from "../actions";
import {FormState} from "../state";
import {Form, OwnFormProps} from "../component/FormComponent";

export const mapDispatchToProps = (dispatch: Dispatch<FormAction>) =>
    bindActionCreators({
        onSubmit: () => ({type: 'submit'}),
        onNameChange: name => ({type: 'name_change', name}),
        onAmountChange: (currency, amount) => {
            console.log(currency);
            return ({type: 'amount_change', amount, currency});
        }
    }, dispatch);

const mapStateToProps = (state: FormState = {submitted: false}, ownProps: OwnFormProps) => ({
    name: state.name,
    currency: state.currency,
    amount: state.amount,
    submitEnabled: state.currency !== undefined && state.amount !== undefined && state.name !== undefined
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);