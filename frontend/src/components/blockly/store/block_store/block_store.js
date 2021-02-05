import React from 'react';

import BlockBill from '../block_bill/block_bill';
import BlockCart from '../block_cart/block_cart';
import BlockMenu from '../block_menu/block_menu';
import StoreNavbar from '../store_navbar/store_navbar';
import styles from './block_store.module.css'

// 블럭을 카테고리로 구분해야함.
// 마일리지도 정해야 함.
// 요청 두 개 [마일리지 -, 내 블럭 추가]

const BlockStore = (props) => {
  return (
    <div className={styles.body}>
      <StoreNavbar />
      <div className={styles.container}>

        {/* 왼쪽 */}
        <div className={styles.cart__bill}>
          <div className={styles.cart}>
            <BlockCart />
          </div>
          <div className={styles.bill}>
            <BlockBill />
          </div>
        </div>

        {/* 오른쪽 */}
        <div className={styles.blocks}>
          <div className={styles.store_body}>
            <BlockMenu />
          </div>
        </div>

      </div>

    </div>
  )
};

export default BlockStore;