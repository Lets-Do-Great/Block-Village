import React, { useEffect, useRef } from 'react';
import styles from './block_detail.module.css'

const BlockDetail = ({ block, addBillList }) => {
  const blockImg = useRef();

  useEffect(() => {
    const item = blockImg.current;
    item.style.background = `100%/100% no-repeat url(/images/block_dumy/${block.id}.png)`
  })

  return (
    <div className={styles.body}>
      <div className={styles.container}>

        <div className={styles.small__container}>
          <div className={styles.block_img_container}>
            <div className={styles.image_box} ref={blockImg} />

          </div>

          <div className={styles.price_box}>
            <div className={styles.price_box_margin}></div>
            <div className={styles.price_box_container}>
              <div className={styles.tag}>
                <div className={styles.tag_text}>
                  {block.price}
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className={styles.overlay}></div>

        <div className={styles.hide__button} onClick={() => addBillList(block)}>
          <a>목록에 담기</a>
        </div>

      </div>
    </div>
  )
}

export default BlockDetail;