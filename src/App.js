import Header from './Header';
import './App.css';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    //BEM
    <div className="app">
      
      <Header/>
      <TinderCards/>
      <SwipeButtons/>
    </div>
    
  );
}

export default App;