import './filter-main.css';
import PaginationFilter from './pagination/Pagination';
import Select from './select/Select';
import FilterGenre from './filter-genre.tsx/filter-genre';
import { useState, useReducer } from 'react';
import genreReducerCount from '../../reducers/genre-reducer-count';
import { Button, IconButton } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import RangeSlider from './range-years-slider/range-years-slider';

export default function Filter() {
  const [closeFilter, setCloseFilter] = useState(true);
  const [state, dispatch] = useReducer(genreReducerCount, { count: 1 });

  const handlerCountReset = () => {
    dispatch({
      type: 'increment',
    });
  };

  if (closeFilter) {
    return (
      <div className="filter" key={state.count}>
        <div className="filter-inner">
          <div className="filter-nav">
            <h2 className="filter-nav__title">Фильтры</h2>

            <IconButton
              onClick={handlerCountReset}
              className="filter-nav__btn"
              color="primary"
            >
              <RestartAltIcon />
            </IconButton>
          </div>

          <div className="filter-sort">
            <Select
              className="filter-select"
              spanText="Сортировать по:"
              options={['Популярности', 'Жанру', 'Дате выхода']}
            />
            <RangeSlider />
          </div>

          <div className="filter-genre">
            <h3 className="filter-genre__title">Жанры</h3>
            <div className="filter-genre__wrapper">
              <FilterGenre />
            </div>
          </div>

          <div className="filter-pagination">
            <PaginationFilter />
          </div>
        </div>
      </div>
    );
  }
}
