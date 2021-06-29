import { SearchApiProps } from "./../../interfaces/api/index";
import type { NextApiRequest, NextApiResponse } from "next";
import graphqlClient from "../../lib/graphql";
import { GET_ITEMS_BY_NAME } from "../../graphql";
import { SearchPageResponse } from "../../interfaces/pages/SearchPage";

interface RequestInterface extends NextApiRequest {
  body: string;
  query: {
    target: string;
  };
}

export default async function handler(
  req: RequestInterface,
  res: NextApiResponse<SearchApiProps>,
) {
  const search = req.body;

  try {
    const { data } = await graphqlClient.query<SearchPageResponse>({
      query: GET_ITEMS_BY_NAME(req.query.target),
      variables: { name: search },
    });
    res.status(200).json({
      data,
    });
  } catch (catchedError) {
    res.status(500).json({ error: true });
  }
}
