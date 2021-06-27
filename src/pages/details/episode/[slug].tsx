import { GetServerSidePropsResult, NextPageContext } from "next";
import { useState } from "react";
import { Details, Episode, Pagination, Residents } from "../../../components";
import {
  EpisodePageProps,
  EpisodeVariables,
  IEpisode,
} from "../../../interfaces/Episode";
import graphqlClient from "../../../lib/graphql";
import { GET_EPISODE_BY_ID } from "../../../request";

export default function EpisodePage({ data, error }: EpisodePageProps) {
  const [activePage, setActivePage] = useState(1);

  return (
    data && (
      <Details>
        <Episode episode={data} />
        <Residents
          residents={data.episode.characters.slice(
            activePage * 10 - 10,
            activePage * 10,
          )}
        />
        <Pagination
          amount={Math.ceil(data.episode.characters.length / 10)}
          activePage={activePage}
          setActivePage={setActivePage}
        />
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
}: ContextWithQuery): Promise<GetServerSidePropsResult<EpisodePageProps>> {
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
