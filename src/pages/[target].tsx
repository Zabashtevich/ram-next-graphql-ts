import { GetStaticPropsResult } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

import { CardsList, Search } from "../components";
import { ICharacters } from "../interfaces/characters";
import graphqlClient from "../lib/graphql";
import { GET_HOME_CARDS } from "../graphql";

interface ISearchPage {
  data?: ICharacters;
  error?: boolean;
}

export default function SearchPage({ data, error }: ISearchPage) {
  const initialState = data?.characters;
  const [items, setItems] = useState(null);
  const [value, setValue] = useState("");

  const debounced = useDebouncedCallback((value) => {
    setValue(value);
  }, 1000);

  function searchHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    debounced(e.target.value);
  }

  useEffect(() => {
    if (value) {
    }
  }, [value]);

  return (
    <>
      <Head>
        <title>RAM APP</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Search onChange={searchHandler} />
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
        data,
      },
    };
  }
}