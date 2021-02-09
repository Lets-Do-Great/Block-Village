import React, { useEffect, useRef, useState } from 'react';
import styles from './block_bill_footer.module.css'

const BlockBillFooter = ({ usermil, billList, buyBlocks }) => {
  const [priceSum, setPriceSum] = useState(0);
  const [priceMil, setPriceMil] = useState(0);
  const [buyStauts, setBuyStatus] = useState(false);
  const resultMil = useRef();

  useEffect(() => {
    let sum = 0;
    billList.map((list) => (
      sum += list.price
    ));
    setPriceSum(sum)
    setPriceMil(usermil - sum)

    if ((usermil - sum) < 0) {
      console.log('asf');
      resultMil.current.style.color = `#ff0000`
    } else {
      resultMil.current.style.color = `#0A0`
    }
  }, [usermil, billList]);

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <div className={styles.headerSum}>
          <div className={styles.SumName}>총 합계</div>
          <div className={styles.SumPrice}>{priceSum}</div>
        </div>
        <div className={styles.headerBefore}>
          <div className={styles.beforeMil}>(구매전) 내 마일리지</div>
          <div className={styles.beforeMilMy}>{usermil}</div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionAfter}>
          <div className={styles.afterMil}>(구매후) 내 마일리지</div>
          <div className={styles.afterMilMy} ref={resultMil}>{priceMil}</div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerBody} onClick={buyBlocks}>
          구매하기
        </div>
      </div>
    </div>
  )
};

export default BlockBillFooter;