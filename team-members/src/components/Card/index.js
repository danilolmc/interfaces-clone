import React from "react";

import { ContainerCard } from "./style";

const Card = props => (
  <ContainerCard>
    <img src="https://avatars2.githubusercontent.com/u/31545128?v=4" />
    <div>
      <h1>{props.name}</h1>
      <span>{props.country}</span>
    </div>

    <p>Peace on Earth A Wonderful With But No Way</p>
  </ContainerCard>
);

export default Card;
