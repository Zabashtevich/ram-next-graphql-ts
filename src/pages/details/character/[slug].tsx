import { GetServerSidePropsResult, NextPageContext } from "next";
import { Character, Details } from "../../../components";
import {
  CharacterPageProps,
  CharacterPageRequestItem,
  CharacterPageQueryVariables,
} from "../../../interfaces/Details/character";
import graphqlClient from "../../../lib/graphql";
import { GET_CHARACTER_BY_ID } from "../../../request";

export default function CharacterPage({ item, error }: CharacterPageProps) {
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
}: ContextWithQuery): Promise<GetServerSidePropsResult<CharacterPageProps>> {
  const { data, error } = await graphqlClient.query<
    CharacterPageRequestItem,
    CharacterPageQueryVariables
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
