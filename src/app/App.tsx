import './app.css';
import Header from '../components/header/Header';
import Filter from '../components/filter/Filter-main';
import CardFilm from '../components/cards/cards';
import Modals from '../components/modal/modal';
import { useState } from 'react';
import PagesProvider from '../storage-context/request-context';

export default function App() {
  const [openModal, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="app">
      <Modals open={openModal} handleClose={handleClose} />
      <Header modalOpen={openModal} handleOpen={handleOpen} className="header" />
      <PagesProvider>
        <div className="film-main">
          <div className="film-main-filter">
            <Filter />
          </div>
          <div className="film-main-card">
            <CardFilm />
          </div>
        </div>
      </PagesProvider>
    </div>
  );
}
