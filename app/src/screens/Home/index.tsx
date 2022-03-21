import React from "react";
import { MainInput } from "../../components/MainInput";
import { AddButton } from "../../components/AddButton";

import SegmentedControl from "@react-native-segmented-control/segmented-control";

import { Container, Title, FormContainer } from "./styles";

function Home() {
  return (
    <Container>
      <Title>To do List</Title>

      <FormContainer>
        <MainInput placeholder="Digite aqui..." />

        <AddButton />
      </FormContainer>

      <SegmentedControl values={["One", "Two", "Three"]} selectedIndex={0} />
    </Container>
  );
}

export default Home;
