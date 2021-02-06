import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListForm from '../components/list/list_form/list_form';
import ComponentDetailCardForm from '../components/list/component_detail_card_form/component_detail_card_form';
import CommentForm from '../components/comment_form/comment_form';
import * as AnswerAction from '../modules/answer';

const AnswerContainer = ({ match }) => {
    const { id } = match.params;
    const [ detail, setDetail ] = useState(false);

    // store에 있는 state와 dispatch 가져오는 작업
    const userInfo = useSelector(state => state.user.userInfo);
    const answerList = useSelector(state => state.answer.answerList);
    const selectedAnswer = useSelector(state => state.answer.selectedAnswer);
    const commentList = useSelector(state => state.answer.commentList);

    const dispatch = useDispatch();

    useEffect(() => {
        getMissionAnswerList();
    }, [detail]);

    useEffect(() => {
        if(detail){
            getAnswerCommentList();
        }
    }, [ selectedAnswer ]);

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
            getAnswer(selectedAnswer.id);
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
            getAnswer(selectedAnswer.id);
        }catch(e) {
            console.log(e);
        }
    };

    // 현재 선택한 답안의 댓글 조회
    const getAnswerCommentList = async () => {
        try{
            await dispatch(AnswerAction.getAnswerCommentList({ answerId: selectedAnswer.id }))
        }catch(e) {
            console.log(e);
        }
    };    

    // 현재 선택한 답안의 댓글 제작
    const setAnswerComment = async (comment) => {
        try{
            await dispatch(AnswerAction.setAnswerComment({ 
                email: userInfo.email, answerId: selectedAnswer.id, comment,
            }));
            getAnswerCommentList();
        }catch(e) {
            console.log(e);
        }
    }; 

    // 현재 선택한 답안의 댓글 수정
    const modifyAnswerComment = async (id, comment) => {
        try{
            await dispatch(AnswerAction.modifyAnswerComment({ 
                email: userInfo.email, commentId: id, comment,
            }));
            getAnswerCommentList();
        }catch(e) {
            console.log(e);
        }
    }; 

    // 현재 선택한 답안의 댓글 삭제
    const deleteAnswerComment = async (id) => {
        try{
            await dispatch(AnswerAction.deleteAnswerComment({ 
                email: userInfo.email, commentId: id,
            }));
            getAnswerCommentList();
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
            <CommentForm
                userInfo={userInfo.email}
                commentList={commentList}
                setComment={setAnswerComment}
                modifyComment={modifyAnswerComment}
                deleteComment={deleteAnswerComment}/>
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