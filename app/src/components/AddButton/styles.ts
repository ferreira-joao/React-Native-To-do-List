import styled from "styled-components/native";
import theme from "../../global/theme";

export const ButtonContainer = styled.TouchableOpacity`
  border-radius: 25px;
  margin-left: 5px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
`;
