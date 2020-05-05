import React from "react";
import ReactDom from "react-dom";
import Profile from "../subcomponents/Profile.js";
import Nav from "./Nav.js";

//Footer Component located at the bottom of the page.
const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <Profile />
      </div>
    </React.Fragment>
  );
};
export default Footer;
