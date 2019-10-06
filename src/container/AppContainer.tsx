import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import {FormAction} from "../actions";
import {FormState} from "../state";
import AppComponent from "../component/AppComponent";

export const mapDispatchToProps = (dispatch: Dispatch<FormAction>) =>
    bindActionCreators({
        onSubmit: () => ({type: 'submit'}),
        onNameChange: name => ({type: 'name_change', name}),
        onAmountChange: (currency, amount) => ({
            type: 'amount_change', amount, currency
        }),
        onShare: () => ({type: "share"})
    }, dispatch);

const mapStateToProps = (state: FormState = {type: "form_in_progress"}) => ({
    state: state
});

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);