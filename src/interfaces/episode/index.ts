export interface IEpisode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
}

export interface IEpisodeWithCharacters extends IEpisode {
  characters: { id: string; name: string; image: string }[];
}
