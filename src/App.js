import React from 'react'
import twitter_logo from './twitter_logo.svg'
import './App.css';
import ReactAudioPlayer from 'react-audio-player';
import Poll from 'react-polls';
//import background from "./funky_colors_bg.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { trends: [{option: 'trend1', votes: 5}, {option: 'trend2', votes: 5}, {option: 'trend3', votes: 5}, {option: 'trend4', votes: 5}, {option: 'trend5', votes: 5}]};
    this.state.oldtrends = this.state.trends;
  }

  checkTrends = () => {
    fetch('https://courses.cs.washington.edu/courses/cse481i/21wi/Project/trend_counts.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({trends: data});
      });
    this.setState({trends: this.state.trends});
  }

  componentDidMount() {
    this.checkTrends();
  }

  componentDidUpdate() {
    if (this.state.oldtrends !== this.state.trends) {
      console.log(this.state.oldtrends);
      console.log(this.state.trends);
      this.setState({oldtrends: this.state.trends});
      this.checkTrends();
    }
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
            src="https://icecast.cs.washington.edu/liq.mp3"
            /*src="https://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.mp4"*/
            controls
          />
          <div>
            <Poll 
	      question={"Which trend would you like to listen to?"} 
	      answers={this.state.trends} 
	      onVote={voteAnswer => {
	        console.log("voted for " + voteAnswer);
	        fetch('https://courses.cs.washington.edu/courses/cse481i/21wi/Project/trends.cgi?trend=' + voteAnswer, {method: 'GET'});
	      }} 
	      noStorage={false} 
	    />
          </div>
          <p>
            <a className="App-button" href="https://docs.google.com/document/d/1qih2wQpwlKFNCUW1N6w4xqkPPoUdU9reQ7R2FZN28QA/edit">Learn more about our project here</a>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
