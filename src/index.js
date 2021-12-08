import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Provider} from 'react-redux'
import { composeWithDevTools } from "redux-devtools-extension";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import contactReducer from "./components/redux/reducers/contactRecducers";

const store = createStore(contactReducer,composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
      <Router>
        <App />
      </Router>
   </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


