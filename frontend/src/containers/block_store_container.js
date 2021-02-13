import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BlockStore from '../components/blockly/store/block_store/block_store';
import * as BlockAction from '../modules/block';

const BlockStoreContainer = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user.userInfo);
  const allBlocksInfo = useSelector(state => state.block.allBlocksInfo);
  const [modal, setModal] = useState(false);

  const getAllBlocks = async () => {
    try {
      await dispatch(BlockAction.getAllBlocks({
        email: userInfo.email
      }));
   } catch (error) {
     console.log(error);
   }
  }

  const onBuyBlocks = async (buyList) => {
    try {
      await dispatch(BlockAction.buyBlocks({
        email: userInfo.email,
        blockId: buyList,
      }));
      getAllBlocks();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(BlockAction.getAllBlocks({
      email: userInfo.email
    }))
  }, [])


  return (
    <>
      <BlockStore 
        allBlocksInfo={allBlocksInfo}
        onBuyBlocks={onBuyBlocks}
        usermil={userInfo.mileage}
        getAllBlocks={getAllBlocks}
        setModal={setModal}
      />
    </>
  );
};

export default BlockStoreContainer;