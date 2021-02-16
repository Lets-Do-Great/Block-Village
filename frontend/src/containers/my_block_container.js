import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyBlockCategory from '../components/my_page/my_block/my_block_category/my_block_category';

const MyBlockContainer = ({ closeModal }) => {
    const allBlocksInfo = useSelector(state => state.block.allBlocksInfo);

    return (
    <>
        <MyBlockCategory
            closeModal={closeModal}
            allBlocksInfo={allBlocksInfo}
        /> 
    </>
    );
}

export default MyBlockContainer;