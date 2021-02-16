import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BlockStore from '../components/blockly/store/block_store/block_store';
import * as UserAction from '../modules/user';
import * as BlockAction from '../modules/block';

const BlockStoreContainer = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user.userInfo);
  const allBlocksInfo = useSelector(state => state.block.allBlocksInfo);

  useEffect(() => {
    dispatch(BlockAction.getAllBlocks({
      email: userInfo.email
    }))
  }, [])

  const getAllBlocks = async () => {
    try {
      await dispatch(BlockAction.getAllBlocks({
        email: userInfo.email
      }));
   } catch (error) {
     console.log(error);
   }
  }

  const onBuyBlocks = async (buyList, mileage) => {
    console.log(buyList, mileage);
    try {
      await dispatch(BlockAction.buyBlocks({
        email: userInfo.email,
        blockId: buyList,
      }));
      changeMileage(mileage);
      getAllBlocks();
    } catch (e) {
      console.log(e);
    }
  };

  const changeMileage = async (mileage) => {
    try {
      await dispatch(UserAction.changeMileage({
        email: userInfo.email,
        mileage: mileage * -1,
      }));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <BlockStore 
        allBlocksInfo={allBlocksInfo}
        onBuyBlocks={onBuyBlocks}
        usermil={userInfo.mileage}
      />
    </>
  );
};

export default BlockStoreContainer;