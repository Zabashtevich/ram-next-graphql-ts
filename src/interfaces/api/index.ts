import { IEpisode } from "./../episode/index";
import { ILocation } from "./../location/index";
import { ICharacterItem } from "../characters/index";

export interface ApiVariables {
  name: string;
}

export interface IProps {
  error?: boolean;
  results?: { results: IEpisode[] | ICharacterItem[] | ILocation[] };
}

export type IApiResponse = {
  episodes?: { results: IEpisode[] };
  characters?: { results: ICharacterItem[] };
  locations?: { results: ILocation[] };
};
