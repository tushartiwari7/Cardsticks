import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ButtonWithDialog from './ButtonWithDialog/ButtonWithDialog';
import SimpleButton from './BasicButton';

const useStylesforAppbar = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStylesforAppbar();

  return (
    <div className={classes.root}>

      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon /> 
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <ButtonWithDialog color="inherit" >My Account</ButtonWithDialog>
          <SimpleButton color="inherit">Logout</SimpleButton>
          <ButtonWithDialog color="inherit" >Add Note</ButtonWithDialog>
          <ButtonWithDialog color="inherit" >Log In</ButtonWithDialog>
          <ButtonWithDialog color="inherit" >Sign Up</ButtonWithDialog>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
