import { Text } from "react-native";
import { Container, Content, Hour, Meal, Status } from "./styled";

interface Props {
  hour: string;
  meal: string;
}

export const MealsCard = ({ hour, meal }: Props) => {
  return (
    <Container>
      <Content>
        <Hour>{hour}</Hour>
        <Text>|</Text>
        <Meal>{meal}</Meal>
      </Content>
      <Status />
    </Container>
  );
};
