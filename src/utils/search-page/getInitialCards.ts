import {
  SearchPageCards,
  SearchPageResponse,
} from "./../../interfaces/pages/SearchPage";

export default function getInitialCards(
  response: SearchPageResponse,
): SearchPageCards {
  return (response.characters?.results ||
    response.locations?.results ||
    response.episodes?.results) as [];
}
