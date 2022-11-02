import axios from "axios";
import { CharacterType } from "../utils/types/Characters.type";

const RickClient = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const getAllCharacters = async (): Promise<CharacterType> => {
  const response = await RickClient.get("/character");
  return response.data;
};
