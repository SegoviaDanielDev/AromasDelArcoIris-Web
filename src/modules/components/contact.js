import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Contactanos
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">CONTACTANOS</DialogTitle>
        <DialogContent>
          <DialogContentText>   
            Envianos un mensaje con tus dudas o pedidos!!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre"
            type="nombre"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="surname"
            label="Apellido"
            type="surname"
            fullWidth
          />

           <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Dirección de E-mail"
            type="email"
            fullWidth
          />
        </DialogContent>


        <DialogActions>

          
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}