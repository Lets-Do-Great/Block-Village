import React, { useEffect, useRef } from 'react';
// import { Faplay } from 'react-icons/fa';
import styles from './play_ground.module.css';

const PlayGround = ({ javascript_code }) => {
  const fieldsize = useRef();
  const fieldchar = useRef();
  
  const playGame = () => {
    eval(javascript_code);
    console.log(move);
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

  // 계산
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  const num_js = (text_num) => {
    return text_num;
  }
  const addition_js = (value_num1, value_num2) => {
    return value_num1 + value_num2;
  };
  const subtraction_js = (value_num1, value_num2) => {
    return value_num1 - value_num2;
  };
  const multiplication_js = (value_num1, value_num2) => {
    return value_num1 * value_num2;
  };
  const division_js = (value_num1, value_num2) => {
    return value_num1 / value_num2;
  };
  const random_num_js = (value_num1, value_num2) => {
    return Math.floor(Math.random() * (value_num2 - value_num1 + 1)) + value_num1;
  };
  const quotient_js = (value_num1, value_num2) => {
    return parseInt(value_num1 / value_num2);
  };
  const remainder_js = (value_num1, value_num2) => {
    return value_num1 % value_num2;
  };
  const square_js = (value_num) => {
    return value_num * value_num;
  };
  const sqrt_js = (value_num) => {
    return Math.sqrt(value_num);
  };
  const integer_js = (value_num) => {
    return parseInt(value_num);
  };
  const roundup_js = (value_num) => {
    return Math.ceil(value_num);
  };
  const round_js = (value_num) => {
    return Math.round(value_num);
  };
  const abs_val_js = (value_num) => {
    return Math.abs(value_num);
  };
  
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
  })

  return (
    
    <div className={styles.body}>
      {/* <section className={styles.game} ref={fieldsize}>
        <img ref={fieldchar}></img>
      </section>
      <footer className={styles.footer}> */}
        <button 
          onClick={playGame}
          className={styles.game__button}
        >start
        </button>
      {/* </footer>
      <Faplay /> */}
    </div>
  )
}

export default PlayGround;