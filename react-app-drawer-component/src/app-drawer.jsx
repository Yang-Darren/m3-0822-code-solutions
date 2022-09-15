import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'close-menu slide-close'
    };
    this.menuClick = this.menuClick.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  menuClick(event) {
    this.setState(
      { status: 'open-menu slide-open' }
    );
  }

  closeMenu(event) {
    this.setState(
      { status: 'close-menu slide-close' }
    );
  }

  render() {
    return (
      <div>
        <i onClick={this.menuClick} className="fa-solid fa-bars fa-2x"></i>
        <div id="menu" className={this.state.status} onClick={this.closeMenu}>
          <div>
            <h1>Choose a Game</h1>
            <h3 onClick={this.closeMenu}>The Legend of Zelda</h3>
            <h3 onClick={this.closeMenu}>A link to the Past</h3>
            <h3 onClick={this.closeMenu}>Ocarina of Time</h3>
            <h3 onClick={this.closeMenu}>The Wind Waker</h3>
            <h3 onClick={this.closeMenu}>Breath of the Wild</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
