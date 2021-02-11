import React, { useEffect, useState } from 'react';
import styles from './tutorial_submain.module.css'
import TutorialMain1 from '../tutorial_one/tutorial_main_1/tutorial_main_1';
import TutorialMain2 from '../tutorial_two/tutorial_main_2/tutorial_main_2';
import TutorialMain3 from '../tutorial_three/tutorial_main_3/tutorial_main_3';
import * as BlockAction from '../../../../modules/block';
import { useDispatch, useSelector } from 'react-redux';

const TutorialSubmain = (props) => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user.userInfo)

  const onbuyBlocks = async () => {
    const buyblock = [1, 2, 3, 4, 5, 12, 13, 14, 25, 38, 39, 40]
    try {
      await dispatch(BlockAction.buyBlocks({
        email: userInfo.email, 
        blockId: buyblock
      }))
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    onbuyBlocks();
  }, [])


  // state
  const [stage, setStage] = useState(1);

  const tutorial_one = {
    id: 1,
    title: '튜토리얼 1',
    initialXml: '<xml xmlns="http://www.w3.org/1999/xhtml">' +
                '<Block type="start_button" x="70" y="30"></Block>' +
                '<Block type="move_forward_1" x="70" y="170"></Block>' +
                '</xml>',
    toolboxCategories: [
      {
        name: '시작',
        colour: '#C30D23',
        blocks: [
          {type: 'start_button',},
          {type: 'end_button',},
        ],
      },
      {
        name: '움직임',
        colour: '#8FC31F',
        blocks: [
          {type: 'move_forward_1'},
        ],
      },
    ],
    map_image: '../../../../images/test_playground.png',
    character_image: '/images/bug.png',
    icon_status: [false, false, false],
  };

  const tutorial_two = {
    id: 2,
    title: '튜토리얼 2',
    initialXml: '<xml xmlns="http://www.w3.org/1999/xhtml">' +
                '<Block type="start_button" x="70" y="30"></Block>' +
                '<Block type="turn_left" x="70" y="170"></Block>' +
                '</xml>',
    toolboxCategories: [
      {
        name: '시작',
        colour: '#C30D23',
        blocks: [
          {type: 'start_button',},
          {type: 'end_button',},
        ],
      },
      {
        name: '움직임',
        colour: '#8FC31F',
        blocks: [
          {type: 'move_forward_1'},
          {type: 'turn_left'},
        ],
      },
    ],
    map_image: '../../../../images/test_playground.png',
    character_image: '/images/bug.png',
    icon_status: [true, false, false],
  };

  const tutorial_three = {
    id: 3,
    title: '튜토리얼 3',
    initialXml: '<xml xmlns="http://www.w3.org/1999/xhtml">' +
                '<Block type="start_button" x="70" y="30"></Block>' +
                '<Block type="number" x="10" y="170"></Block>' +
                '<Block type="repeat_times" x="70" y="170"></Block>' +
                '</xml>',
    toolboxCategories: [
      {
        name: '시작',
        colour: '#C30D23',
        blocks: [
          {type: 'start_button',},
          {type: 'end_button',},
        ],
      },
      {
        name: '움직임',
        colour: '#8FC31F',
        blocks: [
          {type: 'move_forward_1'},
          {type: 'turn_right'},
          {type: 'turn_left'},
        ],
      },
      {
        name: '흐름',
        colour: '#55CFFF',
        blocks: [
          {type: 'number'},
          {type: 'repeat_times'},
        ]
      },
    ],
    map_image: '../../../../images/test_playground.png',
    character_image: '/images/bug.png',
    icon_status: [true, true, false],
  };

  // function
  const change_one_two = () => {
    setStage(2)
  }

  const change_two_three = () => {
    setStage(3)
  }

  const GoMyPage = () => {
    console.log();
  }

  return (
    <div className={styles.body}>
      {stage === 1 && <TutorialMain1 info={tutorial_one} GoTwo={change_one_two} />}
      {stage === 2 && <TutorialMain2 info={tutorial_two} GoThree={change_two_three} />}
      {stage === 3 && <TutorialMain3 info={tutorial_three} GoMyPage={GoMyPage}/>}
    </div>
  )
};

export default TutorialSubmain;