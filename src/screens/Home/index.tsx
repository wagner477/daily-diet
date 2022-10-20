import { HeaderHome } from "@components/HeaderHome";
import { PercentCard } from "@components/PercentCard";
import { Text, View } from "react-native";
import { Container } from "./styled";

export const Home = () => {
  return (
    <Container>
      <HeaderHome />
      <PercentCard percent={100} />
    </Container>
  );
};
