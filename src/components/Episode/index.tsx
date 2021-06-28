import { Card, Header, Title, Row, Subtitle, Value } from "./styles/episode";
import { IEpisode } from "../../interfaces/episode/index";

interface IProps {
  episode: IEpisode;
}

export default function Episode({ episode }: IProps) {
  return (
    <Card>
      <Header>
        <Title>{episode.name}</Title>
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
