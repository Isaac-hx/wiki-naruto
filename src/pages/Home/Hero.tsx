import { useEffect, useState } from "react";
import { fetchCharacters } from "../../services/api";
import { Character } from "../../types/type";
import Card from "../../components/Card";

const Hero = () => {
  const [character, setCharacter] = useState<Character>({});
  const [error, setError] = useState(false);
  useEffect(() => {
    const getCharacters = async () => {
      try {
        const dataCharacter = await fetchCharacters();
        setCharacter(dataCharacter);
      } catch (err) {
        setError(!error);
        console.error(err);
      }
    };
    getCharacters();
  }, []);
  return <div>{error ? <h2>Error</h2> : <Card data={character} />}</div>;
};

export default Hero;
