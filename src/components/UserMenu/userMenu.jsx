import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authSelectors } from "../../redux/auth";
import { authOperations } from "../../redux/auth";
import { UserBar, Greetings, Name, LogOutButton } from "./userMenu.styled";

const UserMenu = () => {
  const userEmail = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();
  return (
    <UserBar>
      <Greetings>
        Hello, <Name>{userEmail && `${userEmail}`}</Name>
      </Greetings>
      <LogOutButton
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        LogOut
      </LogOutButton>
    </UserBar>
  );
};

export default UserMenu;
