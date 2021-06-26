import { GetServerSidePropsResult, NextPageContext } from "next";
import { Details, Episode } from "../../../components";
import {
  EpisodeProps,
  EpisodeVariables,
  IEpisode,
} from "../../../interfaces/Episode";
import graphqlClient from "../../../lib/graphql";
import { GET_EPISODE_BY_ID } from "../../../request";

export default function EpisodePage({ data, error }: EpisodeProps) {
  return (
    data && (
      <Details>
        <Episode episode={data.episode} />
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
}: ContextWithQuery): Promise<GetServerSidePropsResult<EpisodeProps>> {
  const { error, data } = await graphqlClient.query<IEpisode, EpisodeVariables>(
    {
      query: GET_EPISODE_BY_ID,
      variables: {
        id: query.slug,
      },
    },
  );

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
