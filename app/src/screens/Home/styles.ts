import styled from "styled-components/native";
import theme from "../../global/theme";

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: ${theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 30px;
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.text};
`;

export const FormContainer = styled.View`
  width: 100%;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardList = styled.View`
  width: 100%;
  margin-top: 10px;
`;

export const EmptyText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${theme.colors.text};
  text-align: center;
`;
