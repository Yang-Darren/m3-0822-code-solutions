import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggleOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ toggleOn: !this.state.toggleOn });
  }

  render() {
    let toggleState = 'OFF';
    let toggleClass = 'toggle-off';

    if (this.state.toggleOn) {
      toggleState = 'ON';
      toggleClass = 'toggle-on';
    }

    return (
      <div className='container'>
        <div className={`${toggleClass}`}>
          <button onClick={this.handleClick}></button>
        </div>
        <p>{ toggleState }</p>
      </div>
    );
  }
}

export default ToggleSwitch;
