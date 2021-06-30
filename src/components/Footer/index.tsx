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
        <Link href="/" passHref>
          <LinkWrapper>
            <Category>
              <Subtitle>CHARACTERS:</Subtitle>
              <Value>671</Value>
            </Category>
          </LinkWrapper>
        </Link>
        <Link href="/" passHref>
          <LinkWrapper>
            <Category>
              <Subtitle>LOCATIONS:</Subtitle>
              <Value>108</Value>
            </Category>
          </LinkWrapper>
        </Link>
        <Link href="/" passHref>
          <LinkWrapper>
            <Category>
              <Subtitle>EPISODES:</Subtitle>
              <Value>41</Value>
            </Category>
          </LinkWrapper>
        </Link>
      </List>
      <Signature>
        <Author href="https://github.com/Zabashtevich">
          by Zabashtevich 2021
        </Author>
      </Signature>
    </Container>
  );
}
