import React, { useEffect, useRef } from 'react';
import styles from './block_detail.module.css'

const BlockDetail = ({ block, addBillList }) => {
  const blockImg = useRef();

  useEffect(() => {
    const item = blockImg.current;
    item.style.background = `100%/100% no-repeat url(/images/block_dumy/${block.id}.png)`
  })

  return (
    <div className={styles.body} onClick={() => addBillList(block)}>
      <div className={styles.container}>

        <div className={styles.image_box} ref={blockImg}>
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