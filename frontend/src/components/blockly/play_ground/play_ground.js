import React, { useEffect, useRef } from 'react';
// import { Faplay } from 'react-icons/fa';
import styles from './play_ground.module.css';

const PlayGround = ({ javascript_code }) => {
  const fieldsize = useRef();
  const fieldchar = useRef();
  
  const playGame = () => {
    // string to javascript
    const F = new Function(javascript_code);
    return(F());
  };
  
  useEffect(() => {
    
    // const field = fieldsize.current;
    // const fieldRect = field.getBoundingClientRect();
    // const item = fieldchar.current;
    // item.setAttribute('className', `image`)
    // item.setAttribute('src', `../../../image/carrot.png`)
    // item.style.position = 'absolute';
    // const x = (fieldRect.width - 0) / 2;
    // const y = (fieldRect.height - 0) / 2;
    // item.style.left = `${x}px`;
    // item.style.top = `${y}px`;
  })

  return (
    
    <div className={styles.body}>
      {/* <section className={styles.game} ref={fieldsize}>
        <img ref={fieldchar}></img>
      </section>
      <footer className={styles.footer}>
        <button 
          onClick={playGame}
          className={styles.game__button}
        >start
        </button>
      </footer> */}
      {/* <Faplay /> */}
    </div>
  )
}

export default PlayGround;