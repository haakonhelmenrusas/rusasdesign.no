'use client';

import React, { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

type FilterContextValue = {
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
  toggleTag: (tag: string) => void;
  clear: () => void;
};

const FilterContext = createContext<FilterContextValue | undefined>(undefined);

export function FilterProvider({
                                 children,
                                 initialTag = null,
                               }: {
  children: ReactNode;
  initialTag?: string | null;
}) {
  const [selectedTag, setSelectedTag] = useState<string | null>(initialTag);

  const value = useMemo<FilterContextValue>(
    () => ({
      selectedTag,
      setSelectedTag,
      toggleTag: (tag: string) => setSelectedTag((prev) => (prev === tag ? null : tag)),
      clear: () => setSelectedTag(null),
    }),
    [selectedTag],
  );

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
}

export function useFilter() {
  const ctx = useContext(FilterContext);
  if (!ctx) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return ctx;
}