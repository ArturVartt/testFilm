import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import './cards.css';

import { useContext, useEffect, useState } from 'react';
import { PageValue } from '../../storage-context/request-context';
import requestSort from '../../requests/request-for-sort';

const style = {
  maxWidth: 280,
  width: '100%',
  margin: '10px',
};

interface PopularFilms {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
}

export default function CardFilm() {
  const [popularFilms, setPopularFilms] = useState<PopularFilms[]>([]);
  const pageValue = useContext(PageValue);
  console.log(pageValue);
  const pageValueChangeContext = useContext(PageValue);
  const { pages } = pageValueChangeContext;

  useEffect(() => {
    getDataSort();
  }, [pages]);


  async function getDataSort() {
    try {
      const popularFilms = await requestSort(pages);
      console.log(popularFilms);
      setPopularFilms(popularFilms.results);
    } catch (e) {
      console.error(e);
    }
  }
  if (!popularFilms.length) {
    return <h3>loading... Or check VPN</h3>;
  }

  return (
    <div className="card-film">
      {popularFilms.map(film => (
        <Card key={film.id} sx={style}>
          <CardActionArea>
            <CardMedia
              sx={{ height: 200 }}
              component="img"
              image={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
              alt="film Poster"
            />
          </CardActionArea>
          <CardContent className="card-content">
            <Typography gutterBottom variant="h5">
              {film.title}
            </Typography>
            <IconButton>
              <StarIcon />
            </IconButton>
          </CardContent>
          <Typography
            sx={{ paddingLeft: 1, fontSize: 14 }}
            className="card-content-footer"
            gutterBottom
            variant="h6"
          >
            {`рейтинг ${Math.round(film.vote_average)}`}
          </Typography>
        </Card>
      ))}
    </div>
  );
}
