import { GetStaticPropsResult } from "next";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { NextRouter, useRouter } from "next/router";

import { CardsList, Search } from "../../components";
import graphqlClient from "../../lib/graphql";
import { GET_HOME_CARDS } from "../../graphql";
import { useSearch } from "../../hooks";
import { useEffect } from "react";
import { ICharacterItem, ICharacters } from "../../interfaces/characters/index";
import { IEpisode } from "../../interfaces/episode/index";
import { ILocation } from "../../interfaces/location/index";

interface ISearchPage {
  items?: { results: ICharacterItem[] };
  error?: boolean;
}

interface ICards {
  results: ICharacterItem[] | IEpisode[] | ICharacterItem[] | ILocation[];
}

export default function SearchPage({ items, error }: ISearchPage) {
  const [searchActive, setSearchActive] = useState(false);
  const [cards, setCards] = useState(items);
  const initialState = items;

  const { query }: NextRouter = useRouter();

  const { loading, response, searchError, setSearchValue } = useSearch(
    query.target as string,
  );

  const debounced = useDebouncedCallback((value) => {
    setSearchValue(value);
  }, 1000);

  function searchHandler(e: React.ChangeEvent<HTMLInputElement>) {
    debounced(e.target.value);
  }

  useEffect(() => {
    if (response) {
      console.log(response.results);
    }
  }, [response]);

  return (
    <>
      <Search
        onChange={searchHandler}
        searchActive={searchActive}
        setSearchActive={setSearchActive}
      />

      {query.target === "characters" && (
        <CardsList items={[{}]} renderItem={(item) => <div></div>} />
      )}
      {query.target === "episodes" && (
        <CardsList items={[{}]} renderItem={(item) => <div></div>} />
      )}
      {query.target === "locations" && (
        <CardsList items={[{}]} renderItem={(item) => <div></div>} />
      )}
    </>
  );
}

export async function getServerSideProps(): Promise<
  GetStaticPropsResult<ISearchPage>
> {
  const { error, data } = await graphqlClient.query<ICharacters>({
    query: GET_HOME_CARDS,
  });

  if (error) {
    return {
      props: {
        error: true,
      },
    };
  } else {
    return {
      props: {
        items: data.characters,
      },
    };
  }
}
