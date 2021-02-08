import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BlockStore from '../components/blockly/store/block_store/block_store';
import * as BlockAction from '../modules/block';

const BlockStoreContainer = () => {
  const userInfo = useSelector(state => state.user.userInfo);
  const allBlcoksInfo = useSelector(state => state.block.allBlcoksInfo);
  // const myBlocksInfo = useSelector(state => state.block.myBlocksInfo);
  const dispatch = useDispatch();

  // const onGetMyBlocks = async () => {
  //   try {
  //      await dispatch(BlockAction.getMyBlocks({
  //        email: userInfo.email
  //      }));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const getAllBlocks = async () => {
  //   dispatch(BlockAction.getAllBlocks());
  // }

  const onBuyBlocks = async (e) => {
    // 불확실
    dispatch(BlockAction.buyBlocks());
    try {
      await dispatch(BlockAction.buyBlocks({
        email: userInfo.email,
        blockId: e,
      }));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <BlockStore 
        allBlcoksInfo={allBlcoksInfo}
        // myBlocksInfo={myBlocksInfo}
        onBuyBlocks={onBuyBlocks}
        // onGetMyBlocks={onGetMyBlocks}
      />
    </>
  );
};

export default BlockStoreContainer;