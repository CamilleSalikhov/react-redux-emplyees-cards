import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import history from './history'
import Container from './Container';
import {store} from './reduxRelated/reduxStore'

export default function App() {
    return (
        <div>
            <Provider store = {store}>
            <Router history={history}>
            <Container />
            </Router>
            </Provider>
        </div>
    )
}
