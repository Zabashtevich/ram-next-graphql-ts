import { GetServerSidePropsResult, NextPageContext } from "next";
import { Character, Details } from "../../../components";
import { ICharacter } from "../../../interfaces/character";
import graphqlClient from "../../../lib/graphql";
import { GET_CHARACTER_BY_ID } from "../../../graphql";
import { useEffect } from "react";
import { useModalContext } from "../../../context";
import Head from "next/head";

export interface IProps {
  data?: {
    character: ICharacter;
  };
  error?: boolean;
}

export default function CharacterPage({ data, error }: IProps) {
  const { setVisible } = useModalContext();

  useEffect(() => {
    if (error) {
      setVisible(true);
    }
  }, [error, setVisible]);

  return (
    <>
      <Head>
        <title>RAM Character</title>
        <meta name="description" content="Character description page" />
      </Head>
      {data && (
        <Details>
          <Character item={data.character} />
        </Details>
      )}
    </>
  );
}

interface ContextWithQuery extends NextPageContext {
  query: {
    slug: string;
  };
}

export async function getServerSideProps({
  query,
}: ContextWithQuery): Promise<GetServerSidePropsResult<IProps>> {
  const { data, error } = await graphqlClient.query<{ character: ICharacter }>({
    query: GET_CHARACTER_BY_ID,
    variables: {
      id: query.slug,
    },
  });

  if (error) {
    return {
      props: {
        error: true,
      },
    };
  }
  return {
    props: {
      data,
    },
  };
}
