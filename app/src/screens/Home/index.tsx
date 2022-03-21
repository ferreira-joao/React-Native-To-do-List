import React, { useState } from "react";
import { MainInput } from "../../components/MainInput";
import { AddButton } from "../../components/AddButton";

import SegmentedControl from "@react-native-segmented-control/segmented-control";

import theme from "../../global/theme";

import { Container, Title, FormContainer } from "./styles";

function Home() {
  const segmentValues = ["All", "Complete", "Incomplete"];

  const [segmentedIndex, setSegmentedIndex] = useState(0);

  return (
    <Container>
      <Title>To do List</Title>

      <FormContainer>
        <MainInput placeholder="Digite aqui..." />

        <AddButton />
      </FormContainer>

      <SegmentedControl
        values={segmentValues}
        selectedIndex={segmentedIndex}
        onChange={(e) => setSegmentedIndex(e.nativeEvent.selectedSegmentIndex)}
        fontStyle={{ fontFamily: theme.fonts.regular }}
        activeFontStyle={{
          fontWeight: "normal",
          fontFamily: theme.fonts.bold,
        }}
        tintColor={theme.colors.primary}
        backgroundColor={theme.colors.dark}
      />
    </Container>
  );
}

export default Home;
