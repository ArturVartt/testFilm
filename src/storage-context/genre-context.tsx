import { Dispatch, createContext } from 'react';
export interface DataGenre {
  type: string;
  genres: {
    id: number;
    name: string;
  }[];
}
export const GenreContext = createContext([]);
export const GenreDispatchContext = createContext<Dispatch<DataGenre>>(() => []);
