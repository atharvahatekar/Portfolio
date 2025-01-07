import React from "react";
import { NavBarDiv, NavItems, NavItem, Logo } from "styles/Navbar";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const menus = [
  { id: 0, name: "Home", css: "home" },
  { id: 1, name: "About", css: "about" },
  { id: 2, name: "Skills", css: "skills" },
  { id: 2, name: "Experience", css: "experience" },
  { id: 4, name: "Educations", css: "education" },
  { id: 4, name: "Projects", css: "project" },
  { id: 3, name: "Publication", css: "Publication" },
];

function Navbar() {
  return (
    <NavBarDiv>
      <Logo onClick={() => scroll.scrollToTop()}>
        <p> Atharva Hatekar</p>
        <div></div>
      </Logo>

      <NavItems>
        {menus.map((item) => (
          <Link
            key={item.id}
            activeClass="active"
            to={item.css}
            spy={true}
            smooth={true}
            duration={500}
          >
            <NavItem key={item.id}>{item.name}</NavItem>
          </Link>
        ))}
      </NavItems>
    </NavBarDiv>
  );
}

export default Navbar;
