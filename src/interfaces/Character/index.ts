export interface CharacterItem {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
  location: {
    name: string;
    id: string;
  };
  origin: {
    name: string;
    id: string;
  };
}

export interface CharacterRequestData {
  character: CharacterItem;
}

export interface CharacterProps {
  item?: CharacterRequestData;
  error?: boolean;
}

export interface CharacterVariables {
  id: string;
}
