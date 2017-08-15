import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './src/configureStore';

import { App } from 'src/App';

ReactDOM.render(
    <Provider store={ store }>
        <Router basename='/'>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('app')
);
