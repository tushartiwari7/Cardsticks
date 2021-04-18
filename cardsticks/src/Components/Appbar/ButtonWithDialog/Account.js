import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import BasicButton from '../BasicButton'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import BasicButtonWithMargin from '../BasicButtonWithMargin';
import DialogContentText from '@material-ui/core/DialogContentText';

 const AddNote = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
     return (
         <>
        <BasicButton  color="inherit" onClick={handleClickOpen}>
          {props.children}
        </BasicButton>

        <Dialog fullWidth maxWidth="xs" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{props.children}</DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
            Here Comes My User Details.
          </DialogContentText>
        </DialogContent>
        <DialogActions justifyContent="start" spacing={2}>
          <BasicButtonWithMargin variant="contained" onClick={handleClose} color="primary">
            Got It
          </BasicButtonWithMargin>
        </DialogActions>
      </Dialog>
      </>
     );
 }
 export default AddNote;