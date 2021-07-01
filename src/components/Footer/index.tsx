import Link from "next/link";

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
  return (
    <Container>
      <List>
        <Link href="/details/characters" passHref>
          <LinkWrapper title="go to characters page">
            <Category>
              <Subtitle>CHARACTERS:</Subtitle>
              <Value>671</Value>
            </Category>
          </LinkWrapper>
        </Link>
        <Link href="/details/locations" passHref>
          <LinkWrapper title="go to locations page">
            <Category>
              <Subtitle>LOCATIONS:</Subtitle>
              <Value>108</Value>
            </Category>
          </LinkWrapper>
        </Link>
        <Link href="/details/episodes" passHref>
          <LinkWrapper title="go to episodes page">
            <Category>
              <Subtitle>EPISODES:</Subtitle>
              <Value>41</Value>
            </Category>
          </LinkWrapper>
        </Link>
      </List>
      <Signature>
        <Author
          href="https://github.com/Zabashtevich"
          title="go to author github"
          target="_blanc"
        >
          by Zabashtevich 2021
        </Author>
      </Signature>
    </Container>
  );
}
