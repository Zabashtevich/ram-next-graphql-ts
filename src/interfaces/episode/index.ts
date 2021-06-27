export interface IEpisode {
  episode: {
    id: string;
    name: string;
    air_date: string;
    episode: string;
    characters: { id: string; name: string; image: string }[];
  };
}
