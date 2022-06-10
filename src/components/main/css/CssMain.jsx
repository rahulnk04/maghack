import React, { Fragment } from "react";
import Main from "../Main";

const CssMain = () => {
  const data = {
    img: "https://rahulnk04.github.io/myapi-v1/questions/images/logos/css3.png",
    name: "CSS",
    path: "css",
    desc: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.\n\nCSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.\n\nThe purpose of CSS is to provide Web developers with a standard way to define, apply, and manage sets of style characteristics. CSS provides these capabilities through a technical model based on a hierarchical scope of effect, the separation of style from content, and a well-defined set of published standards.",
  };
  return (
    <Fragment>
      <Main data={data} />
    </Fragment>
  );
};

export default CssMain;
