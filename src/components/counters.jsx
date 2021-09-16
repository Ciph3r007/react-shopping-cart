import React from "react";
import Counter from "./counter";

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 },
    ],
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value}>
            <h4>Counter #{counter.id}</h4>
          </Counter> // these properties are set as key of Counter.props [except `key`]
        ))}
      </div>
    );
  }
}

export default Counters;
