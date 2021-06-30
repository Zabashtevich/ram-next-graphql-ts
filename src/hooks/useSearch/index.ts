import { useEffect, useState } from "react";
import { SearchPageResponse } from "../../interfaces/pages/SearchPage";

interface IUseSearch {
  loading: boolean;
  searchError: boolean;
  response: null | SearchPageResponse;
}

interface IResponse {
  data?: SearchPageResponse;
  error?: boolean;
}

export interface UseSearchProps extends IUseSearch {
  setSearchTarget: (value: string) => void;
  refreshErrorState: () => void;
}

export default function useSearch(target: string): UseSearchProps {
  const [searchValue, setSearchTarget] = useState("");
  const [{ loading, response, searchError }, setSettings] =
    useState<IUseSearch>({
      loading: false,
      response: null,
      searchError: false,
    });

  function refreshErrorState() {
    setSettings((prev) => ({ ...prev, searchError: false }));
  }

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
          const { data, error } = items;

          if (data) {
            setSearchTarget("");
            setSettings({
              loading: false,
              response: items.data!,
              searchError: false,
            });
          }
          if (error) {
            setSearchTarget("");
            setSettings({
              loading: false,
              response: null,
              searchError: true,
            });
          }
        })
        .catch(() => {
          setSearchTarget("");
          setSettings({ loading: false, response: null, searchError: true });
        });
    }

    return () => {
      mounted = false;
    };
  }, [searchValue, target]);

  return { loading, response, searchError, setSearchTarget, refreshErrorState };
}
