import React from 'react'
import style from './Loader.module.css';

function Loader() {
    return (
        <div className={style.loader}>
        <div data-glitch="Loading..." className={style.glitch}>
          Loading...
        </div>
      </div>
    )
}

export default Loader