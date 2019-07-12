import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import Container from './Container';
import {store} from './Redux'

export default function App() {
    return (
        <div>
            <Provider store = {store}>
            <BrowserRouter>
            <Container />
            </BrowserRouter>
            </Provider>
        </div>
    )
}
