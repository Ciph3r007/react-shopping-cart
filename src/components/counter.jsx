import React from "react";

class Counter extends React.Component {
  state = { value: this.props.value };

  handleIncrement = () => this.setState({ value: this.state.value + 1 });

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClass() {
    let badgeClass = "badge m-2 bg-";
    badgeClass += this.state.value === 0 ? "warning text-dark" : "primary";

    return badgeClass;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
