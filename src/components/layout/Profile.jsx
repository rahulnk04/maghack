import React, { Fragment } from "react";
import "./Profile.scss";

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
        </h1>
      </div>
    </Fragment>
  );
};

export default Profile;
