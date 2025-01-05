import React from "react";
import { NavBarDiv, NavItems, NavItem, Logo } from "styles/Navbar";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const menus = [
  { id: 0, name: "Home", css: "home" },
  { id: 1, name: "About", css: "about" },
  { id: 2, name: "Skills", css: "skills" },
  { id: 3, name: "Publication", css: "Publication" },
  { id: 4, name: "Projects", css: "projects" },
];

function Navbar() {

  return (
    <NavBarDiv>
      <Logo onClick={() => scroll.scrollToTop()}>
        <span class="grey-color"> &lt;</span>
        <span class="logo-name">Atharva Hatekar</span>
        <span class="grey-color">/&gt;</span>
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
