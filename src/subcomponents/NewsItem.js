import React from "react";
import ReactDom from "react-dom";
import { Image, Item } from "semantic-ui-react";

const NewsItem = (props) => {
  return (
    <Item as="a" href={props.link} target="_blank">
      <Item.Image alt="Article Image" src={props.image}></Item.Image>
      <Item.Content>
        <Item.Header>{props.header}</Item.Header>
        <Item.Meta>
          <span>{props.publishInfo}</span>
        </Item.Meta>
        <Item.Description>{props.description}</Item.Description>
      </Item.Content>
    </Item>
  );
};

export default NewsItem;
