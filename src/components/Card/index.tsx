import {
  Item,
  Thumbnail,
  Info,
  Header,
  Title,
  Description,
  Row,
  Subtitle,
  Link,
} from "./styles/card";

interface CardProps<T> {
  item: T;
}

export default function Card<T>({ item }: CardProps<T>) {
  return (
    <Item>
      <Thumbnail />
      <Info>
        <Header>
          <Title>{item}</Title>
          <Description></Description>
        </Header>
        <Description>
          <Row>
            <Subtitle></Subtitle>
            <Link></Link>
          </Row>
        </Description>
      </Info>
    </Item>
  );
}
