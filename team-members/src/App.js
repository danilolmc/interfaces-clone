import React from "react";
import ConteudoPrincipal from "./components/ConteudoPrincipal";
import MenuLateral from "./components/MenuLateral";
import { Container, GlobalStyle } from "./style";

const App = () => (
  <Container>
    <GlobalStyle />
    <MenuLateral />
    <ConteudoPrincipal />
  </Container>
);

export default App;
