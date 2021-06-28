import {
  IProps,
  ApiVariables,
  IApiResponse,
} from "./../../interfaces/api/index";
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
  res: NextApiResponse<IProps>,
) {
  GET_ITEMS_BY_NAME("characters");
  // try {
  //   const { data } = await graphqlClient.query({
  //     query: GET_ITEMS_BY_NAME("characters"),
  //     variables: { name: "rick" },
  //   });

  //   res.status(200).json({
  //     results: 123,
  //   });
  // } catch (error) {
  //   res.status(400).json({ error: true });
  // }
}
