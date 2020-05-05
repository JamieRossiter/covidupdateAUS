import React, { useState } from "react";
import ReactDom from "react-dom";
import { Menu, Dropdown, Icon } from "semantic-ui-react";

const NavDrop = (props) => {
  //State Declaration
  const [optionIsActive, updateActiveOption] = useState("");
  //Functions
  function handleOptionClick(event, { name }) {
    updateActiveOption(name);
  }

  return (
    <div id="nav-start" className="nav-bar">
      <Menu compact size="huge" color="grey">
        <Dropdown item text={<Icon name="bars"></Icon>}>
          <Dropdown.Menu>
            <Dropdown.Item
              as="a"
              href="#nav-data"
              name="stats-data"
              content="Data"
              active={optionIsActive == "stats-data"}
              onClick={handleOptionClick}
            />
            <Dropdown.Item
              as="a"
              href="#nav-information"
              name="info"
              content="Information"
              active={optionIsActive == "info"}
              onClick={handleOptionClick}
            />
            <Dropdown.Item
              as="a"
              href="#nav-news"
              name="news"
              content="News"
              active={optionIsActive == "news"}
              onClick={handleOptionClick}
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    </div>
  );
};

export default NavDrop;
