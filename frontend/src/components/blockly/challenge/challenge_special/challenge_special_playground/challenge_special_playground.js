import React, { useEffect, useRef, useState } from 'react';
import styles from './challenge_special_playground.module.css';
import { FaRegPlayCircle } from 'react-icons/fa';

const ChallengeSpecialPlayground = ({ javascript_code, onChangeSuccess, onChangeFail}) => {
  
  const back_img_ref = useRef();

  const answer_0 = useRef();
  const answer_1 = useRef();
  const answer_2 = useRef();
  const answer_3 = useRef();
  const answer_4 = useRef();

  const question_0 = useRef();
  const question_1 = useRef();
  const question_2 = useRef();
  const question_3 = useRef();
  const question_4 = useRef();

  const Answer = [2, 6, 120, 40320, 3628800];

  const playGame = () => {
    const timer = ms => new Promise(res => setTimeout(res, ms))
    
    var inputVar = 2;
    eval(javascript_code);
    
    var inputVar = 3;
    eval(javascript_code);

    var inputVar = 5;
    eval(javascript_code);

    var inputVar = 8;
    eval(javascript_code);

    var inputVar = 10;
    eval(javascript_code);
    
    async function jinok() {
      for (let i = 0; i < 5; i++) {
        if (i == 0) {
          answer_0.current.innerHTML = `${userAnswer[i]}`
        } else if (i == 1) {
          answer_1.current.innerHTML = `${userAnswer[i]}`
        } else if (i == 2) {
          answer_2.current.innerHTML = `${userAnswer[i]}`
        } else if (i == 3) {
          answer_3.current.innerHTML = `${userAnswer[i]}`
        } else {
          answer_4.current.innerHTML = `${userAnswer[i]}`
        }
        await timer(500);

        if (Answer[i] !== userAnswer[i]) {
          if (i == 0) {
            answer_0.current.style.color = 'red';
            question_0.current.style.color = 'red';
          } else if (i == 1) {
            answer_1.current.style.color = 'red';
            question_1.current.style.color = 'red';
          } else if (i == 2) {
            answer_2.current.style.color = 'red';
            question_2.current.style.color = 'red';
          } else if (i == 3) {
            answer_3.current.style.color = 'red';
            question_3.current.style.color = 'red';
          } else {
            answer_4.current.style.color = 'red';
            question_4.current.style.color = 'red';
          }
          await timer(500);
          onChangeFail();
          return
        } else {
          if (i == 0) {
            answer_0.current.style.color = '#0017a0';
            question_0.current.style.color = '#0017a0';
          } else if (i == 1) {
            answer_1.current.style.color = '#0017a0';
            question_1.current.style.color = '#0017a0';
          } else if (i == 2) {
            answer_2.current.style.color = '#0017a0';
            question_2.current.style.color = '#0017a0';
          } else if (i == 3) {
            answer_3.current.style.color = '#0017a0';
            question_3.current.style.color = '#0017a0';
          } else {
            answer_4.current.style.color = '#0017a0';
            question_4.current.style.color = '#0017a0';
          }
          await timer(500);
        }
      }
      onChangeSuccess();
    }
    jinok()
  };
  
  useEffect(() => {
    answer_0.current.innerHTML = "";
    answer_1.current.innerHTML = "";
    answer_2.current.innerHTML = "";
    answer_3.current.innerHTML = "";
    answer_4.current.innerHTML = "";

    answer_0.current.style.color = 'white';
    question_0.current.style.color = 'white';

    answer_1.current.style.color = 'white';
    question_1.current.style.color = 'white';

    answer_2.current.style.color = 'white';
    question_2.current.style.color = 'white';

    answer_3.current.style.color = 'white';
    question_3.current.style.color = 'white';

    answer_4.current.style.color = 'white';
    question_4.current.style.color = 'white';
  })
  
     // 함수
  /////////////////////////////////////////////////////////////////
  var x = 0;
  var y = 0;
  var move = [];
  var cur_angle = 0;
  
  var my_var = 0;  
  var my_var1 = 0;
  var my_var2 = 0;
  var my_var3 = 0;
  
  var outputVar = 0;
  var userAnswer = [];
  
  //챌린지 종료 버튼
  //////////////////////////////////////////////////////////////////////
  const challenge_end = () => {
    userAnswer.push(outputVar);
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

  

  return (
    <div className={styles.body}>


      <section className={styles.game} ref={back_img_ref}>
        <div className={styles.margin}></div>

        <div className={styles.section}>
          <div className={styles.question} ref={question_0}>&nbsp;&nbsp;2!&nbsp;  =  </div>
          <div className={styles.answer} ref={answer_0}></div>
        </div>
        <div className={styles.section}>
          <div className={styles.question} ref={question_1}>&nbsp;&nbsp;3!&nbsp;  =  </div>
          <div className={styles.answer} ref={answer_1}></div>
        </div>
        <div className={styles.section}>
          <div className={styles.question} ref={question_2}>&nbsp;&nbsp;5!&nbsp;  =  </div>
          <div className={styles.answer} ref={answer_2}></div>
        </div>
        <div className={styles.section}>
          <div className={styles.question} ref={question_3}>&nbsp;&nbsp;8!&nbsp;  =  </div>
          <div className={styles.answer} ref={answer_3}></div>
        </div>
        <div className={styles.section}>
          <div className={styles.question} ref={question_4}>10!&nbsp;  =  </div>
          <div className={styles.answer} ref={answer_4}></div>
        </div>

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

export default ChallengeSpecialPlayground;