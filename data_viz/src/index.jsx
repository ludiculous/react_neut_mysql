import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reducers from "./reducers";
import 'semantic-ui-css/semantic.min.css';
import './assets/styles/index.css';
import './assets/styles/index.scss';

import App from './containers/App';

const history = createHistory();
const middleware = [thunk, routerMiddleware(history)];
const store = createStore(reducers, {}, applyMiddleware(...middleware));
const root = document.getElementById('root');

const load = () => render((
  <AppContainer>
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Provider>
  </AppContainer>
), root);

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept(App, load);
}

load();
