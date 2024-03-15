import Pagination from '@mui/material/Pagination';
import './pagination.css';
import { useContext } from 'react';
import { PageValue } from '../../../storage-context/request-context';

export default function PaginationFilter() {
  const pageValueContext = useContext(PageValue);
  const { pages, setPage } = pageValueContext;

  function handelPageChange(e: React.ChangeEvent<unknown>, page: number) {
    setPage(page);
  }

  return (
    <div className="pagination">
      <h3>{pages}</h3>
      <Pagination
        size="small"
        count={500}
        onChange={handelPageChange}
        variant="outlined"
        color="primary"
      />
    </div>
  );
}
