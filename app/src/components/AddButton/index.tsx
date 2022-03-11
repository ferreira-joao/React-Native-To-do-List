import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

import { ButtonContainer } from "./styles";

export function AddButton() {
  return (
    <ButtonContainer>
      <Icon name="add-circle-outline" size={20} color="#FFF" />
    </ButtonContainer>
  );
}
