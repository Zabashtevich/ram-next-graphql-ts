import { SearchPageResponse } from "../../interfaces/pages/SearchPage";

export default function getPagesAmount(response: SearchPageResponse) {
  if ("characters" in response) return response.characters.info.pages;
  if ("locations" in response) return response.locations.info.pages;
  if ("episodes" in response) return response.episodes.info.pages;
}
