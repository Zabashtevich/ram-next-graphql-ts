import { GetServerSidePropsResult, NextPageContext } from "next";
import { useState } from "react";

import { Details, Location, Pagination, Residents } from "../../../components";
import {
  LocationVariables,
  LocationRequestData,
  LocationPageProps,
} from "../../../interfaces/Location";
import graphqlClient from "../../../lib/graphql";
import { GET_LOCATION_BY_ID } from "../../../request";

export default function LocationPage({ data, error }: LocationPageProps) {
  const [activePage, setActivePage] = useState(1);

  return (
    data && (
      <Details>
        <Location item={data} />
        <Residents
          residents={data.location.residents.slice(
            activePage * 10 - 10,
            activePage * 10,
          )}
        />
        <Pagination
          activePage={activePage}
          setActivePage={setActivePage}
          amount={Math.ceil(data.location.residents.length / 10)}
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
}: ContextWithQuery): Promise<GetServerSidePropsResult<LocationPageProps>> {
  const { data, error } = await graphqlClient.query<
    LocationRequestData,
    LocationVariables
  >({
    query: GET_LOCATION_BY_ID,
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
