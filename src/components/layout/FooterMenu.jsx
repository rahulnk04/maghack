import React, { Fragment } from "react";
import "./Footer.scss";

const FooterMenu = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="footer-inner">
          <div className="copy-right">
            Copyright &copy; 2022 MagHack Learning Pvt Ltd
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default FooterMenu;
