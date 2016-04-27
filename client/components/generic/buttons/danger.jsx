import React from "react";
import Button from "./button";

DangerButton = React.createClass({
  render() {
    return (
      <Button
        type={ this.props.type }
        style="danger"
        label={ this.props.label }
        href={ this.props.href }
        onClick={ this.props.onClick }
        />
  );
  }
});
