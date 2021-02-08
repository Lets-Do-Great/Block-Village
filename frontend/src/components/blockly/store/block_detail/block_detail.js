import React from 'react';
import styles from './block_detail.module.css'

const BlockDetail = (props) => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>

        <div className={styles.image_box}>
          <div className={styles.image}></div>
        </div>

        <div className={styles.price_box}>
          <h3>1,000 G</h3>
        </div>
        
      </div>
    </div>
  )
}

export default BlockDetail;