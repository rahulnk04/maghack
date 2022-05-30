import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Profile from "./Profile";
import NavMenu from "./NavMenu";
import { Outlet } from "react-router-dom";
import FooterMenu from "./FooterMenu";

const Wrapper = () => {
  return (
    <Fragment>
      <NavMenu />
      <Profile />
      <Box sx={{ p: 2, mt: 4, minHeight: "65vh" }}>
        <Outlet />
      </Box>
      <FooterMenu />
    </Fragment>
  );
};

export default Wrapper;
