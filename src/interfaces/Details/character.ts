export interface CharacterPageProps {
  item?: CharacterPageRequestItem;
  error?: boolean;
}

export interface CharacterPageRequestItem {
  character: {
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
  };
}

export interface CharacterPageQueryVariables {
  id: string;
}
