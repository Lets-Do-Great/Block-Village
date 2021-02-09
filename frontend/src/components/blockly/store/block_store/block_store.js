import React, { useState } from 'react';
import { useSelector } from 'react-redux';


import BlockBillContainer from '../block_bill_container/block_bill_container';
import BlockBillFooter from '../block_bill_footer/block_bill_footer';
import BlockCategory from '../block_category/block_category';
import BlockMenu from '../block_menu/block_menu';
import StoreNavbar from '../store_navbar/store_navbar';
import styles from './block_store.module.css'

const BlockStore = ({ onBuyBlocks }) => {
  const allBlcoksInfo = useSelector(state => state.block.allBlcoksInfo);
  const [billList, setBillList] = useState([
    { 
      cata: '시작',
      id: 1,
      price: 1000,
    },
    { 
      cata: '시작',
      id: 2,
      price: 2000,
    },
  ]);
  const [usermil, setUsermil] = useState(5000);

  const buyBlocks = () => {
    const buyList = []
    billList.map((item) => (
      buyList.push(item.id)
    ))
    onBuyBlocks(buyList)
    setBillList([])
  };

  //==== 아래 데이터는 allblock 불러오는 예제 데이터 나중에 바꿔야함
  const allBlocks = {
    '시작': [
      {
        id: 1,
        price: 0,
        useHave: true,
      },
      {
        id: 2,
        price: 0,
        useHave: true,
      },
    ],
    '판단': [
      {
        id: 3,
        price: 1000,
        userHave: false,
      },
      {
        id: 4,
        price: 500,
        userHave: false,
      },
      {
        id: 5,
        price: 700,
        userHave: true,
      },
    ],
    '움직임': [
      {
        id: 6,
        price: 3000,
        userHave: false,
      },
      {
        id: 7,
        price: 2700,
        userHave: false,
      },
    ],
  }
  //=========================================================

  const [categoryStatus, setCategoryStatus] = useState([
    true, false, false, false, false, false,
  ]);

  const [selectedCategory, setSelectedCategory] = useState([
    {
      id: 3,
      price: 1000,
      userHave: false,
    },
    {
      id: 4,
      price: 500,
      userHave: false,
    },
    {
      id: 5,
      price: 700,
      userHave: true,
    },
  ])

  const onChangeSelectedCategory = (name) => {
    setSelectedCategory(allBlocks[`${name}`])
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