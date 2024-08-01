import './App.css';
import { Background } from './Components/Background/Background';
import { Navbar } from './Components/Navbar/Navbar';
import { Person } from './Components/Person/Person';

function App() {
  return (
    <div className="App">
        <Background/>
        <Navbar/>
        <Person/>
    </div>
  );
}

export default App;
