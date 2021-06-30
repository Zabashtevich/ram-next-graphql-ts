import { renderHook, act } from "@testing-library/react-hooks";
import { useSearch } from "./../../hooks";

describe("useSearch", () => {
  it("calling with correct url, methond, body, and return response", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ data: "dummy data" }),
    });

    const { result } = renderHook(() => useSearch("characters"));

    expect(result.current.loading).toBe(false);
    expect(result.current.response).toBe(null);
    expect(result.current.searchError).toBe(false);

    await act(async () => {
      result.current.setSearchTarget("characters");
    });

    expect(global.fetch).toHaveBeenCalledWith(
      "/api/search/?target=characters",
      {
        body: "characters",
        method: "POST",
      },
    );

    expect(result.current.response).toBe("dummy data");
    expect(result.current.searchError).toBe(false);
  });

  it("correctly setting mark searchError on catch", async () => {
    global.fetch = jest.fn().mockRejectedValue("error");

    const { result } = renderHook(() => useSearch("characters"));

    expect(result.current.loading).toBe(false);
    expect(result.current.response).toBe(null);
    expect(result.current.searchError).toBe(false);

    await act(async () => {
      result.current.setSearchTarget("characters");
    });

    expect(global.fetch).toHaveBeenCalledWith(
      "/api/search/?target=characters",
      {
        body: "characters",
        method: "POST",
      },
    );

    expect(result.current.response).toBe(null);
    expect(result.current.searchError).toBe(true);
  });

  it("correctly refresh error field on refreshError call", async () => {
    global.fetch = jest.fn().mockRejectedValue("error");

    const { result } = renderHook(() => useSearch("characters"));

    expect(result.current.loading).toBe(false);
    expect(result.current.response).toBe(null);
    expect(result.current.searchError).toBe(false);

    await act(async () => {
      result.current.setSearchTarget("characters");
    });

    expect(global.fetch).toHaveBeenCalledWith(
      "/api/search/?target=characters",
      {
        body: "characters",
        method: "POST",
      },
    );

    expect(result.current.response).toBe(null);
    expect(result.current.searchError).toBe(true);

    await act(async () => {
      result.current.refreshErrorState();
    });

    expect(result.current.searchError).toBe(false);
  });
});
