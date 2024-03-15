import { useEffect, useReducer, useState } from 'react';
import requestGenre from '../../../requests/request-genre';
import { useContext } from 'react';
import { BEARER_TOKEN_CONTEXT } from '../../../storage-context/user-context';
import {
  GenreContext,
  GenreDispatchContext,
} from '../../../storage-context/genre-context';
import genreReducerResponse from '../../../reducers/genre-reducer-response';
import GenreCheckbox from '../filter-genre-checkbox/genre-checkbox';

export interface DataGenre {
  id: number;
  name: string;
}

export default function FilterGenre() {
  const token = useContext(BEARER_TOKEN_CONTEXT);
  const [genreData, setGenreData] = useState<DataGenre[]>([]);
  const [genre, dispatch] = useReducer(genreReducerResponse, genreData);

  async function getDataGenre() {
    try {
      const dataGenre = await requestGenre(token);
      setGenreData(dataGenre.genres);
      console.log(dataGenre.genres);
      dispatch({
        type: 'fetchSuccess',
        genres: dataGenre.genres,
      });
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getDataGenre();
  }, []);

  return (
    <GenreContext.Provider value={genre}>
      <GenreDispatchContext.Provider value={dispatch}>
        <GenreCheckbox />
      </GenreDispatchContext.Provider>
    </GenreContext.Provider>
  );
}
