import { Avatar, Container, Logo } from "./styled";

export const HeaderHome = () => {
  return (
    <Container>
      <Logo source={require("@assets/Logo.png")} />
      <Avatar source={require("@assets/Avatar.png")} />
    </Container>
  );
};
