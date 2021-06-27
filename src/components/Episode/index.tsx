import { IEpisodeWithCharacters } from "../../interfaces/episode";
import { Card, Header, Title, Row, Subtitle, Value } from "./styles/episode";

interface IProps {
  episode: IEpisodeWithCharacters;
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
