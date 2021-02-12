import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


import BlockBillContainer from '../block_bill_container/block_bill_container';
import BlockBillFooter from '../block_bill_footer/block_bill_footer';
import BlockCategory from '../block_category/block_category';
import BlockMenu from '../block_menu/block_menu';
import StoreNavbar from '../store_navbar/store_navbar';
import styles from './block_store.module.css'

const BlockStore = ({ onBuyBlocks, usermil }) => {
  const [billList, setBillList] = useState([]);
  
  const buyBlocks = () => {
    const buyList = []
    billList.map((item) => (
      buyList.push(item.id)
    ))
    onBuyBlocks(buyList)
    // 마일리지 없애기 추가
    // let sumMileage = 0;
    // billList.map((item) => (
    //   sumMileage += item.price
    // ))

    setBillList([])
  };
    
  //==== 아래 데이터는 allblock 불러오는 예제 데이터 나중에 바꿔야함
  const allBlcoksInfo = useSelector(state => state.block.allBlcoksInfo);
  useEffect(() => {
    setSelectedCategory(allBlcoksInfo["판단"])
  }, [])
  //=========================================================

  const [categoryStatus, setCategoryStatus] = useState([
    true, false, false, false, false, false,
  ]);

  const [selectedCategory, setSelectedCategory] = useState([])

  const onChangeSelectedCategory = (name) => {
    setSelectedCategory(allBlcoksInfo[`${name}`])
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
      <StoreNavbar />
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
                selectedCategory={selectedCategory}
                addBillList={addBillList}
              />
            </div>
          </div>
        </div>

      </div>

    </div>
  )
};

export default BlockStore;