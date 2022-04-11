import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";
import Loader from "../Loader";

const HomePageView = lazy(() =>
  import("../../views/HomePageView" /*webpackChunkName: "home-page" */)
);
const ContactsView = lazy(() =>
  import("../../views/ContactsView" /*webpackChunkName: "contacts-page" */)
);
const AuthView = lazy(() =>
  import("../../views/AuthView" /*webpackChunkName: "auth-page" */)
);
const LoginView = lazy(() =>
  import("../../views/LoginView" /*webpackChunkName: "login-page" */)
);
const NotFoundPageView = lazy(() =>
  import("../../views/NotFoundPageView" /*webpackChunkName: "not-found-page" */)
);

const Main = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePageView />} />
        <Route
          path="register"
          element={
            <PublicRoute redirectTo="/contacts">
              <AuthView />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute redirectTo="/contacts">
              <LoginView />
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPageView />} />
      </Routes>
    </Suspense>
  );
};

export default Main;
