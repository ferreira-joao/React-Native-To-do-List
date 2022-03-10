import styled from "styled-components/native";
import theme from "../../global/theme";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 30;
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.text};
`;
