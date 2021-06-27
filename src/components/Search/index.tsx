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

export default function Search({ onChange }: any) {
  const [searchActive, setSearchActive] = useState<boolean>(false);

  return (
    <Section>
      <Container>
        <Title>Search character or places:</Title>
        <Wrapper
          onClick={() => setSearchActive(true)}
          searchActive={searchActive}
        >
          <Input type="search" placeholder="Search..." />
          <SearchIcon visible={!searchActive ? 1 : 0} />
          <CloseIcon
            visible={searchActive ? 1 : 0}
            onClick={(e) => {
              e.stopPropagation();
              setSearchActive(false);
            }}
          />
        </Wrapper>
      </Container>
    </Section>
  );
}
