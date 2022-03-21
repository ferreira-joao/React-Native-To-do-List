import React from "react";

import { CardContainer, CardText } from "./styles";

interface ICardText {
  text: string;
}

export function MainCard({ text }: ICardText) {
  return (
    <CardContainer>
      <CardText>{text}</CardText>
    </CardContainer>
  );
}
