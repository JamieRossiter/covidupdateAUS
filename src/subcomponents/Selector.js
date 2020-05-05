import React from "react";
import ReactDom from "react-dom";
import { Dropdown, Segment, Label } from "semantic-ui-react";

const Selector = (props) => {
  const countryOptions = [
    { key: "aus", value: "aus", text: "Australia Total" },
    { key: "vic", value: "vic", text: "Victoria" },
    { key: "nsw", value: "nsw", text: "New South Wales" },
    { key: "qld", value: "qld", text: "Queensland" },
    { key: "sa", value: "sa", text: "South Australia" },
    { key: "nt", value: "nt", text: "Northern Territory" },
    { key: "wa", value: "wa", text: "Western Australia" },
    { key: "act", value: "act", text: "Australian Capital Territory" },
    { key: "tas", value: "tas", text: "Tasmania" },
  ];

  return (
    <div className="dropdown-container">
      <Segment compact basic padded="very">
        <Dropdown
          placeholder="Select State/Territory"
          selection
          options={countryOptions}
          onChange={props.stateSelected}
        />
        <Label
          color="blue"
          style={{ textAlign: "center" }}
          pointing
          attached="bottom"
        >
          Filter by State/Territory
        </Label>
      </Segment>
    </div>
  );
};

export default Selector;
