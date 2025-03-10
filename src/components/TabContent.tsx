import { TabContentProps } from "../types/type";
import { useTabs } from "../context/TabsContext";
export function TabContent({ value, children, className }: TabContentProps) {
  const { selectedTab } = useTabs();
  const isSelected = selectedTab === value;

  if (!isSelected) return null;

  return (
    <div
      role="tabpanel"
      id={`tab-content-${value}`}
      tabIndex={0}
      className={`
        mt-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}
    >
      {children}
    </div>
  );
}
