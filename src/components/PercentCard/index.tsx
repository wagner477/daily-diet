import { Text } from "react-native";
import { Container, Icon, PercentLabel, PercentValue } from "./styled";

interface Props {
  percent: number;
}

export const PercentCard = ({ percent }: Props) => {
  return (
    <Container>
      <Icon />
      <PercentValue>{percent}%</PercentValue>
      <PercentLabel>das refeições dentro da dieta</PercentLabel>
    </Container>
  );
};
