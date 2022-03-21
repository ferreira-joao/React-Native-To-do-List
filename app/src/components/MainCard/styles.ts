import styled from "styled-components/native";
import theme from "../../global/theme";

export const CardContainer = styled.View`
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 10px;
  border: 1px solid ${theme.colors.primary};
  background-color: ${theme.colors.dark};
`;

export const CardText = styled.Text`
  color: ${theme.colors.text};
`;
