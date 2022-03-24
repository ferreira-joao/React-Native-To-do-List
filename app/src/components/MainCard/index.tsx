import React from "react";
import { ActionButton } from "../ActionButton";

import { CardContainer, CardText } from "./styles";

interface ICardText {
  text: string;
}

export function MainCard({ text }: ICardText) {
  return (
    <CardContainer>
      <CardText>{text}</CardText>

      <ActionButton icon="checkmark-outline" />

      <ActionButton icon="trash-outline" isCancelable />
    </CardContainer>
  );
}
