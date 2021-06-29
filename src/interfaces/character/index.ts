export interface ICharacter {
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

export interface ICharactersList {
  characters: {
    results: ICharacter[];
  };
}
