import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import { HomePage, Name } from "./home.styled";

const Home = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userName = useSelector(authSelectors.getUserName);
  return (
    <HomePage>
      {isLoggedIn ? (
        <p>
          Hello, <Name>{userName}</Name>.<br />
          Welcome back to your{" "}
          <NavLink
            to="contacts"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Phonebook
          </NavLink>
        </p>
      ) : (
        <p>
          Hello.
          <br />
          Welcome to the Phonebook.
          <br />
          Here you can store your contacts.
          <br />
          Please{" "}
          <NavLink
            to="/register"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Sign Up
          </NavLink>{" "}
          or{" "}
          <NavLink
            to="/login"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Log In
          </NavLink>
          .
        </p>
      )}
    </HomePage>
  );
};

export default Home;
