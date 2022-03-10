import React from "react";

import theme from "../../global/theme";
import { InputContainer } from "./styles";

interface IMainInput {
  placeholder: string;
}

export function MainInput({ placeholder }: IMainInput) {
  return (
    <InputContainer
      placeholder={placeholder}
      placeholderTextColor={theme.colors.text}
    />
  );
}
