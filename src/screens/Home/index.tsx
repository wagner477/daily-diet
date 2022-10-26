import { CommonBottom } from "@components/CommomBottom";
import { HeaderHome } from "@components/HeaderHome";
import { MealList } from "@components/MealList";
import { PercentCard } from "@components/PercentCard";
import { Container, Text } from "./styled";

export const Home = () => {
  return (
    <Container>
      <HeaderHome />
      <PercentCard percent={100} />
      <Text>Refeições</Text>
      <CommonBottom
        title="Nova refeição"
        isAdd
        onPress={() => console.log("opa")}
      />
      <MealList
        data={[
          {
            id: 1,
            hour: "12:00",
            meal: "Almoço",
            date: "20/10/2021",
          },
          {
            id: 2,
            hour: "12:00",
            meal: "Almoço",
            date: "20/10/2021",
          },
          {
            id: 3,
            hour: "12:00",
            meal: "Almoço",
            date: "21/10/2021",
          },
          {
            id: 4,
            hour: "12:00",
            meal: "Almoço",
            date: "21/10/2021",
          },
        ]}
      />
    </Container>
  );
};
