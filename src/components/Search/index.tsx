import { useState } from "react";
import {
  Section,
  Container,
  Title,
  Wrapper,
  Input,
  SearchIcon,
  CloseIcon,
  Spinner,
  Placeholder,
} from "./styles/search";

interface ISearch {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  activateSearch: () => void;
  disableSearch: () => void;
  searchActive: boolean;
  loading: boolean;
  notFound: boolean;
  searchValue: string;
}

export default function Search({
  onChange,
  searchActive,
  activateSearch,
  disableSearch,
  loading,
  notFound,
  searchValue,
}: ISearch) {
  return (
    <Section>
      <Container>
        <Title>Search character or places:</Title>
        <Wrapper onClick={activateSearch} searchActive={searchActive}>
          <Input
            type="search"
            placeholder="Search..."
            onChange={onChange}
            value={searchValue}
          />
          <SearchIcon visible={!searchActive ? 1 : 0} />
          {loading && <Spinner src={"/spinner.svg"} />}
          {notFound && <Placeholder>Not found</Placeholder>}
          <CloseIcon
            visible={searchActive ? 1 : 0}
            onClick={(e) => {
              e.stopPropagation();
              disableSearch();
            }}
          />
        </Wrapper>
      </Container>
    </Section>
  );
}
