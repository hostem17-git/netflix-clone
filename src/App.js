import './App.css';
import Row from "./Row"
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';


function App() {
  return (
    <div className="App">
      <Nav />

      <Banner></Banner>
      <Row title="Trending Now" fetchURL={requests.fetchTrending} isLargeRow ></Row>

      <Row title="Action Movies" fetchURL={requests.fetchAction} ></Row>
      <Row title="Adventure Movies" fetchURL={requests.fetchAdventure} ></Row>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedy} ></Row>
      <Row title="Horror Movies" fetchURL={requests.fetchHorror} ></Row>
      <Row title="Romance Movies" fetchURL={requests.fetchRomance} ></Row>
    </div>
  );
}

export default App;
