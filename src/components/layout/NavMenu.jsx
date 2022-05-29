import React, { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/img/MainLogo.png";

const NavMenu = () => {
  return (
    <Fragment>
      <AppBar position="sticky" sx={{ background: "#24292f" }}>
        <Toolbar variant="dense">
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <img src={Logo} height={45} alt="MagHack Learning" />
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default NavMenu;
