import Link from "next/link";
import { ICharacter } from "../../interfaces/character";

import { stringContains } from "../../utils";
import {
  Item,
  Thumbnail,
  Info,
  Header,
  Title,
  Status,
  Row,
  Subtitle,
  Value,
  LinkWrapper,
} from "./styles/character";

interface CharacterProps {
  item: ICharacter;
}

interface ILiveStatus {
  alive: boolean;
  dead: boolean;
  unknown: boolean;
}

export default function Character({ item }: CharacterProps) {
  const liveStatus: ILiveStatus = {
    alive: stringContains(item.status, /alive/i),
    dead: stringContains(item.status, /dead/i),
    unknown: stringContains(item.status, /unknown/i),
  };

  return (
    <Item>
      <Thumbnail src={item.image} alt={`picture of ${item.name}`} />
      <Info>
        <Header>
          <Link href={`/details/character/${item.id}`} passHref>
            <LinkWrapper>
              <Title>{item.name}</Title>
            </LinkWrapper>
          </Link>
          <Status
            alive={liveStatus.alive ? 1 : 0}
            dead={liveStatus.dead ? 1 : 0}
            unknown={liveStatus.unknown ? 1 : 0}
          >{`${item.status} - ${item.species}`}</Status>
        </Header>

        <Row>
          <Subtitle>Last known location:</Subtitle>
          <Link href={`/details/location/${item.location.id}`} passHref>
            <LinkWrapper>
              <Value>{item.location.name}</Value>
            </LinkWrapper>
          </Link>
        </Row>
        <Row>
          <Subtitle>First seen in:</Subtitle>
          {item.origin.id && (
            <Link href={`/details/episode/${item.origin.id}`} passHref>
              <LinkWrapper>
                <Value>{item.origin.name}</Value>
              </LinkWrapper>
            </Link>
          )}
          {!item.origin.id && <Value>{item.origin.name}</Value>}
        </Row>
      </Info>
    </Item>
  );
}
