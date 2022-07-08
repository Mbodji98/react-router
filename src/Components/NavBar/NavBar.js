import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "activeLink" : "")}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) => (isActive ? "activeLink" : "")}
      >
        Services
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) => (isActive ? "activeLink" : "")}
      >
        Contacts
      </NavLink>
    </nav>
  );
}

export default NavBar;
