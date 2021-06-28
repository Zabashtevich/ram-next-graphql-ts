import { gql } from "@apollo/client";
import { charactersListFragment } from "../fragments";

const Target = {
  characters: `
  ${charactersListFragment}
  query GetCharactersByName($name: String!) {
    characters(filter: { name: $name }) {
      ...Character
  }
}`,
  locations: `query GetLocationByName($name: String!) {
    locations(filter: {name: $name}) {
     results {
      id
      name
      type
      dimension
     }
    }
  }`,
  episodes: `query GetEpisodesByName($name: String!) {
    episodes(filter: {name: $name}) {
      results {
        id
        name
        air_date
        episode
      }
    }
  }`,
};
export default function GET_ITEMS_BY_NAME(target: string) {
  const query = Target[target as keyof typeof Target];
  return gql`
    ${query}
  `;
}
