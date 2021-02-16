import React from 'react';
import BlockBill from '../block_bill/block_bill';

const BlockBillContainer = ({ billList, onDeleteBillList }) => {
  return (
    <>
      {billList.reverse().map((blist) => (
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