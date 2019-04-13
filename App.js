import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
// Components
import ReactNavigation from './src/ReactNavigation/ReactNavigation';
import rootReducer from './src/Redux/reducers';
import rootSaga from './src/Redux/saga';

// Add redux-saga middleware
const sagaMiddleware = createSagaMiddleware();
// Combine reducers with provided middleware
const createStoreWithMiddleware = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Redux-saga root saga
sagaMiddleware.run(rootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware}>
        <ReactNavigation/>
      </Provider>
    );
  }
}

export default App;
