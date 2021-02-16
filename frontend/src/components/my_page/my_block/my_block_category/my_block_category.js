import { CONTROLS_FLOW_STATEMENTS_WARNING } from 'blockly/msg/en';
import React, { useEffect, useRef, useState } from 'react';
import * as Icons from "react-icons/ti";
import * as Icon from 'react-icons/md';
import MyBlockListForm from '../my_block_list_form/my_block_list_form';
import styles from './my_block_category.module.css';

const MyBlockCategory = ({ closeModal, allBlocksInfo }) => {
    const myblock_name = useRef();
    
    const [ category, setCategory ] = useState(0);
    const [ categoryBlockList, setCategoryBlockList ] = useState([]);

    useEffect(() => {
        console.log(categoryBlockList);
    }, [categoryBlockList]);

    const categoryList = ['시작', '판단', '움직임', '흐름', '계산', '그리기', '함수'];
    const categoryColors = ['#C30D23', '#FFA31D', '#8FC31F', '#55CFFF', '#1060FF', '#7D10C4', '#CC6666']

    const updateList = (n) => {
        const newList = [];
        allBlocksInfo[`${categoryList[n]}`].filter((BlockInfo) => {
            if(BlockInfo.userHave){
                newList.push(BlockInfo);
            }
        });
        setCategoryBlockList(newList);
        console.log(newList);
    }

    // 렌더와 동시에 현재 리스트 애들 불러오기
    useEffect(() => {
        updateList(0);
        myblock_name.current.style.background = `${categoryColors[0]}`
    }, []);

    // 이전 카테고리로 이동
    const onChangeCategoryPrev = () => {
        updateList((category + 6) % 7);
        setCategory((category + 6) % 7);
        myblock_name.current.style.background = `${categoryColors[(category + 6) % 7]}`
    };

    // 다음 카테고리로 이동
    const onChangeCategoryNext = () => {
        updateList((category + 1) % 7);
        setCategory((category + 1) % 7);
        myblock_name.current.style.background = `${categoryColors[(category + 1) % 7]}`
    };
    
    return (
        <div className={styles.my_block_category}>
            <div 
                className={styles.close}
                onClick={closeModal}><Icon.MdHighlightOff/></div>
            <div ref={myblock_name} className={styles.category_name}>{categoryList[category]}</div>
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