import React from 'react';
import BlockBill from '../block_bill/block_bill';

const BlockBillContainer = ({ billList, onDeleteBillList }) => {
  const newBillList = billList.reverse();
  console.log(newBillList);
  return (
    <>
      {newBillList.map((blist) => (
        <BlockBill 
          key={blist.id}
          blist={blist}
          onDeleteBillList={onDeleteBillList}
        />
      ))}
    </>
  )
};

export default BlockBillContainer;