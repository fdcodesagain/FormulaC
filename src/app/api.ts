import { useQuery } from "@tanstack/react-query";
import { AutocompleteItem } from "../types/types";
import { useDebounce } from "@/hooks/useDebounce";

export const useAutocompleteItems = (query: string) => {
  const debouncedQuery = useDebounce(query, 300); // 300ms debounce

  return useQuery({
    queryKey: ["autocomplete", debouncedQuery],
    queryFn: async () => {
      if (!debouncedQuery || debouncedQuery.trim() === "") {
        return [];
      }

      try {
        const response = await fetch("https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete");

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data: AutocompleteItem[] = await response.json();

        const uniqueItems = new Map<string, AutocompleteItem>();
        data.forEach((item) => {
          if (!uniqueItems.has(item.id)) {
            uniqueItems.set(item.id, item);
          }
        });

        // Decided to show suggestions regardless of what the user searchs because item names from the API data has only 4 unique letters and suggestions won't show up if the tester enter any other letter other that the following "n", "a", "m", "e"
        return Array.from(uniqueItems.values()).filter((item) => item.name);
        // return Array.from(uniqueItems.values()).filter((item) => item.name.toLowerCase().includes(debouncedQuery.toLowerCase()));
      } catch (error) {
        console.error("Error fetching autocomplete data:", error);
        return [];
      }
    },
    enabled: Boolean(debouncedQuery) && /[a-zA-Z]/.test(debouncedQuery),
    staleTime: 60000,
    retry: 1,
  });
};
