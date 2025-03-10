import React from "react";

const Badge: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <span className={`rounded-full py-1 px-2   ring-gray-800 ${className} `}>
      <p className="text-xs font-semibold">{children}</p>
    </span>
  );
};

export default Badge;
