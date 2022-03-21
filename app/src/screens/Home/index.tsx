import React, { useState } from "react";
import { MainInput } from "../../components/MainInput";
import { AddButton } from "../../components/AddButton";
import { MainCard } from "../../components/MainCard";

import SegmentedControl from "@react-native-segmented-control/segmented-control";

import theme from "../../global/theme";

import { Container, Title, FormContainer, CardList } from "./styles";

import { list } from "./data";

function Home() {
  const segmentValues = ["All", "Complete", "Incomplete"];

  const [segmentedIndex, setSegmentedIndex] = useState(0);

  return (
    <Container>
      <Title>To do List</Title>

      <FormContainer>
        <MainInput placeholder="Type here..." />

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

      <CardList>
        {list.map((item) => (
          <MainCard key={item.id} text={item.text} />
        ))}
      </CardList>
    </Container>
  );
}

export default Home;
