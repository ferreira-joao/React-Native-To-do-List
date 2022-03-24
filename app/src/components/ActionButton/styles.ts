import styled, { css } from "styled-components/native";
import theme from "../../global/theme";

interface ICancel {
  isCancelable?: boolean;
}

export const ButtonContainer = styled.TouchableOpacity<ICancel>`
  border-radius: 15px;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.isCancelable
      ? css`
          background-color: ${theme.colors.cancel};
        `
      : css`
          background-color: ${theme.colors.primary};
        `}
`;
