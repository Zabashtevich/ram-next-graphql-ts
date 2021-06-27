import { GetServerSidePropsResult, NextPageContext } from "next";
import { useState } from "react";

import { Details, Location, Pagination, Residents } from "../../../components";
import { QuerieVariables } from "../../../interfaces";
import { ILocation } from "../../../interfaces/location";
import graphqlClient from "../../../lib/graphql";
import { GET_LOCATION_BY_ID } from "../../../graphql";

interface ILocationPage {
  data?: ILocation;
  error?: boolean;
}

export default function LocationPage({ data, error }: ILocationPage) {
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
}: ContextWithQuery): Promise<GetServerSidePropsResult<ILocationPage>> {
  const { data, error } = await graphqlClient.query<ILocation, QuerieVariables>(
    {
      query: GET_LOCATION_BY_ID,
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
