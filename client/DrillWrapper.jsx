import React from "react";
import TrackerReact from "meteor/ultimatejs:tracker-react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

let Wordlist = new Mongo.Collection("wordlist");

export default class DrillWrapper extends TrackerReact(React.Component) {
  constructor() {
    super();
    this.state = {
      subscription: {
        wordlist: Meteor.subscribe("wordlist")
      }
    };
  }

  componentWillUnmount() {
    this.state.subscription.wordlist.stop();
  }

  componentDidMount() {
    let wordList = this.wordlist();
    let randomWord = this.pickRandomWord(wordList);
    this.setState({randomWord: randomWord});
  }

  pickRandomWord(wordlist) {
    const max = wordlist.length - 1;
    const min = 0;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return wordlist[randomNum];
  }

  wordlist() {
    return Wordlist.find().fetch();
  }

  newWord() {
    console.log("picking new word");
    let wordList = this.wordlist();
    let randomWord = this.pickRandomWord(wordList);
    this.setState({randomWord: randomWord});
  }

  render() {
    DocHead.setTitle("My Vocabulary");
    let words = this.wordlist();
    if (words.length < 1) {
      return (
        <div>
          <div>No Words</div>
        </div>
      );
    }

    if (this.state.randomWord) {
      return (
        <div>
          <h1>Your Word</h1>
          <ul className="words">
            <li>{this.state.randomWord.tagalog}</li>
            </ul>
            <ReactCSSTransitionGroup
              component="ul"
              className="words"
              transitionName="resolutionLoad"
              transitionEnterTimeout={600}
              transitionLeaveTimeout={400}
            >
              <ul class="words">
                <li key={this.state.randomWord.english}>{this.state.randomWord.english}</li>
              </ul>
            </ReactCSSTransitionGroup>
            <button onClick={this.newWord.bind(this)}>
              New Word
            </button>

        </div>
      );
    }

    return (
      <div>
        <div>No Word Yet
          <button onClick={this.newWord.bind(this)}>
            New Word
          </button>
        </div>
      </div>
    );

  }
}
