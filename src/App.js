import logo from './logo.svg';
import './App.css';
import ReactAudioPlayer from 'react-audio-player';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Twitter Emotion Music
        </p>
        <ReactAudioPlayer
          src="https://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.mp4"
          controls
        />
        <label for="ice-cream-choice">Which trend do you want to listen to?</label>
        <input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

        <datalist id="ice-cream-flavors">
          <option value="GameStop (Test)"></option>
          <option value="#ThankYouAaron"></option>
          <option value="5dogs"></option>
          <option value="Lonzo"></option>
          <option value="Lukaku"></option>
        </datalist>
      </header>
    </div>
  );
}

export default App;
