import React from "react";
import { createStore , combineReducers} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

export default () => {
  return createStore(combineReducers({
    main: (state = {}) => state
  }), composeWithDevTools());
}