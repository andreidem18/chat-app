import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from "./App";

const store = createStore(rootReducer, composeWithDevTools());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,  
  rootElement
);
