import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  margin-top: 36px;
  padding: 28px;
  align-items: center;
`;

export const PercentValue = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL};
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  margin-bottom: 2px;
`;

export const PercentLabel = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.GRAY_3};
`;
