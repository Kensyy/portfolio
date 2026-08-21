"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Ctx = { open: boolean; setOpen: (open: boolean) => void };

const CommandPaletteContext = createContext<Ctx>({
  open: false,
  setOpen: () => {},
});

export function CommandPaletteProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <CommandPaletteContext.Provider value={{ open, setOpen }}>
      {children}
    </CommandPaletteContext.Provider>
  );
}

export function useCommandPalette() {
  return useContext(CommandPaletteContext);
}
