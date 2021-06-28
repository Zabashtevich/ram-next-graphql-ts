import {
  Section,
  Container,
  Title,
  Wrapper,
  Input,
  SearchIcon,
  CloseIcon,
} from "./styles/search";

interface ISearch {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setSearchActive: (a: boolean) => void;
  searchActive: boolean;
}

export default function Search({
  onChange,
  searchActive,
  setSearchActive,
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
