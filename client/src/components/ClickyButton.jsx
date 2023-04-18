import React, { Component } from "react";

export class ClickyButton extends Component {
  state = {
    buttonMessage: "Hi there.",
    color: "#333333",
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        ...this.state,
        buttonMessage: "Hi there. Click Me.",
      });
    }, 3000);
  }

  handleClick = () => {
    this.setState({
      color: "red",
    });
  };

  render() {
    return (
      <button
        onClick={this.handleClick}
        style={{ backgroundColor: this.state.color }}
      >
        {this.state.buttonMessage}
      </button>
    );
  }
}

export default ClickyButton;
