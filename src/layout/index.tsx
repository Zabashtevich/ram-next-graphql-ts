import React from "react";

import { AppHeader, Footer } from "../components";
import {
  Main,
  Section,
  Title,
  Inner,
  Thumbnail,
  Container,
} from "./styles/index";

export default function AppLayout({
  children,
}: {
  children: React.ReactChild | React.ReactChildren;
}) {
  return (
    <>
      <AppHeader />
      <Main>
        <Section>
          <Title>The Rick and Morty APP</Title>
          <Inner>
            <Thumbnail
              src="./ram.svg"
              data-testid="main-thumbnail"
              alt="main wallpaper"
            />
          </Inner>
        </Section>

        <Container>{children}</Container>
        <Footer />
      </Main>
    </>
  );
}
