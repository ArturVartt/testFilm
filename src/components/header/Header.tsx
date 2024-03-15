import { Button } from "@mui/material";

import "./header.css";
interface HeaderProps {
  className: string;
  modalOpen:boolean
  handleOpen: () => void;
}
export default function Header({ className, modalOpen, handleOpen }: HeaderProps) {
  
  return (
    <div className={className}>
      <h1 className="title-films">Фильмы</h1>
      <Button size="small" className="button-header" onClick={handleOpen}  variant="outlined">
        Войти
      </Button>
    </div>
  );
}
