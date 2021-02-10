import React, { useEffect, useRef } from 'react';
import styles from './block_bill.module.css'
import { FaWindowClose } from 'react-icons/fa';

const BlockBill = ({ blist, onDeleteBillList }) => {
  const img_ref = useRef();

  useEffect(() => {
    const item = img_ref.current;
    item.style.background = `100%/100% no-repeat url(/images/blcoks/${blist.id}.png)`
  })

  return (
    <div className={styles.body}>

      <div className={styles.img} ref={img_ref}></div>

      <div className={styles.cata}>
        <p>{blist.category}</p>
      </div>

      <div className={styles.price}>
        <p>{blist.price}</p>
      </div>

      <div className={styles.delete__btn} >
        <div className={styles.btn}>
          <FaWindowClose 
            size="30" 
            color="#EA65A2" 
            onClick={() => {onDeleteBillList(blist)}}
          />
        </div>
      </div>

    </div>
  )
}

export default BlockBill;