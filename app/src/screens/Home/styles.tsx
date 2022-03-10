import styled from "styled-components/native";
import theme from "../../global/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30;
  color: ${theme.colors.text};
`;
