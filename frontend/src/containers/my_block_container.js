import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyBlockCategory from '../components/my_page/my_block/my_block_category/my_block_category';
import * as BlockAction from '../modules/block';

const MyBlockContainer = ({ closeModal }) => {

    const userInfo = useSelector(state => state.user.userInfo);
    const myBlockList = useSelector(state => state.block.myBlocksInfo);
    const dispatch = useDispatch();

    return (
    <>
        <MyBlockCategory
            myBlockList={myBlockList}
            closeModal={closeModal}/> 
    </>
    );
}

export default MyBlockContainer;