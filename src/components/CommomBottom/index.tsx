import { TouchableOpacityProps } from "react-native";
import { Container, Title, Icon } from "./styled";

type Props = TouchableOpacityProps & {
  title: string;
  isAdd?: boolean;
};

export const CommonBottom = ({ title, isAdd = false, ...rest }: Props) => {
  return (
    <Container {...rest}>
      {isAdd && <Icon />}
      <Title>{title}</Title>
    </Container>
  );
};
