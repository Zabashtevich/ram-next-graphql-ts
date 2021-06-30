import { Card, Header, Title, Row, Subtitle, Value } from "./styles/location";
import { ILocation } from "../../interfaces/location/index";

interface LocationProps {
  item: ILocation;
}

export default function Location({ item }: LocationProps) {
  return (
    <Card>
      <Header>
        <Title>{item.name}</Title>
      </Header>

      <Row>
        <Subtitle>Type:</Subtitle>
        <Value>{item.type || "unknown"}</Value>
      </Row>

      <Row>
        <Subtitle>Dimension:</Subtitle>
        <Value>{item.dimension || "unknown"}</Value>
      </Row>
    </Card>
  );
}
