import React, { Fragment } from "react";
import "./Profile.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Tooltip from "@mui/material/Tooltip";
const Profile = () => {
  const profile = "rahulnk04";
  const MyData = [
    {
      link: `https://rahulnk04.github.io/portfolio/#/home`,
      icon: (
        <AccountCircleIcon className="myicn" fontSize="small" role="button" />
      ),
      title: "My Profile",
    },
    {
      link: `https://github.com/${profile}`,
      icon: <GitHubIcon className="myicn" fontSize="small" role="button" />,
      title: "GitHub Profile",
    },
    {
      link: `https://www.linkedin.com/in/${profile}`,
      icon: <LinkedInIcon className="myicn" fontSize="small" role="button" />,
      title: "LinkedIn Profile",
    },
    {
      link: `https://www.facebook.com/${profile}`,
      icon: <FacebookIcon className="myicn" fontSize="small" role="button" />,
      title: "Facebook Profile",
    },
    {
      link: `https://twitter.com/${profile}`,
      icon: <TwitterIcon className="myicn" fontSize="small" role="button" />,
      title: "Twitter Profile",
    },
  ];
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
            {MyData.map((d, i) => (
              <a key={i} href={d.link} target={"_blank"} rel="noreferrer">
                <Tooltip title={d.title}>{d.icon}</Tooltip>{" "}
              </a>
            ))}
          </div>
        </h1>
      </div>
    </Fragment>
  );
};

export default Profile;
