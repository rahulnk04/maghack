import React, { Fragment } from "react";

import Main from "../Main";

const ReactMain = () => {
  const data = {
    img: "https://rahulnk04.github.io/myapi-v1/questions/images/logos/react.png",
    name: "React",
    path: "react",
    desc: "React is an open-source front-end JavaScript library that is used for building user interfaces, especially for single-page applications. It is used for handling view layer for web and mobile apps. React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012. React JS is a JavaScript library used in web development to build interactive elements on websites.",
  };
  return (
    <Fragment>
      <Main data={data} />
    </Fragment>
  );
};

export default ReactMain;
