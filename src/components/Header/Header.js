import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  state = {
    animes: ['Shingeki', 'Death Note', 'Dt. Stone'],
  }
  render() {
    return (
      <header>
        {this.state.animes.map(a => <span key={a}>{a}</span>)}
      </header>
    )
  }
}

export default Header;