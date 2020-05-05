import React from "react";
import ReactDom from "react-dom";
import { Comment, Icon } from "semantic-ui-react";
import jamieProfile from "../img/profile.png";

const Profile = () => {
  return (
    <Comment.Group size="large">
      <Comment>
        <Comment.Avatar src={jamieProfile} />
        <Comment.Content>
          <Comment.Author>Created by Jamie Rossiter</Comment.Author>
          <Comment.Text>
            Icons by{" "}
            <a href="https://www.flaticon.com/authors/freepik">Freepik</a>.
            Avatar by{" "}
            <a href="https://www.flaticon.com/authors/freepik">monkik</a>.
          </Comment.Text>
          <Comment.Actions>
            <Comment.Action
              as="a"
              href="https://www.instagram.com/jamierossiter.io/"
              target="_blank"
            >
              <Icon link size="big" name="instagram" />
            </Comment.Action>
            <Comment.Action
              as="a"
              href="mailto:jamieprossiter@gmail.com"
              target="_blank"
            >
              <Icon link size="big" name="at" />
            </Comment.Action>
            <Comment.Action as="a" href="https://github.com/JamieRossiter">
              <Icon link size="big" name="github" />
            </Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    </Comment.Group>
  );
};

export default Profile;
