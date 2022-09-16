import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
  }

  handleClick() {
    this.setState(
      { play: !this.state.play },
      this.incrementCounter
    );
  }

  incrementCounter() {
    if (this.state.play) {
      this.tick();
    } else if (!this.state.play) {
      clearInterval(this.timerID);
    }
  }

  tick() {
    this.timerID = setInterval(
      () => { this.setState({ counter: this.state.counter + 1 }); },
      1000
    );
  }

  resetClick() {
    if (!this.state.play) {
      this.setState(
        { counter: 0 },
        this.incrementCounter
      );
    }
  }

  iconState() {
    if (this.state.play) {
      return 'fa-solid fa-pause';
    } else {
      return 'fa-solid fa-play';
    }
  }

  render() {
    return (
      <div>
        <div id="circle" onClick={this.resetClick}>
          <p>{ this.state.counter }</p>
        </div>
        <button onClick={ this.handleClick }>
          <i className={ this.iconState() }></i>
        </button>
      </div>
    );
  }
}

export default StopWatch;
