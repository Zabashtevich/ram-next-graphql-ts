import {
  Card,
  Header,
  Title,
  Row,
  Subtitle,
  Value,
  LinkWrapper,
} from "./styles/episode";
import { IEpisode } from "../../interfaces/episode/index";
import Link from "next/link";

interface IProps {
  episode: IEpisode;
}

export default function Episode({ episode }: IProps) {
  return (
    <Card>
      <Header>
        <Link href={`/details/episode/${episode.id}`} passHref>
          <LinkWrapper title={`go to ${episode.name} description`}>
            <Title>{episode.name}</Title>
          </LinkWrapper>
        </Link>
      </Header>

      <Row>
        <Subtitle>Air date:</Subtitle>
        <Value>{episode.air_date}</Value>
      </Row>

      <Row>
        <Subtitle>Episode:</Subtitle>
        <Value>{episode.episode}</Value>
      </Row>
    </Card>
  );
}
