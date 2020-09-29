import React from "react";

import {
  RiDashboardLine,
  FaRegUser,
  RiStackFill,
  GoGraph,
  FiSettings,
} from "react-icons/all";

import { Container, Header } from "./style";

const MenuLateral = () => (
  <Container>
    <Header>
      <img src="https://avatars2.githubusercontent.com/u/31545128?v=4" />
      <div>
        <h2>Alec Iissigonis</h2>
        <button>Edit</button>
      </div>
    </Header>

    <ul>
      <li>
        <RiDashboardLine />
        <a href="#">Dashboard</a>
      </li>
      <li>
        <FaRegUser />
        <a href="#">Members</a>
      </li>
      <li>
        <RiStackFill />
        <a href="#">Database</a>
      </li>
      <li>
        <GoGraph />
        <a href="#">Statistics</a>
      </li>
    </ul>

    <footer>
      <div>
        <FiSettings />
        <a href="#">Settings</a>
      </div>
    </footer>
  </Container>
);

export default MenuLateral;
