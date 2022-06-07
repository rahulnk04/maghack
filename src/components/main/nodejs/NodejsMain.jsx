import React, { Fragment } from "react";
import Main from "../Main";

const NodejsMain = () => {
  const data = {
    img: "https://rahulnk04.github.io/myapi-v1/questions/images/logos/nodejs.png",
    name: "NodeJS",
    path: "nodejs",
    desc: "Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.",
  };
  return (
    <Fragment>
      <Main data={data} />
    </Fragment>
  );
};

export default NodejsMain;
