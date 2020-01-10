import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  state = {
    animes: ['Shingeki', 'Death Note', 'Dt. Stone'],
  }
  render() {
    return (
      <header class="header">
        <h1 class="social-name">
          facebook
        </h1>
        <span class="action-header">
          Meu perfil (icon)
        </span>
      </header>
    )
  }
}

export default Header;