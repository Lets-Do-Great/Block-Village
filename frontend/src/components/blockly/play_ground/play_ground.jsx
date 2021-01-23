import React, { useState } from 'react';
import styles from './play_ground.module.css';


const PlayGround = ({ javascript_code }) => {

  const playGame = () => {
    // string to javascript
    const F = new Function(javascript_code);
    return(F());
  };

  return (
    <div className={styles.body}>
      <section className={styles.game}>
        <div className={styles.game__bug}></div>
      </section>
      <button 
        onClick={playGame}
        className={styles.game__button}
      >시작하기</button>
    </div>
  )
}

export default PlayGround;