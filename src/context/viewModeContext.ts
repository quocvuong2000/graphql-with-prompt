import { createContext } from 'react';

export const ViewModeContext = createContext({
  viewMode: 'grid',
  setViewMode: (viewMode: "grid" | "list") => {},
});
