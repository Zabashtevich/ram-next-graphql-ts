import { GetServerSidePropsResult } from "next";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { NextRouter, useRouter } from "next/router";

import {
  CardsList,
  Episode,
  Pagination,
  Search,
  Location,
  Character,
} from "../../components";
import graphqlClient from "../../lib/graphql";
import { useSearch } from "../../hooks";
import { useEffect } from "react";
import getQuerySearch from "../../graphql/search/index";
import {
  SearchPageContext,
  SearchPageProps,
  SearchPageResponse,
} from "../../interfaces/pages/SearchPage";
import { useRef } from "react";
import getPagesAmount from "../../utils/search-page/getPagesAmount";

export default function SearchPage({
  data,
  pagesAmount,
  error,
}: SearchPageProps) {
  const [searchActive, setSearchActive] = useState(false);
  const [cards, setCards] = useState<SearchPageResponse>();

  const initialCards = useRef<SearchPageResponse>();

  const { query, push }: NextRouter = useRouter();

  const { loading, response, searchError, setSearchValue } = useSearch(
    query.target as string,
  );

  const debounced = useDebouncedCallback((value) => {
    setSearchValue(value);
  }, 1000);

  function searchHandler(e: React.ChangeEvent<HTMLInputElement>) {
    debounced(e.target.value);
  }

  function resetSearch() {
    setCards(initialCards.current!);
  }

  useEffect(() => {
    if (response) {
      setCards(response);
    }
  }, [response]);

  useEffect(() => {
    if (data) {
      initialCards.current = data;
      setCards(initialCards.current);
    }
  }, [data, query.target]);

  console.log(cards);

  return (
    <>
      <Search
        onChange={searchHandler}
        searchActive={searchActive}
        setSearchActive={setSearchActive}
        resetSearch={resetSearch}
      />

      {cards && "characters" in cards && (
        <CardsList
          items={cards.characters.results}
          renderItem={(item) => <Character item={item} />}
        />
      )}
      {cards && "locations" in cards && (
        <CardsList
          items={cards.locations.results}
          renderItem={(item) => <Location item={item} />}
        />
      )}
      {cards && "episodes" in cards && (
        <CardsList
          items={cards.episodes.results}
          renderItem={(item) => <Episode episode={item} />}
        />
      )}
      {!error && (
        <Pagination
          activePage={Number(query.page)}
          amount={Number(pagesAmount)}
          onItemClick={(item: number) =>
            push({
              query: {
                ...query,
                page: item,
              },
            })
          }
        />
      )}
    </>
  );
}

export async function getServerSideProps({
  query,
}: SearchPageContext): Promise<GetServerSidePropsResult<SearchPageProps>> {
  const { error, data } = await graphqlClient.query<SearchPageResponse>({
    query: getQuerySearch(query.target),
    variables: { page: Number(query.page) || 1 },
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
        data,
        pagesAmount: getPagesAmount(data),
      },
    };
  }
}
