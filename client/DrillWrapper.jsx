import React from "react";
import TrackerReact from "meteor/ultimatejs:tracker-react";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

if(Meteor.isClient) {
    Resolutions = new Mongo.Collection("resolutions");
}


export default class DrillWrapper extends TrackerReact(React.Component) {
    constructor() {
        super();
        this.state = {
            subscription: {
                resolutions: Meteor.subscribe("userResolutions")
            }
        }
    }

    componentWillUnmount() {
        this.state.subscription.resolutions.stop();
    }

    resolutions() {
        return Resolutions.find().fetch();
    }

    render () {
        DocHead.setTitle("My Resolutions for This This Month");
        let res = this.resolutions();
        if (res.length < 1) {
            return (
                <div>
                    <div>No Resolutions</div>
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
                        {this.resolutions().map( (resolution)=> {
                            return  <ResolutionSingle key={resolution._id} resolution={resolution} />
                        })}
                    </ReactCSSTransitionGroup>
                </ul>
            </div>
        )
    }
}

