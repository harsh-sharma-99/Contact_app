import { ToastContainer } from "react-toastify";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <Home />} />

        <Route path="/add">
          <h1>
            <AddContact />
          </h1>
        </Route>

        <Route path="/edit/:id">
          <EditContact />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
