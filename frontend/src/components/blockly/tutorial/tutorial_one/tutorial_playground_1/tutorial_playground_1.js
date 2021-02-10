import React, { useEffect, useRef, useState } from 'react';
import styles from './tutorial_playground_1.module.css'
import { FaRegPlayCircle } from 'react-icons/fa';

const TutorialPlayground1 = ({ javascript_code, onChangeModalSuccess, onChangeModalFail }) => {
  var x = 0;
  var y = 0;
  var move = [];
  var cur_angle = 0;


  // 맵 정답 위치 (이것만 바꾸면 됨)
  const tutorial_map = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 2, 1, 1, 3, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]
  const char_location = [3, 1]
  const answer_location = [3, 4]
  //==================================



  const fieldsize = useRef();
  const fieldchar = useRef();
  const item = fieldchar.current;

  const [image_x, setImage_x] = useState(0);
  const [image_y, setImage_y] = useState(0);
  // const [image_speed, setImage_speed] = useState(5);

  const playGame = () => {
    eval(javascript_code);
    console.log(move);
    item.style.transition = `all .${move.length*10}s ease .5s`

    let x = image_x;
    let y = image_y;

    const timer = ms => new Promise(res => setTimeout(res, ms))
    async function jinok() {
      for (let i = 0; i < move.length; i++) {
        
        const new_move_x = Math.round(move[i][0])
        const new_move_y = Math.round(move[i][1])

        x = image_x + (new_move_x * 70)
        y = image_y - (new_move_y * 70)
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        await timer(1500);
        
        let check_lo_x = char_location[0] - new_move_y;
        let check_lo_y = char_location[1] + new_move_x;

        if (tutorial_map[check_lo_x][check_lo_y] === 0) {
          onChangeModalFail()
          return
        }
      }
      if (
        (char_location[0] - Math.round(move[move.length - 1][1])) === answer_location[0] 
        && (char_location[1] + Math.round(move[move.length - 1][0])) === answer_location[1]
        ) {
        onChangeModalSuccess();
      }
      else {
        onChangeModalFail()
      }
    }
    jinok()
  };

  useEffect(() => {
    const field = fieldsize.current;
    const fieldRect = field.getBoundingClientRect();
    const item = fieldchar.current; 
    
    item.setAttribute('className', `image`)
    item.setAttribute('src', `/images/bug.png`)
    item.style.position = 'absolute';

    setImage_x((char_location[1]) * 70 + 35)
    setImage_y((char_location[0]) * 70 + 35)

    item.style.transform = `translate(-50%, -60%)`

    item.style.left = `${image_x}px`;
    item.style.top = `${image_y}px`;
  })
  
  
    // 함수
  /////////////////////////////////////////////////////////////////
  var my_var = 0;  
  const set_var = (value_variable) => {
    my_var = value_variable;
  }
  const change_var = (value_variable) => {
    my_var += value_variable;
  }  

  // 움직임 
/////////////////////////////////////////////////////////////////
  
  const turn_right = () => {
    cur_angle -= 90 * Math.PI / 180;
  }

  const turn_left = () => {
    cur_angle += 90 * Math.PI / 180;
  }
  
  const turn_back = () => {
    cur_angle += 180 * Math.PI / 180;
  }

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

  const turn_angle = (angle) => {
    cur_angle += angle * Math.PI / 180;
  }

  const set_angle = (angle) => {
    cur_angle = angle * Math.PI / 180;
  }

  const set_angle_move = (angle, distance) => {
    var new_angle = angle * Math.PI / 180;
    x += distance * Math.cos(new_angle);
    y += distance * Math.sin(new_angle);
    move.push([x, y]);
  }

  const move_forward = (text_distance) => {
    x += text_distance * Math.cos(cur_angle);
    y += text_distance * Math.sin(cur_angle);
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

  // 그리기
  var pen_pos = true; // true이면 내려가 있는 상태, false이면 올라가 있는 상태
  var pen_angle = 0;
  var pen_x = 0;
  var pen_y = 0;
  const lines = [];
  var cur_colour = 0;
  const change_colour = (colour_colour) => {
    cur_colour = colour_colour;
  }
  const pen_down = () => {
    pen_pos = true;
  };
  const pen_up = () => {
    pen_pos = false;
  };
  const draw_line = (text_length) => {
    var tmp_x = pen_x;
    var tmp_y = pen_y;
    pen_x += Math.cos(pen_angle) * text_length;
    pen_y += Math.sin(pen_angle) * text_length;
    if(pen_pos){
      lines.push([[tmp_x, tmp_y], [pen_x, pen_y]]); // 펜이 내려와 있는 상태라면 선분의 양 끝점을 저장
    }
  };
  const rotate_pen = (angle_angle) => {
    pen_angle += angle_angle * Math.PI / 180;
  }

  

  return (
    <div className={styles.body}>
      <section className={styles.game} ref={fieldsize}>
        <img ref={fieldchar}></img>
      </section>
      <footer className={styles.footer}>
        <div 
          onClick={playGame}
          className={styles.game__button}
        >
          <FaRegPlayCircle size="60" color="#c30d23"/>
        </div>
      </footer>
    </div>
  )
}

export default TutorialPlayground1;