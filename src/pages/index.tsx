import { GetStaticPropsResult } from "next";
import Head from "next/head";
import { useEffect } from "react";

import { CardsList, Character } from "../components";
import { ICharactersList } from "../interfaces/character";
import graphqlClient from "../lib/graphql";
import { GET_HOME_CARDS } from "../graphql";
import { useModalContext } from "../context";

interface IHome {
  data?: ICharactersList;
  error?: boolean;
}

export default function Home({ data, error }: IHome) {
  const { setVisible } = useModalContext();

  useEffect(() => {
    if (error) {
      setVisible(true);
    }
  }, [error, setVisible]);

  return (
    <>
      <Head>
        <title>RAM APP</title>
        <meta name="description" content="Home page" />
      </Head>
      {data && (
        <CardsList
          items={data.characters.results.slice(0, 6)}
          renderItem={(item) => <Character key={item.id} item={item} />}
        />
      )}
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<IHome>> {
  const { error, data } = await graphqlClient.query<ICharactersList>({
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
