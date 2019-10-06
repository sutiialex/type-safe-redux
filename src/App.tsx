import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './App.css';
import reducer from "./reducer";
import AppContainer from "./container/AppContainer";

const store = createStore(reducer);

const App = () => (
    <Provider store={store}>
        <AppContainer/>
    </Provider>
);

export default App;
