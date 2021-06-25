import { Card, Header, Title, Row, Subtitle, Value } from "./styles/location";

export default function Location({ item }: any) {
  return (
    <Card>
      <Header>
        <Title></Title>
      </Header>

      <Row>
        <Subtitle>Type:</Subtitle>
        <Value></Value>
      </Row>

      <Row>
        <Subtitle>Deminsion:</Subtitle>
        <Value></Value>
      </Row>
    </Card>
  );
}
