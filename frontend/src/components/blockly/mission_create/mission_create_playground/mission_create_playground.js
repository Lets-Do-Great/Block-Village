import React, { useEffect, useRef, useState } from 'react';
import styles from './mission_create_playground.module.css';
import { FaRegPlayCircle, FaRedoAlt } from 'react-icons/fa';
import { ImFolderDownload } from 'react-icons/im';


var x = 0;
var y = 0;
var move = [];
var cur_angle = 0;

const MissionCreatePlayground = ({ setMoveStep, startPosition, endPosition, javascript_code, onChangeStep, onChangeImage, imageUrl }) => {
  const inputRef = useRef();
  const back_img_ref = useRef();

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  }

  const fieldchar = useRef();
  const item = fieldchar.current;

  // const image_x = startPosition[0];
  // const image_y = startPosition[1];
  const [image_x, setImage_x] = useState(startPosition[0]);
  const [image_y, setImage_y] = useState(startPosition[1]);

  const setfirstPosition = () => {
    move = [];
    x = 0;
    y = 0;
    cur_angle = 0;
    item.style.left = `${(startPosition[0]) + 10 - 25}px`;
    item.style.top = `${(startPosition[1]) + 10 - 25}px`;
  };
  

  // const [moveStep, setMoveStep] = useState(move);
  
  const playGame = () => {
    eval(javascript_code);
    console.log(move);
    setMoveStep(move)
    item.style.transition = `all .${move.length*10}s ease .2s`

    let xx = image_x;
    let yy = image_y;

    let dir_x = 0;
    let dir_y = 0;
    
    const timer = ms => new Promise(res => setTimeout(res, ms))
    async function jinok() {
      for (let i = 0; i < move.length; i++) {

        const new_dir_x = Math.round(move[i][0] - dir_x);
        const new_dir_y = Math.round(move[i][1] - dir_y);
        if (new_dir_x > 0 && new_dir_y == 0) {
          item.setAttribute('src', `/images/character/character_right.png`)
        } else if (new_dir_x < 0 && new_dir_y == 0) {
          item.setAttribute('src', `/images/character/character_left.png`)
        } else if (new_dir_x == 0 && new_dir_y > 0) {
          item.setAttribute('src', `/images/character/character_back.png`)
        } else {
          item.setAttribute('src', `/images/character/character_front.png`)
        }
        // console.log(dir_x, dir_y);
        dir_x = move[i][0];
        dir_y = move[i][1];
        await timer(500);


        console.log(image_x, image_y);
        const new_move_x = move[i][0]
        const new_move_y = move[i][1]
        xx = image_x + (new_move_x * 50) + 10 - 25;
        yy = image_y - (new_move_y * 50) + 10 - 25;
        // console.log(xx, yy);
        
        item.style.left = `${xx}px`;
        item.style.top = `${yy}px`;
        
        await timer(500);
      }
    }
    jinok()
  };

  
  
  useEffect(() => {
    if (imageUrl) {
      const imgUrl = URL.createObjectURL(imageUrl)
      back_img_ref.current.style.background = `url(${imgUrl}) center/cover`

      const item = fieldchar.current; 
      
      item.setAttribute('className', `image`)
      item.setAttribute('src', `/images/character/character_right.png`)
      item.style.position = 'absolute';
      
      setImage_x(startPosition[0])
      setImage_y(startPosition[1])

      item.style.transform = `translate(-50%, -50%)`

      item.style.left = `${(startPosition[0]) + 10 - 25}px`;
      item.style.top = `${(startPosition[1]) + 10 - 25}px`;
    }
    setMoveStep(move);
    move = [];
      x = 0;
      y = 0;
    cur_angle = 0;
  }, [imageUrl])
  
  
     // 함수
  /////////////////////////////////////////////////////////////////
  var my_var = 0;  
  var my_var1 = 0;
  var my_var2 = 0;
  var my_var3 = 0;
  var inputVar = 0;
  var outputVar = 0;


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
  /////////////////////

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
      {imageUrl
        ? (
            <>
              <section className={styles.game} ref={back_img_ref}>
                <img ref={fieldchar}></img>
              </section>
              <footer className={styles.footer}>
                <div 
                  onClick={playGame}
                  className={styles.game__button}
                >
                  <FaRegPlayCircle size="60" color="#c30d23"/>
                </div>
                <div 
                  onClick={setfirstPosition}
                  className={styles.return__button}
                >
                  <FaRedoAlt size="55" color="#1060FF"/>
                </div>
              </footer>
            </>
          )
        : (
            <section className={styles.input_img}>
              <input
                ref={inputRef}
                className={styles.input}
                type="file"
                name="imageUrl"
                onChange={onChangeImage}
              />
              <button 
                className={styles.button} 
                onClick={onButtonClick}
              >
                <div className={styles.download_icon}>
                  <ImFolderDownload size="25"/>
                </div>
                이미지 넣기
              </button>
            </section>
          )
      }
    </div>
  )
}

export default MissionCreatePlayground;