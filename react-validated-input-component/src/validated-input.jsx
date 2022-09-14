import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      message: 'A password is required',
      valid: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState(
      { password: event.target.value },
      this.meetRequirements
    );
  }

  meetRequirements() {
    if (this.state.password.length < 8) {
      this.setState({ message: 'Your password is too short' });
    } else {
      this.setState({ message: '', valid: true });
    }
  }

  iconStatus() {
    if (this.state.valid) {
      return 'fa-solid fa-check';
    } else {
      return 'fa-solid fa-x';
    }
  }

  render() {
    return (
      <form>
        <label htmlFor='password'>Password</label>
        <div>
          <input type='password' name='password' id='password' value={this.state.password} onChange={this.handleChange}></input>
          <i className={ this.iconStatus() }></i>
        </div>
        <p>{this.state.message}</p>
      </form>
    );
  }
}

export default ValidatedInput;
