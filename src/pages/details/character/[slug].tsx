import { GetServerSidePropsResult, NextPageContext } from "next";
import { Character, Details } from "../../../components";
import {
  CharacterProps,
  CharacterRequestData,
  CharacterVariables,
} from "../../../interfaces/Character";
import graphqlClient from "../../../lib/graphql";
import { GET_CHARACTER_BY_ID } from "../../../request";

export default function CharacterPage({ item, error }: CharacterProps) {
  return (
    item && (
      <Details>
        <Character item={item.character} />
      </Details>
    )
  );
}

interface ContextWithQuery extends NextPageContext {
  query: {
    slug: string;
  };
}

export async function getServerSideProps({
  query,
}: ContextWithQuery): Promise<GetServerSidePropsResult<CharacterProps>> {
  const { data, error } = await graphqlClient.query<
    CharacterRequestData,
    CharacterVariables
  >({
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
      item: data,
    },
  };
}
