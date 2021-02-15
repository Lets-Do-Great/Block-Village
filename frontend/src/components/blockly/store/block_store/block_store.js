import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


import BlockBillContainer from '../block_bill_container/block_bill_container';
import BlockBillFooter from '../block_bill_footer/block_bill_footer';
import BlockCategory from '../block_category/block_category';
import BlockMenu from '../block_menu/block_menu';
import Nav from '../../../nav/nav';
import styles from './block_store.module.css'

const BlockStore = ({ allBlocksInfo, onBuyBlocks, usermil }) => {
  
  const [billList, setBillList] = useState([]);
  
  const buyBlocks = () => {
    const buyList = []
    billList.map((item) => (
      buyList.push(item.id)
    ))

    let sumMileage = 0;
    billList.map((item) => (
      sumMileage += item.price
    ))
      
    onBuyBlocks(buyList, sumMileage);
    setBillList([]);
  };

  const [categoryStatus, setCategoryStatus] = useState([
    true, false, false, false, false, false,
  ]);
  const [category, setCategory] = useState('판단');

  
  const onChangeSelectedCategory = (name) => {
    setCategory(name)
    
    if (name === '판단') {
      setCategoryStatus([true, false, false, false, false, false,])
    }
    if (name === '움직임') {
      setCategoryStatus([false, true, false, false, false, false,])
    }
    if (name === '흐름') {
      setCategoryStatus([false, false, true, false, false, false,])
    }
    if (name === '계산') {
      setCategoryStatus([false, false, false, true, false, false,])
    }
    if (name === '그리기') {
      setCategoryStatus([false, false, false, false, true, false,])
    }
    if (name === '함수') {
      setCategoryStatus([false, false, false, false, false, true,])
    }
  };
  
  
  //==========================================================

  const onDeleteBillList = (bill) => {
    const newBillList = billList.filter(item => item.id !== bill.id)
    setBillList(newBillList)
  };

  const addBillList = (bill) => {
    for (let i = 0; i < billList.length; i++) {
      if (billList[i].id == bill.id) {
        alert('이미 리스트에 있습니다.')
        return
      }
    }
    const oldBillList = [...billList, bill];
    setBillList(oldBillList)
  }



  return (
    <div className={styles.body}>
      <Nav type="store"/>
      <div className={styles.container}>


        <div className={styles.bill}>
          <div className={styles.bill_items}>
            <BlockBillContainer 
              billList={billList}
              onDeleteBillList={onDeleteBillList}
            />
          </div>

          <div className={styles.bill_footer}>
            <BlockBillFooter 
              usermil={usermil}
              billList={billList}
              buyBlocks={buyBlocks}
            />
          </div>
        </div>


        <div className={styles.blocks}>
          <div className={styles.cataBody}>
            <BlockCategory 
              categoryStatus={categoryStatus}
              onChangeSelectedCategory={onChangeSelectedCategory} 
            />
          </div>
          <div className={styles.store_body}>
            <div className={styles.shelf}>
              <BlockMenu 
                addBillList={addBillList}
                allBlocksInfo={allBlocksInfo}
                category={category}
              />
            </div>
          </div>
        </div>

      </div>

    </div>
  )
};

export default BlockStore;