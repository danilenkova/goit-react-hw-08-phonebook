import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "./components/Appbar";
import Container from "./components/Container";
import Main from "./components/Main";
import { authOperations, authSelectors } from "./redux/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader";

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getLoadingUser);

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <>
          <AppBar />
          <Main />
          <ToastContainer />
        </>
      )}
    </Container>
  );
}

export default App;
