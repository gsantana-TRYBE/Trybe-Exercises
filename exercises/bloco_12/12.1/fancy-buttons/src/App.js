import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.state = {
      numCliquesBotao1: 0,
      numCliquesBotao2: 0,
      numCliquesBotao3: 0
    }
  }
  handleClick1() {
    this.setState((lastState) => ({
      numCliquesBotao1: lastState.numCliquesBotao1 + 1
    }))
  }
  handleClick2() {
    this.setState((lastState) => ({
      numCliquesBotao2: lastState.numCliquesBotao2 + 1
    }))
  }
  handleClick3() {
    this.setState((lastState) => ({
      numCliquesBotao3: lastState.numCliquesBotao3 + 1
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>{this.state.numCliquesBotao1}</button>
        <button onClick={this.handleClick2}>{this.state.numCliquesBotao2}</button>
        <button onClick={this.handleClick3}>{this.state.numCliquesBotao3}</button>
      </div>
    )
  }
}

export default App;
