import React from "react";
import ReactDom from "react-dom";
import { Header } from "semantic-ui-react";

const InformationSection = (props) => {
  return (
    <div className="info-container">
      <Header as="h1" image={props.image} size="large" content={props.header} />
      <p className="text">{props.children}</p>
    </div>
  );
};

export default InformationSection;
