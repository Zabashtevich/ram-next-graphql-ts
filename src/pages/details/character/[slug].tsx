import { GetServerSidePropsResult, NextPageContext } from "next";
import { Character, Details } from "../../../components";
import { QuerieVariables } from "../../../interfaces";
import { ICharacter } from "../../../interfaces/character";
import graphqlClient from "../../../lib/graphql";
import { GET_CHARACTER_BY_ID } from "../../../graphql";

export interface IProps {
  data?: {
    character: ICharacter;
  };
  error?: boolean;
}

export default function CharacterPage({ data, error }: IProps) {
  return (
    data && (
      <Details>
        <Character item={data.character} />
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
}: ContextWithQuery): Promise<GetServerSidePropsResult<IProps>> {
  const { data, error } = await graphqlClient.query<
    { character: ICharacter },
    QuerieVariables
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
      data,
    },
  };
}
