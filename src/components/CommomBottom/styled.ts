import styled from "styled-components/native";

import { Entypo } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_3};
  flex-direction: row;
  width: 100%;
  padding: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-weight: 700;
`;

export const Icon = styled(Entypo).attrs({
  name: "plus",
  color: "white",
  size: 24,
})`
  align-self: center;
`;
