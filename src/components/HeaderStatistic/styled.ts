import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 36px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-weight: 400;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 3px;
  left: 0px;
  padding: 24px;
`;

export const Icon = styled(MaterialCommunityIcons).attrs({
  name: "arrow-left",
  color: "#639339",
  size: 32,
})``;
