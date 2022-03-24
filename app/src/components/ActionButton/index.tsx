import React from "react";
import { TouchableOpacityProps } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { ButtonContainer } from "./styles";

interface IActionButton extends TouchableOpacityProps {
  icon: string;
  isCancelable?: boolean;
}

export function ActionButton({ onPress, icon, isCancelable }: IActionButton) {
  return (
    <ButtonContainer onPress={onPress} isCancelable={isCancelable}>
      <Icon name={icon} size={20} color="#FFF" />
    </ButtonContainer>
  );
}
