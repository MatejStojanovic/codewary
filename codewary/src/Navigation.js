import React, { useState } from "react";
import logo from "./img/logo.png";
import scrollToComponent from "./ScrollToElement";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

const Navigation = ({ services }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="lg" className="navigation">
        <NavbarBrand href="/">
          {" "}
          <img src={logo} alt="codewary logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar classname="navigation__test">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">codewary</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollToComponent("services")}>
                <span>Services </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollToComponent("about")}>
                <span>About us </span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="mailto:davstojanovic@gmail.com">
                {" "}
                <span> Contact</span>
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText className="navigation__hamb"></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
