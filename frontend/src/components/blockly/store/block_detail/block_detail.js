import React from 'react';
import styles from './block_detail.module.css'

const BlockDetail = ({ block, addBillList }) => {
  return (
    <div className={styles.body} onClick={() => addBillList(block)}>
      <div className={styles.container}>

        <div className={styles.image_box}>
          <div className={styles.image}></div>
        </div>

        <div className={styles.price_box}>
          <h3>{block.price}</h3>
        </div>
        
      </div>
    </div>
  )
}

export default BlockDetail;