import { BackButton, Container, Icon, Subtitle, Title } from "./styled";

import { useNavigation } from "@react-navigation/native";

export const HeaderStatistic = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate("home");
  };
  return (
    <Container>
      <BackButton onPress={handleGoBack}>
        <Icon />
      </BackButton>
      <Title>90,86%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
};
