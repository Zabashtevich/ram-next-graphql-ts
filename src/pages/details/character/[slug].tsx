import { GetServerSidePropsResult, NextPageContext } from "next";
import { Character, Details } from "../../../components";
import { QuerieVariables } from "../../../interfaces";
import { ICharacterItem } from "../../../interfaces/characters";
import graphqlClient from "../../../lib/graphql";
import { GET_CHARACTER_BY_ID } from "../../../graphql";

interface ICharacterPage {
  item?: {
    character: ICharacterItem;
  };
  error?: boolean;
}

export default function CharacterPage({ item, error }: ICharacterPage) {
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
}: ContextWithQuery): Promise<GetServerSidePropsResult<ICharacterPage>> {
  const { data, error } = await graphqlClient.query<
    { character: ICharacterItem },
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
      item: data,
    },
  };
}
