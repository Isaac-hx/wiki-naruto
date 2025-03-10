import React from "react";

interface ButtonProps {
  variant?: "default" | "outline";
  size?: "default" | "icon";
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "default",
  className = "",
  children,
}) => {
  const variantStyles = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-gray-200 hover:bg-gray-100",
  };

  const sizeStyles = {
    default: "px-4 py-2",
    icon: "p-2",
  };

  return (
    <button
      className={`
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        rounded
        transition-colors
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
