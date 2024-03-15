import { ReactNode, createContext, useState } from 'react';

interface PageValueContext {
  pages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
interface PagesProviderProps {
  children: ReactNode;
}

export const PageValue = createContext<PageValueContext>({});

const PagesProvider = ({ children }: PagesProviderProps) => {
  const [pages, setPage] = useState(1);
  return <PageValue.Provider value={{ pages, setPage }}>{children}</PageValue.Provider>;
};

export default PagesProvider;
