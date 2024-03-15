import { useContext } from "react";
import { GenreContext } from "../../../storage-context/genre-context";
import { Checkbox } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import TextField from "@mui/material/TextField";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function GenreCheckbox() {
  const genres = useContext(GenreContext);

  if (!genres.genreData?.length) {
    return <h2>loading...</h2>;
  }

  return (
    <ul className="filter-genre__items">
      <Autocomplete
        multiple
        className="checkboxes-tags-demo"
        options={genres.genreData}
        disableCloseOnSelect
        getOptionLabel={(option) => option.name}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.name}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Checkboxes"
            variant="standard"
            placeholder="Favorites"
          />
        )}
      />
    </ul>
  );
}
