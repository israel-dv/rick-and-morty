import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import { getAllCharacters } from "../api/rickMortyApi";
import { CharacterType } from "../utils/types/Characters.type";

export const useCharacters = (
  options?: UseQueryOptions<unknown, Error, CharacterType, string[]>
): UseQueryResult<CharacterType, Error> => {
  return useQuery({
    queryKey: ["allCharacters"],
    queryFn: getAllCharacters,
    ...options,
  });
};
