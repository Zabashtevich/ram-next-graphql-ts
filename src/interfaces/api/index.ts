import { IEpisode } from "./../episode/index";
import { ILocation } from "./../location/index";
import { ICharacters } from "./../characters/index";

export interface ApiVariables {
  name: string;
}

export interface ApiRequest {
  data?:
    | ICharacters
    | { locations: { results: ILocation[] } }
    | { episodes: { results: IEpisode[] } };
  error?: boolean;
}
