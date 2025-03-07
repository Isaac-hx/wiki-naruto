import React from "react";
import { Character } from "../../types/type";
import { Link } from "react-router";

interface CardProps {
  data: Character;
}
const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <ul className="flex flex-wrap justify-center gap-4 mt-10">
      {data.characters?.map((item) => (
        <Link to={`/detail/${item.id}`}>
          <div
            key={item.id}
            className="p-4 cursor-pointer bg-white rounded-lg shadow-lg ring-1 ring-gray-300 hover:shadow-xl transition-shadow duration-300 max-w-sm"
          >
            <div className="overflow-hidden rounded-md">
              <img
                className="object-cover w-full h-48 transition-transform duration-300 hover:scale-105"
                src={item.images[0]}
                alt={item.name}
              />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </ul>
  );
};

export default Card;
