import React, { Component } from "react";

class Counter extends React.Component {
  state = { count: 0 };

  handleIncrement = () => this.setState({ count: this.state.count + 1 });

  render() {
    return (
      <>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </>
    );
  }

  getBadgeClass() {
    let badgeClass = "badge m-2 bg-";
    badgeClass += this.state.count === 0 ? "warning text-dark" : "primary";

    return badgeClass;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
