import List from '@material-ui/core/List';
import Appbar from './Components/Appbar/Appbar';
import MyList from './Components/List';
import { makeStyles} from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 480,
    backgroundColor: "theme.palette.background.paper",
    borderRadius: "10px",
  },
}
));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <Appbar />
      </header>
      <Box mx="auto" my="100px" className={classes.root}>
        <List  display="inline" px="auto">
          <MyList />
        </List>
      </Box>
    </div>
  );
}
export default App;
