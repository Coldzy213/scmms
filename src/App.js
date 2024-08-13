import './App.css';
import { Background } from './Components/Background/Background';
import { Navbar } from './Components/Navbar/Navbar';
import { Main } from './Components/Main/Main';

function App() {
  return (
    <div className="App">
        <Background/>
        <Navbar/>
        <Main/>
    </div>
  );
}

export default App;
