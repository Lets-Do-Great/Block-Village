import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as BlockAction from '../../../modules/block';
import MyPageMain from '../my_page_main/my_page_main';

const MyPageSubmain = () => {
  const userInfo = useSelector(state => state.user.userInfo);
  const dispatch = useDispatch();
  
  const getAllBlocks = async () => {
    try{
        await dispatch(BlockAction.getAllBlocks({ email: userInfo.email }));
    } catch(e) {
        console.log(e);
    }
  }

  useEffect(() => {
    getAllBlocks();
  }, []);


  const [imageInfo, setImageInfo] = useState({
    background: 'my_page_basic_bg',
    info: 'my_page_basic_info_after',
    block: 'my_page_basic_block_after_2',
    mission: 'my_page_basic_mission_after_2',
    challenge: 'my_page_basic_bed_after',
  });

  const onChageBasic = () => {
    setImageInfo({
      ...imageInfo,
      background: 'my_page_basic_bg',
      info: 'my_page_basic_info_after',
      block: 'my_page_basic_block_after_2',
      mission: 'my_page_basic_mission_after_2',
      challenge: 'my_page_basic_bed_after',
    })
  }

  const onChageSea = () => {
    setImageInfo({
      ...imageInfo,
      background: 'my_page_sea_bg',
      info: 'my_page_sea_info_after',
      block: 'my_page_sea_block_after',
      mission: 'my_page_sea_mission_after',
      challenge: 'my_page_sea_bed_after',
    })
  }

  const onChageSpace = () => {
    setImageInfo({
      ...imageInfo,
      background: 'my_page_space_bg',
      info: 'my_page_space_info_after',
      block: 'my_page_block_after',
      mission: 'my_page_space_mission_after',
      challenge: 'my_page_space_bed_after',
    })
  }

  return (
    <>
      <MyPageMain 
        imageInfo={imageInfo}
        onChageBasic={onChageBasic}
        onChageSea={onChageSea}
        onChageSpace={onChageSpace}
      />
    </>
  )

}

export default MyPageSubmain;