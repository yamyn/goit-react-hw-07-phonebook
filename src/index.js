import React from 'react';
import ReactDOM from 'react-dom';

import 'material-design-icons/iconfont/material-icons.css';

import { Provider } from 'react-redux';
import App from './components/App/AppContainer';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root'),
);
