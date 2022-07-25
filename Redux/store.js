import React from 'react'
import { createStore } from 'redux';
import rootReducer from './Reducers';
const configureStore = (initialState) => {
  
  const store=createStore(rootReducer,initialState)
    return store;
  
}

export default configureStore