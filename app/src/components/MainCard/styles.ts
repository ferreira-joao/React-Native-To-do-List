import styled, { css } from "styled-components/native";
import theme from "../../global/theme";

interface ICardText {
  completed: boolean;
}

export const CardContainer = styled.View`
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 10px;
  border: 1px solid ${theme.colors.primary};
  background-color: ${theme.colors.dark};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardText = styled.Text<ICardText>`
  flex: 1;
  flex-wrap: wrap;
  color: ${theme.colors.text};
  ${(props) =>
    props.completed
      ? css`
          text-decoration: line-through;
        `
      : css`
          text-decoration: none;
        `}
`;

export const ButtonsView = styled.View`
  flex-direction: row;
`;
