export interface ICharacterItem {
  status: string;
  species: string;
  image: string;
  name: string;
  id: string;
  origin: {
    id: string;
    name: string;
  };
  location: {
    name: string;
    id: string;
  };
}

export interface ICharacters {
  characters: {
    results: ICharacterItem[];
  };
}
