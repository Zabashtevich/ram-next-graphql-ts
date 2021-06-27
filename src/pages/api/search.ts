import { ApiRequest, ApiVariables } from "./../../interfaces/api/index";
import type { NextApiRequest, NextApiResponse } from "next";
import graphqlClient from "../../lib/graphql";
import { GET_ITEMS_BY_NAME } from "../../graphql";

interface RequestInterface extends NextApiRequest {
  body: string;
  query: {
    target: string;
  };
}

export default async function handler(
  req: RequestInterface,
  res: NextApiResponse<ApiRequest>,
) {
  const search = req.body;

  try {
    const { data } = await graphqlClient.query<ApiRequest, ApiVariables>({
      query: GET_ITEMS_BY_NAME(req.query.target),
      variables: { name: search },
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: true });
  }
}
