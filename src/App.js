import './App.css';
import User from './Component/User'
import Rated from './Component/Rated'
import State from './Component/State';


function App() {
  console.log(State)
  return (
    <div className="App">
      <div className="info">
      
        <User/>
        <Rated/>
        </div>

        <div className="font">
        <State />
        </div>
      
    
    </div>
  );
}

export default App;
