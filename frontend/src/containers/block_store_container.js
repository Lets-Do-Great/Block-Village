import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BlockStore from '../components/blockly/store/block_store/block_store';
import * as BlockAction from '../modules/block';

const BlockStoreContainer = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user.userInfo);
  const allBlcoksInfo = useSelector(state => state.block.allBlcoksInfo);

  const getAllBlocks = async () => {
    try {
      await dispatch(BlockAction.getAllBlocks({
        email: userInfo.email
      }));
   } catch (error) {
     console.log(error);
   }
  }

  const onBuyBlocks = async (e) => {
    try {
      await dispatch(BlockAction.buyBlocks({
        email: userInfo.email,
        blockId: e,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBlocks();
  }, [allBlcoksInfo])

  return (
    <>
      <BlockStore 
        allBlcoksInfo={allBlcoksInfo}
        onBuyBlocks={onBuyBlocks}
        usermil={userInfo.mileage}
      />
    </>
  );
};

export default BlockStoreContainer;