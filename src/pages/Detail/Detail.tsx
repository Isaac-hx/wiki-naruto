import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ArrayCharacter, Character } from "../../types/type";
import { fetchCharacterById, fetchCharacters } from "../../services/api";

const Detail = () => {
  const [characterById, setCharacterById] = useState<ArrayCharacter | null>(
    null
  );
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchCharacterById(id);
        setCharacterById(res);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <div className="bg-background text-foreground">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-10 px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <img
                src={characterById?.images[0]}
                alt="Anime Key Visual"
                width={600}
                height={800}
                className="w-full max-w-[400px] mx-auto rounded-lg object-contain"
                style={{ aspectRatio: "600/800", objectFit: "cover" }}
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">{characterById?.name}</h1>
              <p className="text-muted-foreground">
                A brief description of the anime, including its genre, setting,
                and a high-level overview of the story.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Detail;
