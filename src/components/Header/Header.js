import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  state = {
    animes: ['Shingeki', 'Death Note', 'Dt. Stone'],
  }
  render() {
    return (
      <header className="header">
        <h1 className="social-name">
          facebook
        </h1>
        <span className="action-header">
          Meu perfil (icon)
        </span>
      </header>
    )
  }
}

export default Header;