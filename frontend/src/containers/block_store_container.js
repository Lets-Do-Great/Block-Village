import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BlockStore from '../components/blockly/store/block_store/block_store';
import * as BlockAction from '../modules/block';

const BlockStoreContainer = () => {

  const allBlcoksInfo = useSelector(state => state.block.allBlcoksInfo);
  const myBlocksInfo = useSelector(state => state.block.myBlocksInfo);
  const dispatch = useDispatch();

  const getMyBlocks = async () => {
    // 유저 메일 넣어야 할 것으로 예상
    dispatch(BlockAction.getMyBlocks());
  }

  const getAllBlocks = async () => {
    dispatch(BlockAction.getAllBlocks());
  }

  const buyBlocks = async () => {
    // 불확실
    dispatch(BlockAction.buyBlocks());
  }

  return (
    <>
      <BlockStore 
        allBlcoksInfo={allBlcoksInfo}
        myBlocksInfo={myBlocksInfo}
      />
    </>
  );
};

export default BlockStoreContainer;