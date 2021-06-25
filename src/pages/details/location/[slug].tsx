import { GetServerSidePropsResult, NextPageContext } from "next";

import { Details, Location } from "../../../components";
import {
  LocationVariables,
  LocationRequestData,
} from "../../../interfaces/Location";
import graphqlClient from "../../../lib/graphql";
import { GET_LOCATION_BY_ID } from "../../../request";

export default function LocationPage() {
  return (
    <Details>
      <Location />
    </Details>
  );
}

interface ContextWithQuery extends NextPageContext {
  query: {
    slug: string;
  };
}

export async function getServerSideProps({
  query,
}: ContextWithQuery): Promise<GetServerSidePropsResult<LocationRequestData>> {
  const { data, error } = await graphqlClient.query<
    LocationRequestData,
    LocationVariables
  >({
    query: GET_LOCATION_BY_ID,
    variables: {
      id: query.slug,
    },
  });

  return { props: data };
}
