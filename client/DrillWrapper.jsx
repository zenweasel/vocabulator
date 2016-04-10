import React from "react";
import TrackerReact from "meteor/ultimatejs:tracker-react";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

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

    wordlist() {
        return Wordlist.find().fetch();
    }

    render () {
        DocHead.setTitle("My Vocabulary");
        let words = this.wordlist();
        if (words.length < 1) {
            return (
                <div>
                    <div>No Words</div>
                </div>
            );
        }
        return (
            <div>
                <h1>My Resolutions</h1>
                <ul className="resolutions">
                    <ReactCSSTransitionGroup
                        component="ul"
                        className="resolutions"
                        transitionName="resolutionLoad"
                        transitionEnterTimeout={600}
                        transitionLeaveTimeout={400}
                    >
                    </ReactCSSTransitionGroup>
                </ul>
            </div>
        )
    }
}

