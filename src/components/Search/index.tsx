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
        <Wrapper
          onClick={activateSearch}
          searchActive={searchActive}
          data-testid="search-container"
        >
          <Input
            type="search"
            placeholder="Search..."
            onChange={onChange}
            value={searchValue}
            data-testid="search-input"
          />
          <SearchIcon visible={!searchActive ? 1 : 0} />
          {loading && (
            <Spinner src={"/spinner.svg"} data-testid="search-spinner" />
          )}
          {notFound && <Placeholder>Not found</Placeholder>}
          <CloseIcon
            data-testid="search-close-icon"
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
