import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack, TextField } from '@mui/material';
import { useState } from 'react';

const style = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  padding: 2,
};
const styles = {
  display: 'flex',
  justifyContent: 'end',
};
interface ModalsProps {
  open: boolean;
  handleClose: () => void;
}
export default function Modals({ open, handleClose }: ModalsProps) {
  const [openModals, setOpenModals] = useState(open);

  function handleVariantModal() {
    setOpenModals(!openModals);
  }
  
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6">
            {openModals ? 'Запросить токен' : 'Введите токен'}
          </Typography>
          <TextField
            sx={{ marginBottom: 1 }}
            variant="standard"
            label={openModals ? 'почта' : 'токен'}
          />
          <Stack spacing={1} sx={styles} direction={{ xs: 'column', sm: 'row' }}>
            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{ maxWidth: 50, fontSize: 10 }}
            >
              Отмена
            </Button>
            <Button
              variant="outlined"
              onClick={handleVariantModal}
              sx={{ maxWidth: 50, fontSize: 10 }}
            >
              {openModals ? 'Запросить' : 'ок'}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
