import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Card } from 'semantic-ui-react'
import "./StarWarsCard.scss"


const StarWarsCard = props => {
  return (
<Card.Group>
<Card>
  <Card.Content>
    <Card.Header>{props.name}</Card.Header>
    <Card.Meta>{props.birth}</Card.Meta>
    <Card.Description>
    This character is {props.gender} with {props.eyes} eyes and {props.hair} hair.
    </Card.Description>
  </Card.Content>
</Card>
</Card.Group>
  );
};
export default StarWarsCard;