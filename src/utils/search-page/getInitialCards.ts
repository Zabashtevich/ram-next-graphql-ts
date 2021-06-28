import {
  SearchPageCards,
  SearchPageResponse,
} from "./../../interfaces/pages/SearchPage";

export default function getInitialCards(
  response: SearchPageResponse,
  target: string,
): SearchPageCards {
  return {
    results: response.characters?.results,
  };
}
