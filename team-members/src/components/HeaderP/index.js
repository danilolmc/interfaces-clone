import React from "react";

import { Header } from "./style";

const HeaderP = props => (
  <Header>
    <div>
      <h1>Team Members</h1>
      <span>{props.members + " "} Members</span>
    </div>

    <div>
      <span>{props.available} Availbale Now</span>
      <h1>View Members</h1>
    </div>
  </Header>
);

export default HeaderP;
