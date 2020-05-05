import React, { useState } from "react";
import ReactDom from "react-dom";
import { Menu } from "semantic-ui-react";

const Nav = (props) => {
  //State Declaration
  const [optionIsActive, updateActiveOption] = useState("");
  //Functions
  function handleOptionClick(event, { name }) {
    updateActiveOption(name);
  }

  return (
    <React.Fragment>
      <Menu compact secondary size="huge" className="nav-bar" color="grey">
        <Menu.Item
          as="a"
          href="#nav-data"
          name="stats-data"
          content="Data"
          active={optionIsActive == "stats-data"}
          onClick={handleOptionClick}
        />
        <Menu.Item
          as="a"
          href="#nav-information"
          name="info"
          content="Information"
          active={optionIsActive == "info"}
          onClick={handleOptionClick}
        />
        <Menu.Item
          as="a"
          href="#nav-news"
          name="news"
          content="News"
          active={optionIsActive == "news"}
          onClick={handleOptionClick}
        />
      </Menu>
    </React.Fragment>
  );
};

export default Nav;
