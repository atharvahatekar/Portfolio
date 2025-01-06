import React from "react";
import { NavBarDiv, NavItems, NavItem, Logo } from "styles/Navbar";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import logoName from "assets/images/Logo.png";

const menus = [
  { id: 0, name: "Home", css: "home" },
  { id: 1, name: "About", css: "about" },
  { id: 2, name: "Skills", css: "skills" },
  { id: 3, name: "Publication", css: "Publication" },
  { id: 4, name: "Projects", css: "projects" },
  { id: 4, name: "Educations", css: "education" },
  
];

function Navbar() {
  return (
    <NavBarDiv>
      <Logo onClick={() => scroll.scrollToTop()}>
        <img src={logoName} alt="Atharva Hatekar" />
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
