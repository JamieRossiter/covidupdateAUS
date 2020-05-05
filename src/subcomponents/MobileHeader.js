//React
import React from "react";
import ReactDOM from "react-dom";
import { Image, Responsive, Label, Segment } from "semantic-ui-react";
//Image Files
import coronaLogo from "../img/covidlogo_mobile.png";

const MobileHeader = () => {
  return (
    <Responsive maxWidth={629} className="logo-mobile">
      <Segment compact basic padded>
        <Image spaced src={coronaLogo} />
        <Label pointing style={{ textAlign: "center" }}>
          Australian Coronavirus Data, News and Information.
        </Label>
      </Segment>
    </Responsive>
  );
};

export default MobileHeader;
