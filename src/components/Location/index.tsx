import Link from "next/link";

import {
  Card,
  Header,
  Title,
  Row,
  Subtitle,
  Value,
  LinkWrapper,
} from "./styles/location";
import { ILocation } from "../../interfaces/location/index";

interface LocationProps {
  item: ILocation;
}

export default function Location({ item }: LocationProps) {
  return (
    <Card>
      <Header>
        <Link href={`/location/${item.id}`} passHref>
          <LinkWrapper title={`to ${item.name} description`}>
            <Title>{item.name}</Title>
          </LinkWrapper>
        </Link>
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
