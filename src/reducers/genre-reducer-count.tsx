interface GenreReducerState {
  count: number;
}
interface GenreReducerAction {
  type: string;
}

export default function genreReducerCount(
  state: GenreReducerState,
  action: GenreReducerAction
) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
}
