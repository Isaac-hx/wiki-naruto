import React from "react";
interface cardProps {
  children: React.ReactNode;
  className: string;
}
const CardFooter: React.FC<cardProps> = ({ children, className }) => {
  return <div className={`${className} p-2 my-4`}>{children}</div>;
};

export default CardFooter;
