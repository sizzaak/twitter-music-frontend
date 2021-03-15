import React from 'react'
import twitter_logo from './twitter_logo.svg'
import './App.css';
import ReactAudioPlayer from 'react-audio-player';
import Poll from 'react-polls';
//import background from "./funky_colors_bg.png";


class NowPlaying extends React.Component {
  render() {
    let maxVoteCount = 0;
    let maxVoteTrends = [];
    this.props.trends.forEach(trend => {
      if (trend.votes > maxVoteCount) {
        maxVoteCount = trend.votes;
        maxVoteTrends = [trend.option];
      } else if (trend.votes === maxVoteCount) {
        maxVoteTrends.push(trend.option);
      }
    })
    let playing = "Now Playing: " + maxVoteTrends[0];
    for (let i = 1; i < maxVoteTrends.length; i++) {
      playing += " + " + maxVoteTrends[i];
    }
    return playing;
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { trends: [{option: 'trend1', votes: 5}, {option: 'trend2', votes: 5}, {option: 'trend3', votes: 5}, {option: 'trend4', votes: 5}, {option: 'trend5', votes: 5}]};
    this.state.oldtrends = this.state.trends;
    const interval = setInterval(() => {
      this.checkTrends();
      console.log("checking...");
    }, 2000);
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
          <NowPlaying trends={this.state.trends}/>
          <p>
          <ReactAudioPlayer
            src="https://icecast.cs.washington.edu/liq.mp3"
            /*src="https://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.mp4"*/
            controls
          />
          </p>
          <div>
            <Poll
	      question={"Which trend would you like to listen to?"}
	      answers={this.state.trends}
	      onVote={voteAnswer => {
	        console.log("voted for " + encodeURIComponent(voteAnswer));
	        fetch('https://courses.cs.washington.edu/courses/cse481i/21wi/Project/trends.cgi?trend=' + encodeURIComponent(voteAnswer), {method: 'GET'});
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
