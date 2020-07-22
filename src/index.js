import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


const globalState = {
  firstLoad: true,
  listRepo: [],
  username: '',
  loading: false,
  resultStatus: true
}


const rootReducer = ( state = globalState, action ) => {
  switch(action.type) {
      case 'LIST_GITHUB':
          return {
              ...state,
              firstLoad: false,
              listRepo: action.listRepo,
              username: action.username 
          }
      case 'LOADING':
        return {
            ...state,
            resultStatus: action.resultStatus,
            loading: action.loading,
        }
  }
  return state;
}

const reduxStore = createStore(rootReducer);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
