import { useState } from "react";
import { TabsProps } from "../types/type";
import { TabsContext } from "../context/TabsContext";
// Components
export function Tabs({ defaultValue, children, className }: TabsProps) {
  const [selectedTab, setSelectedTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ selectedTab, setSelectedTab }}>
      <div className={`w-full gap-4  ${className}`}>{children}</div>
    </TabsContext.Provider>
  );
}
