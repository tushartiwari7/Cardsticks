import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import BasicButton from '../BasicButton'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import BasicButtonWithMargin from '../BasicButtonWithMargin';

 const SignUp = (props) => {
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

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{props.children}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions justifyContent="start" spacing={2}>
          <BasicButtonWithMargin variant="contained" onClick={handleClose} color="primary">
            {props.children}
          </BasicButtonWithMargin>
        </DialogActions>
      </Dialog>
      </>
     );
 }

 export default SignUp;