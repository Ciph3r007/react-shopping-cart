import React from "react";
import Counter from "./counter";

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  // Refactored here to use single source of truth
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (id) => {
    const counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters });
  };

  render() {
    return (
      <>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <div>
          {this.state.counters.map((counter) => (
            <Counter
              key={counter.id}
              counter={counter}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
            ></Counter> // these properties get set as key of Counter.props [except `key`]
          ))}
        </div>
      </>
    );
  }
}

export default Counters;
