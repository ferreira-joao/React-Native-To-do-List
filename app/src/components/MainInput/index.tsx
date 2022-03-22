import React from "react";
import { TextInputProps } from "react-native";

import theme from "../../global/theme";
import { InputContainer } from "./styles";

interface IMainInput extends TextInputProps {
  value: string;
  placeholder: string;
}

export function MainInput({ value, onChange, placeholder }: IMainInput) {
  return (
    <InputContainer
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.text}
    />
  );
}
