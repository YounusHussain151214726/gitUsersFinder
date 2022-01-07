import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Nav = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjPW1K57Doil83uq6lm-YshZ0kApEo0airzQ&usqp=CAU"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Users
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
export default Nav;
