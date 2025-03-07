import axios from "axios"
import { Character } from "../types/type"
const API_URL = `https://dattebayo-api.onrender.com`

const fetchCharacters = async ():Promise<Character>=>{
   try{
    //Fetching data api using axios
    const respJSON = await axios.get(`${API_URL}/characters`)
    return respJSON.data

   }catch(erorr){
    throw new Error("Error")
   }


}

export {
    fetchCharacters
}