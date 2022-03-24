import styled from "styled-components/native";
import theme from "../../global/theme";

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

export const CardText = styled.Text`
  flex: 1;
  flex-wrap: wrap;
  color: ${theme.colors.text};
`;

export const ButtonsView = styled.View`
  flex-direction: row;
`;
