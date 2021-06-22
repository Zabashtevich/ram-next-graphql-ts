import { useState } from "react";
import {
  Section,
  Container,
  Title,
  Wrapper,
  Input,
  SearchIcon,
  CloseIcon,
} from "./styles/search";

export default function Search() {
  const [searchActive, setSearchActive] = useState<boolean>(false);

  function searchToggler(): void {
    setSearchActive((prev) => !prev);
  }

  return (
    <Section>
      <Container>
        <Title>Search character or places:</Title>
        <Wrapper onClick={searchToggler} searchActive={searchActive}>
          <Input type="search" placeholder="search..." />
          {!searchActive && <SearchIcon />}
          {searchActive && <CloseIcon />}
        </Wrapper>
      </Container>
    </Section>
  );
}
