import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      revealed: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.state.revealed === e.target.id) {
      this.setState({ revealed: '' });
    } else {
      this.setState({ revealed: e.target.id });
    }
  }

  render() {
    const content = this.props.content;
    const accordionRender = content.map(content =>
      <ul key={content.language}>
        <li onClick={this.handleClick} id={content.language} className='main'> {content.language} </li>
        <li className={this.state.revealed === content.language ? '' : 'hidden'}> {content.info}</li>
      </ul>
    );
    return (
      <div>
        {accordionRender}
      </div>
    );
  }
}

export default Accordion;
