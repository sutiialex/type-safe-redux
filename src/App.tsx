import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './App.css';
import {reducer} from "./reducer";
import Form from "./container/FormContainer";

const store = createStore(reducer);

const App = () => (
    <Provider store={store}>
        <Form title={"Donation Form"}/>
    </Provider>
);

export default App;
