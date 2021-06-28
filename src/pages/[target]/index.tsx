import { GetStaticPropsResult, NextPageContext } from "next";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { NextRouter, useRouter } from "next/router";

import { CardsList, Pagination, Search } from "../../components";
import graphqlClient from "../../lib/graphql";
import { useSearch } from "../../hooks";
import { useEffect } from "react";
import { ICharacterItem, ICharacters } from "../../interfaces/characters/index";
import { IEpisode } from "../../interfaces/episode/index";
import { ILocation } from "../../interfaces/location/index";
import getQuerySearch from "../../graphql/search/index";

interface ISearchPage {
  items?: ICharacterItem[];
  error?: boolean;
}

type ICards = ICharacterItem[] | IEpisode[] | ICharacterItem[] | ILocation[];

export default function SearchPage({ items, error }: ISearchPage) {
  const [searchActive, setSearchActive] = useState(false);
  const [cards, setCards] = useState<ICards>([]);
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
      setCards(response.results);
    }
  }, [response]);

  useEffect(() => {
    if (items) {
      setCards(items);
    }
  }, [items]);
  console.log(items);
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
      <Pagination activePage={1} amount={100} setActivePage={(a) => a} />
    </>
  );
}
interface ContextWithQuery extends NextPageContext {
  query: {
    target: string;
    page: string;
  };
}

export async function getServerSideProps({
  query,
}: ContextWithQuery): Promise<GetStaticPropsResult<ISearchPage>> {
  const { error, data } = await graphqlClient.query<ICharacters>({
    query: getQuerySearch(query.target),
    variables: { page: 1 },
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
        items: data.characters.results,
      },
    };
  }
}
