import { useTabs } from "../context/TabsContext";
import { TabTriggerProps } from "../types/type";

export function TabTrigger({
  value,
  children,
  className,
  disabled = false,
}: TabTriggerProps) {
  const { selectedTab, setSelectedTab } = useTabs();
  const isSelected = selectedTab === value;

  return (
    <button
      role="tab"
      type="button"
      aria-selected={isSelected}
      aria-controls={`tab-content-${value}`}
      disabled={disabled}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
        isSelected
          ? "bg-white focus:text-black"
          : "text-gray-500 hover:text-foreground"
      }${disabled && "opacity-50 cursor-not-allowed"}${className}`}
      onClick={() => setSelectedTab(value)}
    >
      {children}
    </button>
  );
}
