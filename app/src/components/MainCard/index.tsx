import React from "react";
import { ActionButton } from "../ActionButton";

import { CardContainer, CardText, ButtonsView } from "./styles";

interface ICardText {
  text: string;
  onAdd: () => void;
}

export function MainCard({ text, onAdd }: ICardText) {
  return (
    <CardContainer>
      <CardText numberOfLines={1}>{text}</CardText>

      <ButtonsView>
        <ActionButton icon="checkmark-outline" onPress={onAdd} />

        <ActionButton icon="trash-outline" isCancelable leftSpace />
      </ButtonsView>
    </CardContainer>
  );
}
