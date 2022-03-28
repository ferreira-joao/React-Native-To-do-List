import React from "react";
import { ActionButton } from "../ActionButton";

import { CardContainer, CardText, ButtonsView } from "./styles";

interface ICardText {
  completed: boolean;
  text: string;
  onComplete: () => void;
  onDelete: () => void;
}

export function MainCard({ completed, text, onComplete, onDelete }: ICardText) {
  return (
    <CardContainer>
      <CardText numberOfLines={1} completed={completed}>
        {text}
      </CardText>

      <ButtonsView>
        <ActionButton icon="checkmark-outline" onPress={onComplete} />

        <ActionButton
          icon="trash-outline"
          onPress={onDelete}
          isCancelable
          leftSpace
        />
      </ButtonsView>
    </CardContainer>
  );
}
