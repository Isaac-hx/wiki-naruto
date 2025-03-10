import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { ArrayCharacter, Character } from "../../types/type";
import { fetchCharacterById, fetchCharacters } from "../../services/api";
import CardContainer from "../../components/CardContainer";
import CardHeader from "../../components/CardHeader";
import CardFooter from "../../components/CardFooter";
import { HiOutlineHeart, HiOutlineShare, HiChevronLeft } from "react-icons/hi";
import Button from "../../components/Button";
import CardTitle from "../../components/CardTitle";
import CardContent from "../../components/CardContent";
import Badge from "../../components/Badge";
import { Tabs } from "../../components/Tabs";
import { TabTrigger } from "../../components/TabTrigger";
import { TabContent } from "../../components/TabContent";
import { TabList } from "../../components/TabList";

const CharacterDetail = () => {
  const [characterById, setCharacterById] = useState<ArrayCharacter | null>(
    null
  );
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchCharacterById(id);
        setCharacterById(res);
        console.log(res);
        console.log(characterById?.personal.age["Part I"]);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <div className="contents">
      <div className="container mx-auto  px-2 py-8">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-gray-500 curso-pointer"
          >
            <HiChevronLeft width={24} height={24} />
            Back to Characters
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Character Image and Basic Info */}
          <div className="flex flex-col gap-4">
            <CardContainer className="overflow-hidden w-full">
              <div className="relative w-full aspect-[3/4]">
                <img
                  src={characterById?.images[0]}
                  alt="Naruto Uzumaki"
                  className="w-full h-full object-cover absolute top-0 left-0"
                />
              </div>
              <CardFooter className="flex justify-between p-4">
                <Button variant="outline" size="icon">
                  <HiOutlineHeart width={24} height={24} />
                  <span className="sr-only">Add to favorites</span>
                </Button>
                <Button variant="outline" size="icon">
                  <HiOutlineShare width={24} height={24} />
                  <span className="sr-only">Share</span>
                </Button>
              </CardFooter>
            </CardContainer>

            <CardContainer>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Age</span>
                  <span>
                    {characterById?.personal.age === undefined
                      ? "null"
                      : characterById?.personal.age["Part I"] ||
                        characterById?.personal.age["Part II"]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Birthday</span>
                  <span>{characterById?.personal.birthdate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Height</span>
                  <span>
                    {characterById?.personal.height === undefined
                      ? "null"
                      : characterById?.personal.height["Part I"] ||
                        characterById?.personal.height["Part II"]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Weight</span>
                  <span>
                    {characterById?.personal.weight === undefined
                      ? "null"
                      : characterById?.personal.weight["Part I"] ||
                        characterById?.personal.weight["Part II"]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Blood Type</span>
                  <span>{characterById?.personal.bloodType}</span>
                </div>
              </CardContent>
            </CardContainer>
          </div>
          {/* character detail */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">{characterById?.name}</h1>
                <div className="flex gap-2">
                  <Badge className="ring-1 text-black">
                    {characterById?.personal.clan || "No clan"}
                  </Badge>
                  <Badge className="ring-1 bg-black text-white">
                    {characterById?.personal.affiliation[0]}
                  </Badge>
                </div>
              </div>
              <p className="text-muted-foreground text-gray-600">
                {characterById?.personal.titles === undefined
                  ? characterById?.name
                  : characterById?.personal.titles[0]}
              </p>
            </div>
            <Tabs defaultValue="personal" className="w-full justify-around">
              <TabList className="grid w-full grid-cols-4">
                <TabTrigger value="personal">Personal</TabTrigger>
                <TabTrigger value="chakra">Chakra</TabTrigger>
                <TabTrigger value="abilities">Abilities</TabTrigger>
              </TabList>

              {/* Personal Tab */}
              <TabContent value="personal" className="space-y-4">
                <CardContainer>
                  <CardHeader>
                    <CardTitle>Personal Details</CardTitle>
                    <p className="text-sm text-gray-400">
                      Background and personal information
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Occupation</h3>
                      <p>
                        {characterById?.personal.occupation === undefined
                          ? "No Information"
                          : Array.isArray(characterById.personal.occupation)
                          ? characterById?.personal.occupation.map(
                              (value: string) => <p>{value}</p>
                            )
                          : characterById.personal.occupation}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Family</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {Object.values(characterById?.family || {}).map(
                          (value) => (
                            <li key={value}>{value}</li>
                          )
                        )}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Ninja Rank</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {characterById?.rank === undefined
                          ? "No Information"
                          : Object.values(
                              characterById?.rank.ninjaRank || {}
                            ).map((value) => <li key={value}>{value}</li>)}
                      </ul>
                    </div>
                  </CardContent>
                </CardContainer>
              </TabContent>

              {/* Chakra Tab */}
              <TabContent value="chakra" className="space-y-4">
                <CardContainer>
                  <CardHeader>
                    <CardTitle>Chakra Information</CardTitle>
                    <p className="text-sm text-gray-400">
                      Chakra types, reserves, and special abilities
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        {/* <ChakraIcon className="h-5 w-5 text-blue-500" /> */}
                        <h3 className="font-semibold">Chakra Nature</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {characterById?.natureType?.map((item) => (
                          <Badge className="bg-gray-500 hover:bg-gray:700 text-white">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold">Classification</h3>
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <ul className="list-disc pl-5 space-y-1">
                              {characterById?.personal.classification ===
                              undefined ? (
                                "No Information"
                              ) : Array.isArray(
                                  characterById.personal.classification
                                ) ? (
                                characterById.personal.classification.map(
                                  (value: string) => (
                                    <li key={value}>{value}</li>
                                  )
                                )
                              ) : (
                                <li>{characterById.personal.classification}</li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">
                        Special Chakra Abilities
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {characterById?.personal.kekkeiGenkai === undefined ? (
                          "No Information"
                        ) : Array.isArray(
                            characterById?.personal.kekkeiGenkai
                          ) ? (
                          characterById?.personal.kekkeiGenkai.map(
                            (values: string) => <li key={values}>{values}</li>
                          )
                        ) : (
                          <li>{characterById.personal.kekkeiGenkai}</li>
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </CardContainer>
              </TabContent>

              {/* Abilities Tab */}
              <TabContent value="abilities" className="space-y-4">
                <CardContainer>
                  <CardHeader>
                    <CardTitle>Combat Abilities</CardTitle>
                    <p className="text-sm text-gray-400">
                      Jutsu, techniques, and combat skills
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">
                        Signature Techniques
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {characterById?.jutsu?.map((value) => (
                          <li key={value}>{value}</li>
                        ))}
                      </ul>
                    </div>

                    <hr />
                    <div className="space-y-2">
                      <h3 className="font-semibold">Combat Stats</h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <ul className="pl-5 list-disc space-y-1">
                          <i>Coming soon...</i>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </CardContainer>
              </TabContent>
            </Tabs>
            <CardContainer>
              <CardHeader>
                <CardTitle>Relationships</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold">Friends & Allies</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="text-white ring-1 bg-black">
                        Sasuke Uchiha (Best Friend/Rival)
                      </Badge>
                      <Badge className="text-white ring-1 bg-black ">
                        Sakura Haruno
                      </Badge>
                      <Badge className="text-white ring-1 bg-black ">
                        Kakashi Hatake
                      </Badge>
                      <Badge className="text-white ring-1 bg-black ">
                        Jiraiya (Mentor)
                      </Badge>
                      <Badge className="text-white ring-1 bg-black ">
                        Iruka Umino
                      </Badge>
                      <Badge className="text-white ring-1 bg-black ">
                        Konoha 11
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </CardContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CharacterDetail;
