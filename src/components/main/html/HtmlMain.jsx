import React, { Fragment } from "react";
import Main from "../Main";

const HtmlMain = () => {
  const data = {
    img: "https://rahulnk04.github.io/myapi-v1/questions/images/logos/html5.png",
    name: "HTML",
    path: "html",
    desc: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.\n\nHyperText Markup Language (HTML) is the basic scripting language used by web browsers to render pages on the world wide web. HyperText allows a user to click a link and be redirected to a new page referenced by that link.",
  };
  return (
    <Fragment>
      <Main data={data} />
    </Fragment>
  );
};

export default HtmlMain;
