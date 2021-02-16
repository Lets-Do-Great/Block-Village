import { CodeSharp } from '@material-ui/icons';
import React, { useEffect, useRef, useState } from 'react';
import styles from './block_bill_footer.module.css'

const BlockBillFooter = ({ usermil, billList, buyBlocks }) => {
  const [priceSum, setPriceSum] = useState(0);
  const [priceMil, setPriceMil] = useState(0);
  const resultMil = useRef();

  useEffect(() => {
    let sum = 0;
    billList.map((list) => (
      sum += list.price
    ));
    setPriceSum(sum)
    setPriceMil(usermil - sum)

    if ((usermil - sum) < 0) {
      resultMil.current.style.color = `#ff0000`;
    } else {
      resultMil.current.style.color = `#0A0`
    }
  }, [usermil, billList]);

  const onSubmitBuy = () => {
    if(priceMil >= 0 && billList.length > 0) {
      console.log("사 사 ", priceMil, billList); 
      buyBlocks();
    }
    else {
      console.log("못사 못사");
    }
  }

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
        <div className={styles.footerBody} onClick={onSubmitBuy}>
          구매하기
        </div>
      </div>
    </div>
  )
};

export default BlockBillFooter;