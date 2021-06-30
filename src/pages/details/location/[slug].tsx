import { GetServerSidePropsResult, NextPageContext } from "next";
import { useEffect, useState } from "react";

import { Details, Location, Pagination, Residents } from "../../../components";
import { ILocationWithResidents } from "../../../interfaces/location";
import graphqlClient from "../../../lib/graphql";
import { GET_LOCATION_BY_ID } from "./../../../graphql";
import { useModalContext } from "./../../../context";
import Head from "next/head";

interface IProps {
  data?: { location: ILocationWithResidents };
  error?: boolean;
}

export default function LocationPage({ data, error }: IProps) {
  const [activePage, setActivePage] = useState(1);

  const { setVisible } = useModalContext();

  useEffect(() => {
    if (error) {
      setVisible(true);
    }
  }, [error, setVisible]);

  return (
    <>
      <Head>
        <title>RAM Location</title>
        <meta name="description" content="Location description page" />
      </Head>
      {data && (
        <Details>
          <Location item={data.location} />
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
      )}
    </>
  );
}

interface ContextWithQuery extends NextPageContext {
  query: {
    slug: string;
  };
}

interface IRequest {
  location: ILocationWithResidents;
}

export async function getServerSideProps({
  query,
}: ContextWithQuery): Promise<GetServerSidePropsResult<IProps>> {
  const { data, error } = await graphqlClient.query<IRequest>({
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
