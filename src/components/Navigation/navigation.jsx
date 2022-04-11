import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import { NavLink } from "react-router-dom";
import { Nav } from "./navigation.styled";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Nav>
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            display: "flex",
            alignItems: "center",
            height: "50px",
            fontSize: "24px",
            color: isActive ? "red" : "white",
            marginRight: "20px",
          };
        }}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          style={({ isActive }) => {
            return {
              display: "flex",
              alignItems: "center",
              height: "50px",
              fontSize: "24px",
              color: isActive ? "red" : "white",
              marginRight: "20px",
            };
          }}
        >
          PhoneBook
        </NavLink>
      )}
    </Nav>
  );
};

export default Navigation;
