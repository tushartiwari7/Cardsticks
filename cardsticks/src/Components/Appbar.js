import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ButtonWithDialog from './ButtonWithDialog';
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
          <SimpleButton color="inherit" >Account</SimpleButton>
          <SimpleButton color="inherit">Logout</SimpleButton>
          <SimpleButton color="inherit">Create Guide</SimpleButton>
          <SimpleButton color="inherit">Login</SimpleButton>
          <ButtonWithDialog color="inherit" value="Sign Up" ></ButtonWithDialog>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
