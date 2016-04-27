import React from "react";
import Button from "./button";

DefaultButton = React.createClass({
    render() {
        return <Button
            type={ this.props.type }
            style="default"
            label={ this.props.label }
            href={ this.props.href }
            onClick={ this.props.onClick }
        />;
    }
});
