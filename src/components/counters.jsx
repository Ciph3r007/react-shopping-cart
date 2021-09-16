import React from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    return (
      <>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <div>
          {this.props.counters.map((counter) => (
            <Counter
              key={counter.id}
              counter={counter}
              onIncrement={this.props.onIncrement}
              onDelete={this.props.onDelete}
            ></Counter>
          ))}
        </div>
      </>
    );
  }
}

export default Counters;
