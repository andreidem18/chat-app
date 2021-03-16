import ReactDOM from "react-dom";
import {createStore} from 'redux';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from "./App";
import 'semantic-ui-css/semantic.min.css';

const store = createStore(rootReducer, composeWithDevTools());

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  rootElement
);
