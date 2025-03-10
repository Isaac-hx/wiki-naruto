import React from "react";
interface cardProps {
  children?: React.ReactNode;
  className?: string;
}
const CardHeader: React.FC<cardProps> = ({ children, className }) => {
  return <div className={`${className} p-2 my-2`}>{children}</div>;
};

export default CardHeader;
