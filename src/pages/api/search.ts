import type { NextApiRequest, NextApiResponse } from "next";
import graphqlClient from "../../lib/graphql";
import { GET_ITEMS_BY_NAME } from "../../graphql";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const search = req.body;

  const { data } = await graphqlClient.query({
    query: GET_ITEMS_BY_NAME("characters"),
    variables: { name: "rick" },
  });

  console.log(data);

  res.status(200).json({ name: "John Doe" });
}
