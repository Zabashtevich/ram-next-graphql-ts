import { useEffect, useState } from "react";

import { ILocation } from "../../interfaces/location/index";
import { IEpisode } from "../../interfaces/episode/index";
import { ICharacterItem } from "../../interfaces/characters/index";

interface IUseSearch {
  loading: boolean;
  searchError: boolean;
  response: null | IResponse;
}

interface IResponse {
  results: ICharacterItem[] | IEpisode[] | ILocation[];
}

interface UseSearchProps extends IUseSearch {
  setSearchValue: (value: string) => void;
}

export default function useSearch(target: string): UseSearchProps {
  const [{ loading, response, searchError }, setSettings] =
    useState<IUseSearch>({
      loading: false,
      response: null,
      searchError: false,
    });
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    let mounted = true;
    if (searchValue && mounted) {
      setSettings((prev) => ({ ...prev, loading: true }));
      fetch(`/api/search/?target=${target}`, {
        method: "POST",
        body: searchValue,
      })
        .then((data) => data.json())
        .then((items: IResponse) => {
          setSearchValue("");
          setSettings({ loading: false, response: items, searchError: false });
        })
        .catch(() => {
          setSearchValue("");
          setSettings({ loading: false, response: null, searchError: true });
        });
    }

    return () => {
      mounted = false;
    };
  }, [searchValue, target]);

  return { loading, response, searchError, setSearchValue };
}
