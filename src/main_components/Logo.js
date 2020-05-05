//React
import React from "react";
import ReactDOM from "react-dom";
import { Segment, Image, Responsive, Label } from "semantic-ui-react";
//Image Files
import coronaLogo from "../img/covidupdate_logo.png";

const Logo = () => {
  return (
    <Responsive minWidth={629} className="logo">
      <Segment basic padded>
        <Image spaced src={coronaLogo} />
        <Label style={{ textAlign: "center" }} attached="bottom">
          Australian Coronavirus Data, News and Information.
        </Label>
      </Segment>
    </Responsive>
  );
};

export default Logo;
