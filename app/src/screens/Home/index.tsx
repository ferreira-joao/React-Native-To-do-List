import React, { useState } from "react";
import { MainInput } from "../../components/MainInput";
import { AddButton } from "../../components/AddButton";
import { MainCard } from "../../components/MainCard";

import SegmentedControl from "@react-native-segmented-control/segmented-control";

import theme from "../../global/theme";

import { Container, Title, FormContainer, CardList } from "./styles";

import { list } from "./data";

function Home() {
  const segmentValues = ["All", "Done", "Incomplete"];

  const [segmentedIndex, setSegmentedIndex] = useState(0);
  const [mainList, setMainList] = useState(list);

  const handleSegmentedChange = (e: string) => {
    let segment_value = e.toLowerCase();

    switch (segment_value) {
      case "all":
        setMainList(list);

        break;
      case "done":
        const new_list1 = list.filter((item) =>
          item.status.includes(segment_value)
        );

        setMainList(new_list1);

        break;
      case "incomplete":
        const new_list2 = list.filter((item) =>
          item.status.includes(segment_value)
        );

        setMainList(new_list2);

        break;
    }
  };

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
        onValueChange={(e) => handleSegmentedChange(e)}
        fontStyle={{ fontFamily: theme.fonts.regular }}
        activeFontStyle={{
          fontWeight: "normal",
          fontFamily: theme.fonts.bold,
        }}
        tintColor={theme.colors.primary}
        backgroundColor={theme.colors.dark}
      />

      <CardList>
        {mainList.map((item) => (
          <MainCard key={item.id} text={item.text} />
        ))}
      </CardList>
    </Container>
  );
}

export default Home;
