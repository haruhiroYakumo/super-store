import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
// Components
import ReactNavigation from './src/ReactNavigation/ReactNavigation';
import rootReducer from './src/Redux/reducers';

// Add redux-saga middleware
const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(rootSaga);

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
