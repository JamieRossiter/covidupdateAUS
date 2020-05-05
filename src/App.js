import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { Grid, Divider } from "semantic-ui-react";
//Components
import Logo from "./main_components/Logo.js";
import MobileHeader from "./subcomponents/MobileHeader.js";
import Nav from "./main_components/Nav.js";
import NavDrop from "./main_components/NavDrop.js";
import Infographic from "./main_components/Infographic.js";
import Selector from "./subcomponents/Selector.js";
import Graph from "./main_components/Graph.js";
import Information from "./main_components/Information.js";
import News from "./main_components/News.js";
import Footer from "./main_components/Footer.js";
import BackToTop from "./subcomponents/BackToTop.js";

const App = () => {
  //State Declaration
  const [selectedState, updateSelectedState] = useState("aus");
  const [displayedState, updateDisplayedState] = useState("");

  //Functions
  function changeState(e, { value }) {
    updateSelectedState(value);
  }

  //Effect Hooks
  useEffect(() => {
    switch (selectedState) {
      case "aus":
        updateDisplayedState("Australia Total");
        break;
      case "vic":
        updateDisplayedState("Victoria");
        break;
      case "nsw":
        updateDisplayedState("New South Wales");
        break;
      case "qld":
        updateDisplayedState("Queensland");
        break;
      case "sa":
        updateDisplayedState("South Australia");
        break;
      case "nt":
        updateDisplayedState("Northern Territory");
        break;
      case "wa":
        updateDisplayedState("Western Australia");
        break;
      case "act":
        updateDisplayedState("Australian Capital Territory");
        break;
      case "tas":
        updateDisplayedState("Tasmania");
        break;
      default:
        updateDisplayedState("Australia Total");
    }
  });

  return (
    <Grid columns="three">
      <Grid.Row>
        <Grid.Column>
          <Logo />
          <MobileHeader />
        </Grid.Column>
        <Grid.Column />
        <Grid.Column>
          <NavDrop />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Infographic displayedState={displayedState} />
      </Grid.Row>
      <Grid.Row>
        <Selector stateSelected={changeState} />
      </Grid.Row>
      <Divider />
      <Grid.Row>
        <Graph displayedState={displayedState} />
      </Grid.Row>
      <Divider />
      <Grid.Row>
        <Information id="information" />
      </Grid.Row>
      <Divider />
      <Grid.Row>
        <News />
      </Grid.Row>
      <Divider />
      <Grid.Row>
        <Footer />
      </Grid.Row>
      <Divider />
      <Grid.Row>
        <BackToTop />
      </Grid.Row>
    </Grid>
  );
};

export default App;
