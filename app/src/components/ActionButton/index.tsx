import React from "react";
import { TouchableOpacityProps } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { ButtonContainer } from "./styles";

interface IActionButton extends TouchableOpacityProps {
  icon: string;
  isCancelable?: boolean;
  leftSpace?: boolean;
}

export function ActionButton({
  onPress,
  icon,
  isCancelable,
  leftSpace,
}: IActionButton) {
  return (
    <ButtonContainer
      onPress={onPress}
      isCancelable={isCancelable}
      leftSpace={leftSpace}
    >
      <Icon name={icon} size={20} color="#FFF" />
    </ButtonContainer>
  );
}
