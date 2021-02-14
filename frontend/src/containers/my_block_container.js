import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyBlockCategory from '../components/my_page/my_block/my_block_category/my_block_category';
import * as BlockAction from '../modules/block';

const MyBlockContainer = ({ closeModal }) => {

    const userInfo = useSelector(state => state.user.userInfo);
    const myBlocksInfo = useSelector(state => state.block.myBlocksInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        getMyBlocks();
        console.log(myBlocksInfo);
    }, []);

    const getMyBlocks = () => {
        try{
            dispatch(BlockAction.getMyBlocks({ email: userInfo.email }));
        } catch(e) {
            console.log(e);
        }
    }

    return (
    <>
        <MyBlockCategory
            myBlockList={myBlocksInfo}
            closeModal={closeModal}/> 
    </>
    );
}

export default MyBlockContainer;