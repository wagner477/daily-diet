import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  margin-top: 36px;
  padding: 28px;
  align-items: center;
  border-radius: 8px;
`;

export const PercentValue = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  margin-bottom: 2px;
`;

export const PercentLabel = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.GRAY_3};
`;

export const Icon = styled(Feather).attrs({
  name: "arrow-up-right",
  color: "#639339",
  size: 28,
})`
  position: absolute;
  right: 0px;
  padding: 8px;
`;
