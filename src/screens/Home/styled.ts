import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 24px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 400;
  margin-top: 40px;
  margin-bottom: 8px;
`;
