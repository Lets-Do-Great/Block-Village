import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './main_menu.module.css'

const MainMenu = ({ info }) => {
  const history = useHistory();

  const goNextPage = () => {
    history.push(`${info.url}`)
  };

  return (
    <div className={styles.container}>

      <div className={styles.image_container}>
        <img src={info.img_url} alt="사진넣어라" />
      </div>

      <div className={styles.content}>

        <div className={styles.title}>
          <h2>{info.title}</h2>
        </div>

        <div className={styles.body}>
          <p>{info.content}</p>
        </div>

        <div className={styles.button}>
          <button onClick={goNextPage}>
            <a>바로가기</a>
          </button>
        </div>

      </div>

    </div>
  )
}

export default MainMenu;