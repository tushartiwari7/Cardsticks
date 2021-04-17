import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import BasicButton from '../BasicButton'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import BasicButtonWithMargin from '../BasicButtonWithMargin';
import { useState } from "react";
import { db } from './firebase_config';
import firebase from 'firebase';

 const AddNote = (props) => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        
    }

    var [note,setNote] = useState(null);
    const addSingleNote = () => {
        console.log(note);
        db.collection("notes").add({
            isCompleted: false,
            work: note,
            time: firebase.firestore.FieldValue.serverTimestamp(),
        })
        handleClose();
    }

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
            id="Note"
            label="Type Here"
            type="text"
            size="large"
            fullWidth
            onChange={(e) => {
                setNote(e.target.value);
                // console.log(note);
            } }
          />
        </DialogContent>
        <DialogActions justifyContent="start" spacing={2}>
          <BasicButtonWithMargin 
            variant="contained" 
            onClick={addSingleNote} 
            color="primary"
            type="submit"
          >
           Go
          </BasicButtonWithMargin>
        </DialogActions>
      </Dialog>
      </>
     );
 }
 export default AddNote;