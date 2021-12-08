import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 center">
      <Link to="/" className="navbar-brand ml-5">
        <span style={{ marginLeft: "600px", color: "white" }}>
          <strong>React Redux Contact App</strong>
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
