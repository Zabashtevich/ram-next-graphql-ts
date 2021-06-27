import { IEpisode } from "../../interfaces/episode";
import { Card, Header, Title, Row, Subtitle, Value } from "./styles/episode";

interface EpisodeProps {
  episode: IEpisode;
}

export default function Episode({ episode }: EpisodeProps) {
  return (
    <Card>
      <Header>
        <Title>{episode.episode.name}</Title>
      </Header>

      <Row>
        <Subtitle>Air date:</Subtitle>
        <Value>{episode.episode.air_date}</Value>
      </Row>

      <Row>
        <Subtitle>Episode:</Subtitle>
        <Value>{episode.episode.episode}</Value>
      </Row>
    </Card>
  );
}
