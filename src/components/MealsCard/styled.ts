import styled from "styled-components/native";

export const Container = styled.View`
  border: 1px solid #dddedf;
  border-radius: 6px;

  width: 100%;
  padding: 14px 16px 14px 12px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Hour = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-size: ${({ theme }) => theme.FONT_SIZE.ES}px;
  font-weight: 700;

  margin-right: 8px;
`;

export const Meal = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  margin-left: 8px;
`;

export const Status = styled.View<{ positive: boolean }>`
  min-width: 19px;
  min-height: 14px;
  border-radius: 14px;
  background-color: ${({ theme, positive }) =>
    positive ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
