import { Text } from "react-native";
import { Container, Icon, PercentLabel, PercentValue } from "./styled";

import { useNavigation } from "@react-navigation/native";

interface Props {
  percent: number;
}

export const PercentCard = ({ percent }: Props) => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate("statistic");
  };

  return (
    <Container onPress={handleNavigate}>
      <Icon />
      <PercentValue>{percent}%</PercentValue>
      <PercentLabel>das refeições dentro da dieta</PercentLabel>
    </Container>
  );
};
