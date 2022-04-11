import { NavLink } from "react-router-dom";

import { NotFoundPage } from "./notFound.styled";

const NotFound = () => {
  return (
    <NotFoundPage>
      <p>
        404
        <br />
        Sorry, page not found
        <br />
        <NavLink to="/" style={{ color: "white", textDecoration: "underline" }}>
          Go to HOME
        </NavLink>
      </p>
    </NotFoundPage>
  );
};

export default NotFound;
