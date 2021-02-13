import { CONTROLS_FLOW_STATEMENTS_WARNING } from 'blockly/msg/en';
import React, { useEffect, useState } from 'react';
import * as Icons from "react-icons/ti";
import * as Icon from 'react-icons/md';
import MyBlockListForm from '../my_block_list_form/my_block_list_form';
import styles from './my_block_category.module.css';

const MyBlockCategory = ({ myBlockList, closeModal }) => {
    
    const [ category, setCategory ] = useState(0);
    const [ categoryBlockList, setCategoryBlockList ] = useState([]);

    useEffect(() => {
        console.log(categoryBlockList);
    }, [categoryBlockList]);

    // 카테고리 이름 배열
    const categoryList = [ '판단', '움직임', '흐름', '계산', '그리기', '함수'];

    // 현재 보여줄 카테고리에 해당하는 리스트 업데이트 함수
    const updateList = (n) => {
        const newList = [];
        myBlockList.filter( (myBlock) => {
            if(myBlock.name === categoryList[n]){
                newList.push(myBlock.blocks);
            }
            // 승범쓰 여기 적어주세욤 ㅎㅎㅎ 어케 들어오는지 모르겟네에
            // return myBlock.name === categoryList[n];
        });
        setCategoryBlockList(newList);
    }

    // 렌더와 동시에 현재 리스트 애들 불러오기
    useEffect(() => {
        updateList(0);
    }, []);

    // 이전 카테고리로 이동
    const onChangeCategoryPrev = () => {
        updateList((category + 5) % 6);
        setCategory((category + 5) % 6);
    };

    // 다음 카테고리로 이동
    const onChangeCategoryNext = () => {
        updateList((category + 1) % 6);
        setCategory((category + 1) % 6);
    };
    
    return (
        <div className={styles.my_block_category}>
            <div 
                className={styles.close}
                onClick={closeModal}><Icon.MdHighlightOff/></div>
            <div className={styles.category_name}>{categoryList[category]}</div>
            <div className={styles.block_list_form}>
                <div 
                    className={styles.btn_icon_left}
                    onClick={onChangeCategoryPrev}>
                        <Icons.TiArrowLeftOutline/>
                </div>
                <MyBlockListForm
                    categoryBlockList={categoryBlockList}
                />
                <div 
                    className={styles.btn_icon_right}
                    onClick={onChangeCategoryNext}>
                        <Icons.TiArrowRightOutline/>
                </div>
            </div>
        </div>
    );
}

export default MyBlockCategory;