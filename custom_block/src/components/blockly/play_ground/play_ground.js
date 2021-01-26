import React, { useEffect, useRef } from 'react';
// import { Faplay } from 'react-icons/fa';
import styles from './play_ground.module.css';

const PlayGround = ({ javascript_code }) => {
  const fieldsize = useRef();
  const fieldchar = useRef();

  const playGame = () => {
    eval(javascript_code);
  };

  // 움직임 
/////////////////////////////////////////////////////////////////
  var x = 0;
  var y = 0;
  const move = [];

  const move_x = (x_distance) => {
    x += x_distance;
    move.push([x, y]);
  }

  const move_y = (y_distance) => {
    y += y_distance;
    move.push([x, y]);
  }

  const point_x = (x_point) => {
    x = x_point;
    move.push([x, y]);
  }

  const point_y = (y_point) => {
    y = y_point;
    move.push([x,y]);
  }

  const point_x_y = (x_point, y_point) => {
    x = x_point;
    y = y_point;
    move.push([x, y]);
  }

  // 판단
/////////////////////////////////////////////////////////////////
  const block_judgment_equals = (e1, e2) => {
    if (e1 === e2) {
      console.log('equlas : true');
      return true;
    } else {
      console.log('equlas : false');
      return false;
    }
  };
  const block_judgment_strictinequality_left = (e1, e2) => {
    if (e1 > e2) {
      return true;
    } else {
      return false;
    }
  };
  const block_judgment_strictinequality_right = (e1, e2) => {
    if (e1 < e2) {
      return true;
    } else {
      return false;
    }
  };
  const block_judgment_notequal = (e1, e2) => {
    if (e1 != e2) {
      return true;
    } else {
      return false;
    }
  };
  const block_judgment_strictinequality_leftequal = (e1, e2) => {
    if (e1 >= e2) {
      return true;
    } else {
      return false;
    }
  };
  const block_judgment_strictinequality_rightequal = (e1, e2) => {
    if (e1 <= e2) {
      return true;
    } else {
      return false;
    }
  };
  const block_judgment_compare_and = (b1, compare, b2) => {
    console.log('compare : ' + compare);
    if (compare === 1) {
      console.log('and네요');
      if (b1 && b2) {
        console.log('true입니다.');
        return true;
      } else {
        console.log('false입니다.');
        return false;
      }
    } else if (compare === 2) {
      console.log('or네요');
      if (b1 || b2) {
        console.log('true입니다.');
        return true;
      } else {
        console.log('false입니다.');
        return false;
      }
    }
  };
  
  const block_judgment_compare_or = (b1, compare, b2) => {
    if (compare === 2) {
      console.log('or네요');
      if (b1 || b2) {
        console.log('true입니다.');
        return true;
      } else {
        console.log('false입니다.');
        return false;
      }
    } else if (compare === 1) {
      console.log('and네요');
      if (b1 && b2) {
        console.log('true입니다.');
        return true;
      } else {
        console.log('false입니다.');
        return false;
      }
    }
  };
  const block_judgment_compare_not = (b1) => {
    if (b1) {
      console.log('입력값이 true네용');
      console.log('반환값은 false입니다.');
      return false;
    } else {
      console.log('입력값이 false네영');
      console.log('반환값은 true입니다.');
      return true;
    }
  };
  
  // 흐름
  ////////////////////////////////////////////////////////////////////////////////////////////////
  const repeat_times_js = (text_times, statements_repeat) => {
    console.log('흐름 : '+ statements_repeat);
    console.log('times: '+ text_times);
    for(var i=0;i<text_times;i++){
      // statements_repeat;
      console.log(text_times)
    }
  };
  const repeat_js = (statements_repeat) => {
    while(true){
      // statements_repeat;
      console.log(statements_repeat);
    }
  };
  const repeat_condition_js = (value_repeat_condition, dropdown_opts, statements_action) => {
    if (dropdown_opts === 1){
      while(!value_repeat_condition){
        // statements_action;
      }
    }
    if (dropdown_opts === 2){
      while(value_repeat_condition){
        // statements_action;

      }
    }
  };
  const break_js = () => {
    // break;
  };
  const condition_js = (value_condition, statements_action) => {
    if(value_condition){
      // statements_action;
    }
  };
  const if_else_js = (value_if,statements_action1,statements_action2) => {
    if (value_if){
      // statements_action1;
    }
    else{
      // statements_action2;
    }
  };


  // 계산
  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    // const field = fieldsize.current;
    // const fieldRect = field.getBoundingClientRect();
    // const item = fieldchar.current;
    // item.setAttribute('className', `image`)
    // item.setAttribute('src', `../../../image/carrot.png`)
    // item.style.position = 'absolute';
    // const x = (fieldRect.width - 0) / 2;
    // const y = (fieldRect.height - 0) / 2;
    // item.style.left = `${x}px`;
    // item.style.top = `${y}px`;
  });

  return (
    <div className={styles.body}>
      <button onClick={playGame} className={styles.game__button}>
        start
      </button>
    </div>
  );
};

export default PlayGround;
