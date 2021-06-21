import React from "react";

import { AppHeader } from "../components";
import { Main, Section, Title, Container, Thumbnail } from "./styles/index";

export default function AppLayout({
  children,
}: {
  children: React.ReactChild | React.ReactChildren;
}) {
  return (
    <Main>
      <AppHeader />
      <Section>
        <Title>The Rick and Morty APP</Title>
        <Container>
          <Thumbnail src="./ram.svg" />
        </Container>
      </Section>
      {children}
    </Main>
  );
}
