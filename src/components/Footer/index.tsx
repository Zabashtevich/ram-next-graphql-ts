import { useQuery } from "@apollo/client";

import { FooterData } from "../../interfaces/Footer";
import { GET_ITEMS_AMOUNT } from "../../request";
import {
  Container,
  List,
  Category,
  Subtitle,
  Value,
  Signature,
  Author,
  LinkWrapper,
} from "./styles/footer";

export default function Footer() {
  const { data, error } = useQuery<FooterData>(GET_ITEMS_AMOUNT);

  if (data) {
    return (
      <Container>
        <List>
          <Category>
            <Subtitle>CHARACTERS:</Subtitle>
            <Value>{data.characters.info.count}</Value>
          </Category>
          <Category>
            <Subtitle>LOCATIONS:</Subtitle>
            <Value>{data.locations.info.count}</Value>
          </Category>
          <Category>
            <Subtitle>EPISODES:</Subtitle>
            <Value>{data.episodes.info.count}</Value>
          </Category>
        </List>
        <Signature>
          <Author>by Zabashtevich 2021</Author>
        </Signature>
      </Container>
    );
  }

  return null;
}
