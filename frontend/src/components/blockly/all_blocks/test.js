[
  {
    name: '시작',
    colour: '#C30D23',
    blocks: [
      {type: 'start_button',},
      {type: 'end_button',},
    ],
  },
  {
    name: '판단',
    colour: '#FFA31D',
    blocks: [
      {type: 'input',},
      {type: 'block_judgment_equals',},
      {type: 'block_judgment_strictinequality_left',},
      {type: 'block_judgment_strictinequality_right',},
      {type: 'block_judgment_notequal',},
      {type: 'block_judgment_strictinequality_leftequal',},
      {type: 'block_judgment_strictinequality_rightequal',},
      {type: 'block_judgment_compare_and',},
      {type: 'block_judgment_compare_or',},
      {type: 'block_judgment_compare_not',},
    ],
  },
  {
    name: '움직임',
    colour: '#8FC31F',
    blocks: [
      {type: 'move_x',},
      {type: 'move_y'},
      {type: 'point_x'},
      {type: 'point_y'},
      {type: 'point_x_y'},
      {type: 'turn_angle'},
      {type: 'set_angle'},
      {type: 'set_angle_move'},
      {type: 'move_forward'},
      {type: 'move_forward_1'},
    ],
  },
  {
    name: '흐름',
    colour: '#55CFFF',
    blocks: [
      {type: 'repeat_times'},
      {type: 'repeat'},
      {type: 'do_while'},
      {type: 'while_not'},
      {type: 'break'},
      {type: 'condition'},
      {type: 'if_else'},
      {type: 'if_else_double'},
      {type: 'if_else_triple'},
      {type: 'switch_input'},
      {type: 'input_value'},
    ]
  },
  {
    name: '계산',
    colour: '#1060FF',
    blocks: [
      {type: 'number'},
      {type: 'addition'},
      {type: 'subtraction'},
      {type: 'multiplication'},
      {type: 'division'},
      {type: 'random_num'},
      {type: 'quotient'},
      {type: 'remainder'},
      {type: 'square'},
      {type: 'sqrt'},
      {type: 'integer'},
      {type: 'roundup'},
      {type: 'round'},
      {type: 'abs_val'},
    ]
  },
  {
    name: '그리기',
    colour: '#7D10C4',
    blocks: [
      {type: 'pen_down'},
      {type: 'pen_up'},
      {type: 'draw_line'},
      {type: 'rotate_pen'},
      {type: 'change_colour'},
    ]
  },
  {
    name: '함수',
    colour: '#CC6666',
    blocks: [
      {type: 'variable'},
      {type: 'set_variable'},
      {type: 'change_variable'},        
    ]
  },
]

import React, { useRef } from 'react';

import styles from './main.module.css'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Route, Switch, useHistory } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import MainMenu from '../main_menu/main_menu';

const Main = (props) => {
  const history = useHistory();
  
  const mainimg = useRef();
  const ele = mainimg.current;
  // console.log(ggg);
  let pos = { top: 0, left: 0, x: 0, y: 0 };
  ele.scrollTop = 100;
  ele.scrollLeft = 150;


  const mouseDownHandler = function(e) {
    pos = {
      // The current scroll 
      left: ele.scrollLeft,
      top: ele.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };
  };
  const mouseMoveHandler = function(e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    ele.scrollTop = pos.top - dy;
    ele.scrollLeft = pos.left - dx;
  };
  const mouseUpHandler = function() {
    ele.style.cursor = 'grab';
    ele.style.removeProperty('user-select');
  };

  const card_infos = [
    {
      id: 1,
      title: '튜토리얼',
      // img_url: 'https://cdn.pixabay.com/photo/2015/05/12/09/13/freelancer-763730__340.jpg',
      img_url: "/images/maze.png",
      url: '/main/tutorial_main',
      content: '여러분들만의 블록으로 다양한 미션에 도전해 보세요!!',
    },
    {
      id: 2,
      title: '미션 깨기',
      img_url: 'https://cdn.pixabay.com/photo/2015/07/15/11/53/woodtype-846088__340.jpg',
      url: '/main/mission_main',
      content: '여러분들만의 블록으로 다양한 미션에 도전해 보세요!!',
    },
    {
      id: 3,
      title: '챌린지',
      img_url: 'https://media.istockphoto.com/photos/developing-programmer-team-development-website-design-and-coding-in-picture-id1169929038?b=1&k=6&m=1169929038&s=170667a&w=0&h=-OrMC_sVCGZDJCA7OLXG2Xa5UjWibGr2rnL7z6xVIfI=',
      url: '/main/challenge_main',
      content: '여러분들만의 블록으로 다양한 미션에 도전해 보세요!!',
    },
    {
      id: 4,
      title: '블록 상점',
      img_url: 'https://cdn.pixabay.com/photo/2016/11/29/11/14/business-1869127__340.jpg',
      url: '/main/block_store',
      content: '여러분들만의 블록으로 다양한 미션에 도전해 보세요!!',
    },
  ];

  const goMission = () => {
    history.push('/main/mission_main')
  }
  const goStore = () => {
    history.push('/main/block_store')
  }
  const goChallenge = () => {
    history.push('/main/challenge_main')
  }

  return (
    <div className={styles.body}>
      <Navbar />
      <img 
        src="/images/main_background_image.png" 
        className={styles.background_img} 
        ref={mainimg}
        onMouseDown={mouseDownHandler}
        onMouseMove={mouseMoveHandler}
        onMouseUp={mouseUpHandler}
      />
      <div className={styles.container} >

        {/* <div className={styles.goMission} onClick={goMission}></div>
        <div className={styles.goStore} onClick={goStore}></div>
        <div className={styles.goChallenge} onClick={goChallenge}></div> */}


        {/* <div className={styles.left_btn}>
          <FaChevronLeft size="50" />
        </div> */}

        {/* {card_infos.map((info) => (
          <MainMenu info={info} key={info.id} />
        ))} */}

        {/* <div className={styles.right_btn}>
          <FaChevronRight size="50" />
        </div> */}

      </div>
    </div>
  )
};

export default Main;