import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListForm from '../components/list/list_form/list_form';
import ComponentDetailCardForm from '../components/list/component_detail_card_form/component_detail_card_form';
import CommentContainer from '../containers/comment_container';
import * as AnswerAction from '../modules/answer';

const AnswerContainer = ({ match }) => {
    const { id } = match.params;
    const [ detail, setDetail ] = useState(false);

    // store에 있는 state와 dispatch 가져오는 작업
    const userInfo = useSelector(state => state.user.userInfo);
    const answerList = useSelector(state => state.answer.answerList);
    const selectedAnswer = useSelector(state => state.answer.selectedAnswer);

    const dispatch = useDispatch();

    useEffect(() => {
        getMissionAnswerList();
    }, [detail]);

    const closeDetail = () => {
        setDetail(false);
    }

    /*
    api 요청 보내는 함수
    */
    // 현재 미션의 답안 목록 조회
    const getMissionAnswerList = async () => {
        try {
            await dispatch(AnswerAction.getMissionAnswerList({ id }));
        } catch(e) {
            console.log(e);
        }
    };

    // 현재 선택한 답안 조회
    const getAnswer = async (answerId) => {
        try {
            await dispatch(AnswerAction.getAnswer({ email: userInfo.email, answerId }));
        } catch(e) {
            console.log(e);
        }
    };

    // 현재 선택한 답안 삭제
    const deleteAnswer = async () => {
        console.log(userInfo.email, selectedAnswer.id);
        try {
            await dispatch(AnswerAction.deleteAnswer({
                email: userInfo.email, answerId: selectedAnswer.id,
            }))
            getMissionAnswerList();
        } catch(e) {
            console.log(e);
        }
    };

    // 답안 좋아요 요청
    const likeAnswer = async () => {
        try{
            await dispatch(AnswerAction.setLikeAnswer({
                email: userInfo.email, answerId: selectedAnswer.id, favorite:true,
            }))
        }catch(e) {
            console.log(e);
        }
    };

    // 답안 좋아요 취소 요청
    const dislikeAnswer = async () => {
        try{
            await dispatch(AnswerAction.setLikeAnswer({
                email: userInfo.email, answerId: selectedAnswer.id, favorite:false,
            }))
        }catch(e) {
            console.log(e);
        }
    };


    return (<>
        { detail
        ? <><ComponentDetailCardForm
                detail={selectedAnswer}
                setLike={likeAnswer}
                setDislike={dislikeAnswer}
                userInfo={userInfo.email}
                closeDetail={closeDetail}
                onDelete={deleteAnswer}/>
            <CommentContainer
                userInfo={userInfo.email}
                type="answer"
                selectedId={selectedAnswer.id}/>
            </>
        : <ListForm
            type="answer"
            userInfo={userInfo.email}
            list={answerList}
            detail={selectedAnswer}
            getList={getMissionAnswerList}
            getDetail={getAnswer}
            setOpenDetail={setDetail}/>
        }
    </>);
}

export default AnswerContainer;