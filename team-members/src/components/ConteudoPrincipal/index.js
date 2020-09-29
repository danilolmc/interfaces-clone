import React from "react";

import HeaderP from "../HeaderP";
import Card from "../Card";
import { Container } from "./style";

const ConteudoPrincipal = () => (
  <Container>
    <HeaderP members={102} available={14} />

    <section>
      <Card name="Danilo Lima" country="India" />
      <Card name="Marcos Lima" country="Japão" />
      <Card name="Sabrina Matos" country="Estados Unidos" />
      <Card name="Renan Almeida" country="Inglaterra" />
      <Card name="Gonçalo Lopez" country="China" />
      <Card name="Maria Antônia" country="Brasil" />
      <Card name="Maria Antônia" country="Brasil" />
      <Card name="Maria Antônia" country="Brasil" />
      <Card name="Maria Antônia" country="Brasil" />
    </section>
  </Container>
);

export default ConteudoPrincipal;
