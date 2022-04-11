import { NavLink } from "react-router-dom";
import { NavList, NavItem } from "./authNav.styled";

const AuthNav = () => {
  return (
    <NavList>
      <NavItem>
        <NavLink
          to="/register"
          style={({ isActive }) => {
            return {
              display: "flex",
              alignItems: "center",
              height: "50px",
              color: isActive ? "red" : "white",
            };
          }}
        >
          Sign Up
        </NavLink>
      </NavItem>
      <li>
        <NavLink
          to="/login"
          style={({ isActive }) => {
            return {
              display: "flex",
              alignItems: "center",
              height: "50px",
              color: isActive ? "red" : "white",
            };
          }}
        >
          Sing In
        </NavLink>
      </li>
    </NavList>
  );
};

export default AuthNav;
