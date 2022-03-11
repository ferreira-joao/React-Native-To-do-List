import React from "react";
import { MainInput } from "../../components/MainInput";
import { AddButton } from "../../components/AddButton";

import { Container, Title, FormContainer } from "./styles";

function Home() {
  return (
    <Container>
      <Title>To do List</Title>

      <FormContainer>
        <MainInput placeholder="Digite aqui..." />

        <AddButton />
      </FormContainer>
    </Container>
  );
}

export default Home;
