import twitter_logo from './twitter_logo.svg'
import './App.css';
import ReactAudioPlayer from 'react-audio-player';
//import background from "./funky_colors_bg.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Twitter Emotion Music
        </h3>
        An aggregate of the emotional state of twitter
        <p>
          <img src={twitter_logo} className="App-logo" alt="logo" />
        </p>
        <ReactAudioPlayer
          src="http://18.188.150.96:8000/liq.ogg"
          controls
        />
        <p>
          <a className="App-button" href="https://docs.google.com/document/d/1qih2wQpwlKFNCUW1N6w4xqkPPoUdU9reQ7R2FZN28QA/edit">Learn more about our project here</a>
        </p>
      </header>
    </div>
  );
}

export default App;
