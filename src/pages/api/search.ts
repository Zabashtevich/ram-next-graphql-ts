import type { NextApiRequest, NextApiResponse } from "next";
import graphqlClient from "../../lib/graphql";
import { GET_ITEMS_BY_NAME } from "../../graphql";

interface RequestInterface extends NextApiRequest {
  body: string;
  query: {
    target: string;
  };
}

interface Variables {
  name: string;
}

export default async function handler(
  req: RequestInterface,
  res: NextApiResponse<{ name?: string; error?: boolean }>,
) {
  const search = req.body;

  try {
    const { data } = await graphqlClient.query({
      query: GET_ITEMS_BY_NAME(req.query.target),
      variables: { name: search },
    });
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error: true });
  }
}
