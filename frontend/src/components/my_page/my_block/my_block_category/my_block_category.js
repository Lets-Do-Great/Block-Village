import { CONTROLS_FLOW_STATEMENTS_WARNING } from 'blockly/msg/en';
import React, { useEffect, useState } from 'react';
import * as Icons from "react-icons/ti";
import MyBlockListForm from '../my_block_list_form/my_block_list_form';

const MyBlockCategory = ({ myBlockList, closeModal }) => {
    
    const [ category, setCategory ] = useState(0);
    const [ categoryBlockList, setCategoryBlockList ] = useState([]);

    // 카테고리 이름 배열
    const categoryList = [ '판단', '움직임', '흐름', '계산', '그리기', '함수'];

    // 현재 보여줄 카테고리에 해당하는 리스트 업데이트 함수
    const updateList = (n) => {
        const newList = myBlockList.filter( (myBlock) => {
            return myBlock.category === categoryList[n];
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
        <div>
            <button onClick={closeModal}>닫기</button>
            <Icons.TiArrowLeftOutline onClick={onChangeCategoryPrev}/>
            <MyBlockListForm
                categoryBlockList={categoryBlockList}
            />
            <Icons.TiArrowRightOutline onClick={onChangeCategoryNext}/>
        </div>
    );
}

export default MyBlockCategory;