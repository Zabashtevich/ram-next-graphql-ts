import { CharacterItem } from "../Character";

export interface HomePageRequestItem extends CharacterItem {}

export interface HomeRequestData {
  characters: {
    results: HomePageRequestItem[];
  };
}

export interface HomePageProps {
  error?: boolean;
  data?: HomeRequestData;
}
