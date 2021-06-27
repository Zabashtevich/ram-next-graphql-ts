import { CHARACTER_FRAGMENT } from "./../../graphql/request";
import { gql } from "@apollo/client";

const Target = {
  characters: `
  ${CHARACTER_FRAGMENT}
  query GetCharactersByName($name: String!) {
    characters(filter: { name: $name }) {
      ...Character
  }
}

`,
};
export default function GET_ITEMS_BY_NAME(target: string) {
  // const query = Target[target as keyof typeof Target];
  return gql`
    ${Target.characters}
  `;
}
