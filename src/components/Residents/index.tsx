import Link from "next/link";

import {
  Container,
  Title,
  Card,
  Poster,
  Subtitle,
  List,
} from "./styles/residents";

interface ResidentsProps {
  residents: { name: string; id: string; image: string }[];
}

export default function Residents({ residents }: ResidentsProps) {
  return (
    <Container>
      <Title>List of residents:</Title>
      <List>
        {residents.map((item) => (
          <Card key={item.id}>
            <Poster src={item.image} />
            <Link href={`/details/character/${item.id}`} passHref>
              <Subtitle>{item.name}</Subtitle>
            </Link>
          </Card>
        ))}
      </List>
    </Container>
  );
}
