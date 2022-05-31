import React, { Fragment } from "react";
import "./Profile.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
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
          <div>Associate Technology Level 2 - Publicis Sapient</div>
          <div>
            <a
              href="https://github.com/rahulnk04"
              target={"_blank"}
              rel="noreferrer"
            >
              <GitHubIcon fontSize="small" role="button" />
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/rahulnk04/"
              target={"_blank"}
              rel="noreferrer"
            >
              <LinkedInIcon fontSize="small" role="button" />
            </a>{" "}
            <a
              href="https://www.facebook.com/rahulnk04"
              target={"_blank"}
              rel="noreferrer"
            >
              <FacebookIcon
                fontSize="small"
                role="button"
                target={"_blank"}
                rel="noreferrer"
              />
            </a>{" "}
            <a
              href="https://twitter.com/rahulnk04"
              target={"_blank"}
              rel="noreferrer"
            >
              <TwitterIcon fontSize="small" role="button" />
            </a>
          </div>
        </h1>
      </div>
    </Fragment>
  );
};

export default Profile;
