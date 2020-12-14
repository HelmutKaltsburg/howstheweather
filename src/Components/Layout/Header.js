import React from "react";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header style={{margin: 0}}>
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Navbar.Brand>How's the Weather?</Navbar.Brand>
      </Navbar>
    </header>
  );
};

export default Header;
