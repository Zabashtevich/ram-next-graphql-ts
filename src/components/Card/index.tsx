import { HomePageRequestItem } from "../../interfaces/HomePage";
import {
  Item,
  Thumbnail,
  Info,
  Header,
  Title,
  Status,
  Description,
  Row,
  Subtitle,
  Link,
} from "./styles/card";

interface CardProps {
  item: HomePageRequestItem;
}

export default function Card({ item }: CardProps) {
  return (
    <Item>
      <Thumbnail src={item.image} alt={`picture of ${item.name}`} />
      <Info>
        <Header>
          <Title>{item.name}</Title>
          <Status>{`${item.status} - ${item.species}`}</Status>
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
