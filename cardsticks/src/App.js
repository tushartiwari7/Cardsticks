import List from '@material-ui/core/List';
import Appbar from './Components/Appbar/Appbar';
import MyList from './Components/List';
import { makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 480,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    border: "1px #111111",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <Appbar />
      </header>
      <div style={{margin:"100px auto",width: "70%"}}>
        <List className={classes.root} >
          <MyList />
        </List>
      </div>
    </div>
  );
}
export default App;
