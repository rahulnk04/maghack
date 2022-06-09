import React, { Fragment } from "react";
import Main from "../Main";

const JavaScriptMain = () => {
  const data = {
    img: "https://rahulnk04.github.io/myapi-v1/questions/images/logos/javascript.png",
    name: "JavaScript",
    path: "javascript",
    desc: "JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user.\nJavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.",
  };
  return (
    <Fragment>
      <Main data={data} />
    </Fragment>
  );
};

export default JavaScriptMain;
