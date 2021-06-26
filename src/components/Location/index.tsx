import { Card, Header, Title, Row, Subtitle, Value } from "./styles/location";

interface LocationProps {
  item: {
    location: {
      name: string;
      type: string;
      dimension: string;
      residents: { name: string; id: string; image: string }[];
    };
  };
}

export default function Location({ item }: LocationProps) {
  return (
    <Card>
      <Header>
        <Title>{item.location.name}</Title>
      </Header>

      <Row>
        <Subtitle>Type:</Subtitle>
        <Value>{item.location.type || "unknown"}</Value>
      </Row>

      <Row>
        <Subtitle>Deminsion:</Subtitle>
        <Value>{item.location.dimension || "unknown"}</Value>
      </Row>
    </Card>
  );
}