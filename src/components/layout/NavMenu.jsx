import React, { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Logo from "../../assets/img/MainLogo.png";
import { useNavigate } from "react-router-dom";

const NavMenu = () => {
  let navigate = useNavigate();
  return (
    <Fragment>
      <AppBar position="sticky" sx={{ background: "#24292f" }}>
        <Toolbar variant="dense">
          <img src={Logo} height={45} alt="MagHack Learning" />
          <Button
            sx={{ color: "#ffffff" }}
            size="small"
            onClick={() => navigate("/home")}
          >
            Home
          </Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default NavMenu;
