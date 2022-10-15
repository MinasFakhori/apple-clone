import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import FullPage from './Components/FullPage';
import Grid from './Components/Grid';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <FullPage />
     <Grid />
    </div>
  );
}

export default App;



