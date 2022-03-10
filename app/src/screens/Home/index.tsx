import React from "react";
import { MainInput } from "../../components/MainInput";

import { Container, Title } from "./styles";

function Home() {
  return (
    <Container>
      <Title>To do List</Title>
      <MainInput placeholder="Digite aqui..." />
    </Container>
  );
}

export default Home;
