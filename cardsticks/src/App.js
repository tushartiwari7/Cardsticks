
import Appbar from './Components/Appbar/Appbar';
import List from './Components/List';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Appbar />
      </header>
      <div style={{margin:"150px auto",width: "70%"}}>
        <List />
      </div>
    </div>
  );
}
export default App;
