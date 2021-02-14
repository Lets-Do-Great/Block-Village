import React, { useRef }  from 'react';
import styles from './mission_do_modal_success.module.css';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { BsCheckCircle } from 'react-icons/bs';
import { FaRegSmileBeam } from 'react-icons/fa';

const MissionDoModalSuccess = ({ setUseDifficulty, onSubmitDifficulty, setUseContent }) => {
  const formRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    formRef.current.reset();
    onSubmitDifficulty()
  };  

  const onChangeDifficulty = event => {
    if (event == null) {
      return;
    }
    setUseDifficulty(event * 1.0)
  };

  const onChangeContent = event => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    setUseContent(event.currentTarget.value)
  };

  //====================================================
  const labels = {
    0.5: '0.5',
    1: '1',
    1.5: '1.5',
    2: '2',
    2.5: '2.5',
    3: '3',
    3.5: '3.5',
    4: '4',
    4.5: '4.5',
    5: '5',
  };
  const [value, setValue] = React.useState(2.5);
  const [hover, setHover] = React.useState(-1);
  //=====================================================
  
  return (
    <>
      <div className={styles.modal_background} />
      <div className={styles.body}>
        <div className={styles.container}>

          <header className={styles.header}>
            <div className={styles.header_icon}>
              <FaRegSmileBeam color="#e8f7fc" size="25"/>
            </div>
            <h2>성공!</h2>
          </header>

          <div className={styles.icon}>
            <BsCheckCircle size="70" color="#27ae60"/>
          </div>

          <form ref={formRef} className={styles.form}>
            <div className={styles.text}>당신이 생각하는 난이도!</div>


            <div className={styles.diff}>
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                  onChangeDifficulty(newValue)
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
              />
              {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
            </div>

            <div className={styles.text}>자신의 풀이를 설명해주세여</div>
            <textarea 
              name="content"
              onChange={onChangeContent}
              className={styles.textarea}
            />

        </form>
        
          <button className={styles.btn} onClick={onSubmit}>제출하기</button>

        </div>
        
      </div>
    </>
  )
}

export default MissionDoModalSuccess;