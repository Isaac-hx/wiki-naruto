import { TabsContextValue } from "../types/type";
import { createContext, useContext } from "react";

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs component");
  }
  return context;
};

export { TabsContext, useTabs };
