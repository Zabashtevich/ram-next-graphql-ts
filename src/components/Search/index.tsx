import {
  Section,
  Container,
  Title,
  Wrapper,
  Input,
  SearchIcon,
  CloseIcon,
  Spinner,
} from "./styles/search";

interface ISearch {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setSearchActive: (a: boolean) => void;
  searchActive: boolean;
  resetSearch: () => void;
  loading: boolean;
}

export default function Search({
  onChange,
  searchActive,
  setSearchActive,
  resetSearch,
  loading,
}: ISearch) {
  return (
    <Section>
      <Container>
        <Title>Search character or places:</Title>
        <Wrapper
          onClick={() => setSearchActive(true)}
          searchActive={searchActive}
        >
          <Input type="search" placeholder="Search..." onChange={onChange} />
          <SearchIcon visible={!searchActive ? 1 : 0} />
          {loading && <Spinner src={"/spinner.svg"} />}
          <CloseIcon
            visible={searchActive ? 1 : 0}
            onClick={(e) => {
              e.stopPropagation();
              setSearchActive(false);
              resetSearch();
            }}
          />
        </Wrapper>
      </Container>
    </Section>
  );
}
