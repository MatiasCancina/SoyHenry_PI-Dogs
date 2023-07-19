import React, { Component } from 'react';
import style from './Loader.module.css';

class Loader extends Component {
  render() {
    return (
      <div className={style.loader}>
        <div data-glitch="Loading..." className={style.glitch}>
          Loading...
        </div>
      </div>
    );
  }
}

export default Loader;