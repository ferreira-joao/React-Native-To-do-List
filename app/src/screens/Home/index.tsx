import React, { useState, useEffect } from "react";
import { MainInput } from "../../components/MainInput";
import { AddButton } from "../../components/AddButton";
import { MainCard } from "../../components/MainCard";

import SegmentedControl from "@react-native-segmented-control/segmented-control";

import theme from "../../global/theme";

import { Container, Title, FormContainer, CardList } from "./styles";
import { Alert } from "react-native";

interface IList {
  id: number;
  text: string;
  completed: boolean;
}

function Home() {
  const segmentValues = ["All", "Complete", "Incomplete"];

  const [segmentedIndex, setSegmentedIndex] = useState(0);
  const [segmentedStatus, setSegmentedStatus] = useState("all");
  const [mainList, setMainList] = useState<IList[]>([]);
  const [text, setText] = useState("");
  const [filteredList, setFilteredList] = useState<IList[]>([]);

  const handleSegmentedChange = () => {
    switch (segmentedStatus) {
      case "complete":
        setFilteredList(mainList.filter((item) => item.completed === true));

        break;
      case "incomplete":
        setFilteredList(mainList.filter((item) => item.completed === false));

        break;
      default:
        setFilteredList(mainList);

        break;
    }
  };

  function handleAdd() {
    if (text === "") {
      Alert.alert("Insert a text before before adding.");
    } else {
      setMainList([
        ...mainList,
        { id: Math.random() * 1000, text: text, completed: false },
      ]);

      setText("");
    }
  }

  useEffect(() => {
    handleSegmentedChange();
  }, [segmentedStatus, mainList]);

  return (
    <Container>
      <Title>To do List</Title>

      <FormContainer>
        <MainInput
          placeholder="Type here..."
          value={text}
          onChange={(e) => setText(e.nativeEvent.text)}
        />

        <AddButton onPress={handleAdd} />
      </FormContainer>

      <SegmentedControl
        values={segmentValues}
        selectedIndex={segmentedIndex}
        onChange={(e) => setSegmentedIndex(e.nativeEvent.selectedSegmentIndex)}
        onValueChange={(e) => setSegmentedStatus(e.toLowerCase())}
        fontStyle={{ fontFamily: theme.fonts.regular }}
        activeFontStyle={{
          fontWeight: "normal",
          fontFamily: theme.fonts.bold,
        }}
        tintColor={theme.colors.primary}
        backgroundColor={theme.colors.dark}
      />

      <CardList>
        {filteredList.map((item) => (
          <MainCard key={item.id} text={item.text} />
        ))}
      </CardList>
    </Container>
  );
}

export default Home;
