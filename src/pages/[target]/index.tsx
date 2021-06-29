import { GetServerSidePropsResult } from "next";
import { useState, useEffect, useRef } from "react";
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
import getQuerySearch from "../../graphql/search/index";
import {
  SearchPageContext,
  SearchPageProps,
  SearchPageResponse,
} from "../../interfaces/pages/SearchPage";
import { getPagesAmount } from "../../utils";
import { useModalContext } from "../../context";

export default function SearchPage({
  data,
  pagesAmount,
  error,
}: SearchPageProps) {
  const [searchValue, setSearchValue] = useState("");
  const [catchedError, setCatchedError] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [cards, setCards] = useState<SearchPageResponse | null>(null);

  const { setVisible } = useModalContext();

  const initialCards = useRef<SearchPageResponse>();

  const { query, push }: NextRouter = useRouter();

  const { loading, response, searchError, setSearchTarget, refreshErrorState } =
    useSearch(query.target as string);

  const debounced = useDebouncedCallback((value) => {
    setCatchedError(false);
    setSearchTarget(value);
  }, 1000);

  function searchHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
    debounced(e.target.value);
  }

  function activateSearch() {
    setSearchActive(true);
  }

  function disableSearch() {
    setSearchValue("");
    setSearchActive(false);
    refreshErrorState();
    setCatchedError(false);
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

  useEffect(() => {
    if (searchError) {
      setCatchedError(true);
      setCards(null);
    }
  }, [searchError]);

  useEffect(() => {
    if (error) {
      setVisible(true);
    }
  }, [error, setVisible]);

  return (
    <>
      <Search
        onChange={searchHandler}
        searchActive={searchActive}
        activateSearch={activateSearch}
        disableSearch={disableSearch}
        searchValue={searchValue}
        notFound={catchedError}
        loading={loading}
      />

      {cards && "characters" in cards && (
        <CardsList
          items={cards.characters.results}
          renderItem={(item) => (
            <Character item={item} key={`${item.name + item.origin.name}`} />
          )}
        />
      )}
      {cards && "locations" in cards && (
        <CardsList
          items={cards.locations.results}
          renderItem={(item) => <Location item={item} key={item.name} />}
        />
      )}
      {cards && "episodes" in cards && (
        <CardsList
          items={cards.episodes.results}
          renderItem={(item) => <Episode episode={item} key={item.name} />}
        />
      )}
      {!catchedError && !searchActive && (
        <Pagination
          activePage={Number(query.page || 1)}
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
