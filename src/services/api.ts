import axios from "axios";
import { ArrayCharacter, Character } from "../types/type";
const API_URL = `https://dattebayo-api.onrender.com`;

const fetchCharacters = async (): Promise<Character> => {
  try {
    //Fetching data api using axios
    const respJSON = await axios.get(`${API_URL}/characters`);
    return respJSON.data;
  } catch (erorr) {
    throw new Error("Error from fetch data!");
  }
};
const fetchCharacterById = async (
  id: string | undefined
): Promise<ArrayCharacter> => {
  try {
    const respJson = await axios.get(`${API_URL}/characters/${id}`);
    return respJson.data;
  } catch (error) {
    throw new Error("Error from fetch data!");
  }
};
export { fetchCharacters, fetchCharacterById };
