import React, { Fragment } from "react";
import "./Profile.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Tooltip from "@mui/material/Tooltip";
const Profile = () => {
  return (
    <Fragment>
      {" "}
      <div className="home-container">
        <div className="cover-photo">
          <div className="graph"></div>
          <ul className="timeline"></ul>
        </div>
        <div className="logo"></div>
        <h1 className="title">
          Rahul Ranjan Nayak
          <div>Associate Technology Level 2 - Publicis Sapient </div>
          <div>Former Associate Professional - DXC Technology</div>
          <div>
            <a
              href="https://rahulnk04.github.io/portfolio/#/home"
              target={"_blank"}
              rel="noreferrer"
            >
              <Tooltip title="My Profile">
                <AccountCircleIcon className="myicn" fontSize="small" role="button" />
              </Tooltip>
            </a>{" "}
            <a
              href="https://github.com/rahulnk04"
              target={"_blank"}
              rel="noreferrer"
            >
              <Tooltip title="Github Profile">
                <GitHubIcon className="myicn" fontSize="small" role="button" />
              </Tooltip>
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/rahulnk04/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Tooltip title="LinkedIn Profile">
                <LinkedInIcon className="myicn" fontSize="small" role="button" />
              </Tooltip>
            </a>{" "}
            <a
              href="https://www.facebook.com/rahulnk04"
              target={"_blank"}
              rel="noreferrer"
            >
              <Tooltip title="Facebook Profile">
                <FacebookIcon className="myicn" fontSize="small" role="button" />
              </Tooltip>
            </a>{" "}
            <a
              href="https://twitter.com/rahulnk04"
              target={"_blank"}
              rel="noreferrer"
            >
              <Tooltip title="Twitter Profile">
                <TwitterIcon className="myicn" fontSize="small" role="button" />
              </Tooltip>
            </a>
          </div>
        </h1>
      </div>
    </Fragment>
  );
};

export default Profile;
