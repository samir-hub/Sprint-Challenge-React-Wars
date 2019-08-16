import React from "react";
// import 'semantic-ui-css/semantic.min.css';
// import { Card, Image } from 'semantic-ui-react'
// import "./PhotoCard.scss"

const StarWarsCard = props => {
  // NOTE: The value given to setState() must be of the same type as your vale is expected to be
  return (
    
    <div className="photo-card " key={props.id}>
      <img className="starwars-image" alt="Star Wars Logo" src={props.imgUrl} />
      <h1>{props.name}</h1>
      <h3>{props.birth}</h3>
      <h3>{props.gender}</h3>
      {/* <h2>{props.breed}</h2>
      <button>Adopt me!</button> */}
    </div>
  );
};
export default StarWarsCard;