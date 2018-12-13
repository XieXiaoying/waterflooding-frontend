import React, {Component} from 'react';
import { Provider } from 'react-redux';
import Header from './components/Navbar/';
import Sidebar from './components/Sidebar/';
import Content from './components/Content/';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk'
import {createStore,applyMiddleware} from 'redux'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header />
                <div className="contentBody">
                    <Sidebar />
                    <Content />
                </div>
            </Provider>
        );
    }
}

// Create the store with the redux-thunk middleware, which allows us
// to do asynchronous things in the actions
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);
// Make reducers hot reloadable, see http://stackoverflow.com/questions/34243684/make-redux-reducers-and-other-non-components-hot-loadable
if (module.hot) {
    module.hot.accept('./reducers/rootReducer', () => {
        const nextRootReducer = require('./reducers/rootReducer').default;
        store.replaceReducer(nextRootReducer);
    });
}
