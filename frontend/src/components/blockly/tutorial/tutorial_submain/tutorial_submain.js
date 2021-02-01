import React, { useEffect, useState } from 'react';
import TutorialMain from '../tutorial_main/tutorial_main';

const TutorialSubmain = (props) => {
  // state
  const [tutorial_real, setTutorial_real] = useState({
    id: 1,
    title: '튜토리얼 1',
    initialXml: '<xml xmlns="http://www.w3.org/1999/xhtml"><Block type="start_button" x="70" y="30"></Block><Block type="move_forward_1" x="70" y="170"></Block></xml>',
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
  });

  const tutorial_one = {
    id: 1,
    title: '튜토리얼 1',
    initialXml: '<xml xmlns="http://www.w3.org/1999/xhtml"><Block type="start_button" x="70" y="30"></Block><Block type="move_forward_1" x="70" y="170"></Block></xml>',
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
    initialXml: '<xml xmlns="http://www.w3.org/1999/xhtml"><Block type="start_button" x="70" y="30"></Block><Block type="move_forward_1" x="70" y="170"></Block></xml>',
    toolboxCategories: [
      {
        name: '시작',
        colour: '#C30D23',
        blocks: [
          {type: 'start_button',},
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
    icon_status: [true, false, false],
  };

  const tutorial_three = {
    id: 3,
    title: '튜토리얼 3',
    initialXml: '<xml xmlns="http://www.w3.org/1999/xhtml"><Block type="start_button" x="70" y="30"></Block><Block type="move_forward_1" x="70" y="170"></Block></xml>',
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
    icon_status: [true, true, false],
  };

  // function
  const change_one_two = () => {
    setTutorial_real(tutorial_two)
  }

  const change_two_three = () => {
    setTutorial_real(tutorial_three)
  }

  return (
    <TutorialMain 
      info={tutorial_real}
      change_one_two={change_one_two}
      change_two_three={change_two_three}
    />
  )
};

export default TutorialSubmain;