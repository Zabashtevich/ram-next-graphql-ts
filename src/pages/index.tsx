import { GetStaticPropsResult } from "next";
import Head from "next/head";

import { CardsList, Character } from "../components";
import { ICharactersList } from "../interfaces/character";
import graphqlClient from "../lib/graphql";
import { GET_HOME_CARDS } from "../graphql";

interface IHome {
  data?: ICharactersList;
  error?: boolean;
}

export default function Home({ data, error }: IHome) {
  return (
    <>
      <Head>
        <title>RAM APP</title>
        <meta name="description" content="Generated by create next app" />
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
