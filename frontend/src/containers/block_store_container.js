import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BlockStore from '../components/blockly/store/block_store/block_store';
import * as BlockAction from '../modules/block';

const BlockStoreContainer = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user.userInfo);

  // const onGetMyBlocks = async () => {
  //   try {
  //      await dispatch(BlockAction.getMyBlocks({
  //        email: userInfo.email
  //      }));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

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
  };

  useEffect(() => {
    // onGetMyBlocks();
    getAllBlocks();
  })

  return (
    <>
      <BlockStore 
        onBuyBlocks={onBuyBlocks}
      />
    </>
  );
};

export default BlockStoreContainer;