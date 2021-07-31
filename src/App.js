import './App.css';
import Row from "./Row"
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Row title="Trending Now" fetchURL={requests.fetchTrending} isLargeRow ></Row>

      <Row title="Action" fetchURL={requests.fetchAction} ></Row>
      <Row title="Romance" fetchURL={requests.fetchRomance} ></Row>
    </div>
  );
}

export default App;
