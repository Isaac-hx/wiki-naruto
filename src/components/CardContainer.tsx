import React from "react";
interface cardProps {
  children?: React.ReactNode;
  className?: string;
}
const CardContainer: React.FC<cardProps> = ({ children, className }) => {
  return (
    <div
      className={`
        bg-white 
        rounded-lg 
        shadow-md 

        ring-2
        ring-gray-200
        hover:shadow-lg 
        transition-shadow 
        duration-200 ${className}`}
    >
      {children}
    </div>
  );
};

export default CardContainer;
