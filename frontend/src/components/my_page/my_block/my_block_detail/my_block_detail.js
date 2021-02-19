import React, { useEffect, useRef } from 'react';
import styles from './my_block_detail.module.css'

const MyBlockDetail = ({ block }) => {
  const blockImg = useRef();

  useEffect(() => {
    const item = blockImg.current;
    item.style.background = `0% 0%/100% 100% no-repeat url(/images/blocks/block-${block.id}.png)`
  })

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.image_box} ref={blockImg} />
      </div>
    </div>
  )
}

export default MyBlockDetail;