import { GetServerSidePropsResult } from "next";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { NextRouter, useRouter } from "next/router";

import { CardsList, Pagination, Search } from "../../components";
import graphqlClient from "../../lib/graphql";
import { useSearch } from "../../hooks";
import { useEffect } from "react";
import getQuerySearch from "../../graphql/search/index";
import getInitialCards from "../../utils/search-page/getInitialCards";
import {
  SearchPageCards,
  SearchPageContext,
  SearchPageProps,
  SearchPageResponse,
} from "../../interfaces/pages/SearchPage";
import { useRef } from "react";

export default function SearchPage({
  data,
  pagesAmount,
  error,
}: SearchPageProps) {
  const [searchActive, setSearchActive] = useState(false);
  const [cards, setCards] = useState<SearchPageCards>([]);

  const initialCards = useRef<SearchPageCards>();

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

  useEffect(() => {
    if (response) {
      console.log(response);
      setCards(response.results);
    }
  }, [response]);

  useEffect(() => {
    if (data) {
      initialCards.current = getInitialCards(data as {});
      setCards(initialCards.current);
    }
  }, [data]);

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
        pagesAmount:
          (data.characters?.info.pages as string) ||
          (data.episodes?.info.pages as string) ||
          (data.locations?.info.pages as string),
      },
    };
  }
}
