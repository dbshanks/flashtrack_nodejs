import React from "react";
import { Navigation } from "../Navigation/Navigation";
import { withRouter, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <Navigation />}
      <main>{children}</main>
    </>
  );
};

export default withRouter(Layout);
