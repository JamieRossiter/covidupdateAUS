import React from "react";
import ReactDom from "react-dom";
import { Button, Icon } from "semantic-ui-react";

const BackToTop = () => {
  return (
    <Button as="a" href="#nav-start" style={{ margin: "auto" }} icon>
      <Icon size="large" name="chevron up" />
    </Button>
  );
};

export default BackToTop;
