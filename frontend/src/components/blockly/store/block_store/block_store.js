import React, { useState } from 'react';

import BlockBill from '../block_bill/block_bill';
import BlockCart from '../block_cart/block_cart';
import BlockMenu from '../block_menu/block_menu';
import StoreNavbar from '../store_navbar/store_navbar';
import styles from './block_store.module.css'

const BlockStore = ({ allBlcoksInfo, myBlocksInfo, onBuyBlocks }) => {
  const [buyList, setBuyList] = useState([]);

  return (
    <div className={styles.body}>
      <StoreNavbar />
      <div className={styles.container}>


        {/* <div className={styles.cart__bill}>
          <div className={styles.cart}>
            <BlockCart />
          </div>
          <div className={styles.bill}>
            <BlockBill />
          </div>
        </div>


        <div className={styles.blocks}>
          <div className={styles.store_body}>
            <BlockMenu />
          </div>
        </div> */}

      </div>

    </div>
  )
};

export default BlockStore;