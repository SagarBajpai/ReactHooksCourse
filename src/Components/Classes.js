import React, { Component } from "react";
import Modal from "./uiLib/Modal2";

class CounterOnceAgain extends Component {
  state = {
    count: 0,
    open: false,
  };

  setCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>

        <button onClick={this.setCount}>Lets Count</button>
        <Modal
          open={this.state.open}
          handleClose={() => this.setState({ open: false })}
          handleOpen={() => this.setState({ open: true })}
        />
      </div>
    );
  }
}
export default CounterOnceAgain;
