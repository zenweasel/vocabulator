import React from "react";
import TrackerReact from "meteor/ultimatejs:tracker-react";


if(Meteor.isClient) {
    Wordlist = new Mongo.Collection("wordlist");
}

export default class DrillWrapper extends TrackerReact(React.Component) {
    constructor() {
        super();
        this.state = {
            subscription: {
                wordlist: Meteor.subscribe("wordlist")
            }
        }
    }

    componentWillUnmount() {
        this.state.subscription.wordlist.stop();
    }

    componentWillMount() {
        console.log("mounted");
        let wordList = this.wordlist();
        this.props.randomWord = this.pickRandomWord(wordList);
    }

    pickRandomWord(wordlist) {
        const max = wordlist.length - 1;
        const min = 0;
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        this.props.randomWord = wordlist[randomNum];
    }

    wordlist() {
        return Wordlist.find().fetch();
    }

    newWord() {
        let wordList = this.wordlist();
        this.props.randomWord = this.pickRandomWord(wordList);
    }

    render () {
        DocHead.setTitle("My Vocabulary");
        let words = this.wordlist();
        console.log(this.props);
        if (words.length < 1) {
            return (
                <div>
                    <div>No Words</div>
                </div>
            );
        }
        this.pickRandomWord(words);
        return (
            <div>
                <h1>Your Word</h1>
                <ul className="resolutions">
                    {this.props.randomWord.english} : {this.props.randomWord.tagalog}
                    <button onClick={this.newWord.bind(this)}>
                        New Word
                    </button>
                </ul>
            </div>
        )
    }
}

