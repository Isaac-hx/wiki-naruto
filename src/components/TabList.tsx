import { TabListProps } from "../types/type";
export function TabList({ children, className }: TabListProps) {
  return (
    <div
      className={`flex bg-gray-100 p-1 rounded-md ${className}`}
      role="tablist"
    >
      {children}
    </div>
  );
}
