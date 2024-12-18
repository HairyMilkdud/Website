import logo from './logo.svg';
import peak from './peak.png';
import winfred from './winfred.mp4'; // Import the video
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={peak} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        {/* Add the video element */}
        <video width="320" height="240" controls>
          <source src={winfred} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
