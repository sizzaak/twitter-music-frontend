import React from 'react'
import twitter_logo from './twitter_logo.svg'
import './App.css';
import ReactAudioPlayer from 'react-audio-player';
//import background from "./funky_colors_bg.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { trends: ["trend1", "trend2", "trend3", "trend4", "trend5"]};
  }

  componentDidMount() {
    fetch('https://courses.cs.washington.edu/courses/cse481i/21wi/Project/tweet-analysis/trends.json')
    /*fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits', {mode: 'no-cors'})*/
      .then(response => response.json())
      .then(data => this.setState({trends: data}));
    console.log("yo");
    //this.setState({trends : ["trendA", "trendB", "trendC", "trendD", "trendE"]});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>
            Twitter Emotion Music
          </h3>
          An aggregate of the emotional state of Twitter
          <p>
            <img src={twitter_logo} className="App-logo" alt="logo" />
          </p>
          <ReactAudioPlayer
            src="http://18.188.150.96:8000/liq.ogg"
            /*src="https://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.mp4"*/
            controls
          />
          <div className="trends">{this.state.trends}</div>
          <p>
            <a className="App-button" href="https://docs.google.com/document/d/1qih2wQpwlKFNCUW1N6w4xqkPPoUdU9reQ7R2FZN28QA/edit">Learn more about our project here</a>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
