import { gql } from "@apollo/client";
import { cardsQueries } from "./queries";

export default function getQuerySearch(target: string) {
  const query = cardsQueries[target as keyof typeof cardsQueries];

  return gql`
    ${query}
  `;
}
