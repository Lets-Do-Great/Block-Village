import React, { useEffect, useRef } from 'react';
import styles from './block_category.module.css'

const BlockCategory = ({ categoryStatus, onChangeSelectedCategory }) =>{
  const cata_judgement = useRef();
  const cata_movement = useRef();
  const cata_flow = useRef();
  const cata_calculation = useRef();
  const cata_drawing = useRef();
  const cata_function = useRef();

  useEffect(() => {
    if (categoryStatus[0]) {
      cata_judgement.current.style.background = `100%/100% no-repeat url(/images/block_store/block_store_category_1.png)`
    } else {
      cata_judgement.current.style.background = `100%/100% no-repeat url(/images/block_store/block_store_category_2.png)`
    }

    if (categoryStatus[1]) {
      cata_movement.current.style.background = `100%/100% no-repeat url(/images/block_store/block_store_category_1.png)`
    } else {
      cata_movement.current.style.background = `100%/100% no-repeat url(/images/block_store/block_store_category_2.png)`
    }

    if (categoryStatus[2]) {
      cata_flow.current.style.background = `100%/100% no-repeat url(/images/block_store/block_store_category_1.png)`
    } else {
      cata_flow.current.style.background = `100%/100% no-repeat url(/images/block_store/block_store_category_2.png)`
    }

    if (categoryStatus[3]) {
      cata_calculation.current.style.background = `100%/100% no-repeat url(/images/block_store/block_store_category_1.png)`
    } else {
      cata_calculation.current.style.background = `100%/100% no-repeat url(/images/block_store/block_store_category_2.png)`
    }

    if (categoryStatus[4]) {
      cata_drawing.current.style.background = `100%/100% no-repeat url(/images/block_store/block_store_category_1.png)`
    } else {
      cata_drawing.current.style.background = `100%/100% no-repeat url(/images/block_store/block_store_category_2.png)`
    }

    if (categoryStatus[5]) {
      cata_function.current.style.background = `100%/100% no-repeat url(/images/block_store/block_store_category_1.png)`
    } else {
      cata_function.current.style.background = `100%/100% no-repeat url(/images/block_store/block_store_category_2.png)`
    }
  }, [categoryStatus])

  return (
    <div className={styles.body}>

      <div className={styles.dumy1}></div>

      <div 
        ref={cata_judgement}
        onClick={() => onChangeSelectedCategory('판단')}
        className={styles.cata__judgement}
      ><div>판  단</div></div>

      <div 
        ref={cata_movement}
        onClick={() => onChangeSelectedCategory('움직임')}
        className={styles.cata__movement}
      ><div>움직임</div></div>
      
      <div 
        ref={cata_flow}
        onClick={() => onChangeSelectedCategory('흐름')}
        className={styles.cata__flow}
      ><div>흐  름</div></div>

      <div 
        ref={cata_calculation}
        onClick={() => onChangeSelectedCategory('계산')}
        className={styles.cata__calculation}
      ><div>계  산</div></div>

      <div 
        ref={cata_drawing}
        onClick={() => onChangeSelectedCategory('그리기')}
        className={styles.cata__drawing}
      ><div>그리기</div></div>

      <div 
        ref={cata_function}
        onClick={() => onChangeSelectedCategory('함수')}
        className={styles.cata__function}
      ><div>함  수</div></div>

    </div>
  )
};

export default BlockCategory;