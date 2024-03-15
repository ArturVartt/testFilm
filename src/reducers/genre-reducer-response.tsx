import { DataGenre } from "../components/filter/filter-genre.tsx/filter-genre";
interface DataGenres {
  genres: DataGenre[];
  type: string;
}
export default function genreReducerResponse(state: any, action: DataGenres) {
  switch (action.type) {
    case "fetchSuccess":
      return {
        genreData: action.genres,
      };
    default:
      return state;
  }
}
