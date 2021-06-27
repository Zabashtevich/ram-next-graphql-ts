export interface IEpisode {
  episode: {
    name: string;
    air_date: string;
    episode: string;
    characters: { id: string; name: string; image: string }[];
  };
}
