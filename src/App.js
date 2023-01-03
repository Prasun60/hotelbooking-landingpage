import './App.css';
import Booking from './components/Booking';
import Navbar from './components/Navbar';
import Pic from './components/Pic';
import Text from "./components/Text";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Booking />
     <Pic />
     <Text />
    </div>
  );
}

export default App;
