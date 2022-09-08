import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const isClicked = this.state.isClicked;
    if (isClicked) {
      return (
        <button onClick={this.handleClick}>Thanks!</button>
      );
    } else {
      return (
        <button onClick={this.handleClick}>Click Me!</button>
      );
    }
  }

  handleClick() {
    this.setState({ isClicked: true });
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<CustomButton />);
