import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import Header from "../Header";
import UserMenu from "../UserMenu";
import AuthMenu from "../AuthNav";
import Navigation from "../Navigation";

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </Header>
  );
};

export default AppBar;
