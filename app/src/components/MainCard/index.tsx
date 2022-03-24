import React from "react";
import { ActionButton } from "../ActionButton";

import { CardContainer, CardText, ButtonsView } from "./styles";

interface ICardText {
  text: string;
}

export function MainCard({ text }: ICardText) {
  return (
    <CardContainer>
      <CardText numberOfLines={1}>{text}</CardText>

      <ButtonsView>
        <ActionButton icon="checkmark-outline" />

        <ActionButton icon="trash-outline" isCancelable leftSpace />
      </ButtonsView>
    </CardContainer>
  );
}
