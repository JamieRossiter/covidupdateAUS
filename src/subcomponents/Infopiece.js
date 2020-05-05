import React from "react";
import ReactDom from "react-dom";
import { Header, Segment, Loader, Dimmer } from "semantic-ui-react";

const Infopiece = (props) => {
  return (
    <Dimmer.Dimmable
      as={Segment}
      dimmed={props.isLoading ? true : false}
      textAlign="center"
      color={props.statColor}
      className="infopiece"
      padding
    >
      <img alt="Infographic Icon" src={props.statImg}></img>
      <Header as="h1">{props.statNumber}</Header>
      <Dimmer inverted active={props.isLoading ? true : false}>
        <Loader size="medium" active={props.isLoading ? true : false} />
      </Dimmer>
      <p style={{ fontSize: "15px" }}>{props.statGroup}</p>
    </Dimmer.Dimmable>
  );
};

export default Infopiece;
