import { useQuery } from "@apollo/client";
import Link from "next/link";

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
          <Link href="/" passHref>
            <LinkWrapper>
              <Category>
                <Subtitle>CHARACTERS:</Subtitle>
                <Value>{data.characters.info.count}</Value>
              </Category>
            </LinkWrapper>
          </Link>
          <Link href="/" passHref>
            <LinkWrapper>
              <Category>
                <Subtitle>LOCATIONS:</Subtitle>
                <Value>{data.locations.info.count}</Value>
              </Category>
            </LinkWrapper>
          </Link>
          <Link href="/" passHref>
            <LinkWrapper>
              <Category>
                <Subtitle>EPISODES:</Subtitle>
                <Value>{data.episodes.info.count}</Value>
              </Category>
            </LinkWrapper>
          </Link>
        </List>
        <Signature>
          <Author href="/">by Zabashtevich 2021</Author>
        </Signature>
      </Container>
    );
  }

  return null;
}
