export interface ArrayCharacter {
  id: number;
  name: string;
  images: string[];
  personal?: any;
  family: {
    [key: string]: string; // Nilai family adalah string
  };
  rank: {
    [key: string]: string | null;
  };
  natureType?: string[] | null;
  jutsu?: string[] | null;
  tools?: string[] | undefined;
}

export interface Character {
  characters?: ArrayCharacter[];
  currentPage?: number;
  pageSize?: number;
  total?: number;
}

export type TabsContextValue = {
  selectedTab: string;
  setSelectedTab: (id: string) => void;
};

export type TabsProps = {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
};

export type TabListProps = {
  children: React.ReactNode;
  className?: string;
};

export type TabTriggerProps = {
  value: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

export type TabContentProps = {
  value: string;
  children: React.ReactNode;
  className?: string;
};
