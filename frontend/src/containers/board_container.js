import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BoardList from '../components/board/board_list/board_list';
import BoardDetail from '../components/board/board_detail/board_detail';
import CommentForm from '../components/comment_form/comment_form';
import SearchForm from '../components/board/search_form/search_form';
import SearchType from '../components/board/search_type/search_type';
import Nav from '../components/nav/nav';
import * as BoardAction from '../modules/board';

const BoardContainer = () => {
    
    const [ detail, setDetail ] = useState(false);
    
    // 검색 조건 데이터
    const [search, setSearch] = useState({
        searchType: 'createdDate,desc',
        keyword: '',
        keywordType: 'title',
        pageNum: 0,                 // 페이징 
        size: 10
    })

    useEffect(() => {
        getBoardList(search);
    }, [search.searchType, search.sortType]);

    const onClickEnter = (e) => {
        if(e.code === 'Enter') {
            getBoardList(search);
        }
    };

    const onChangeSearch = (e) => {
        const {name, value} = e.target;
        setSearch({
            ...search,
            [name]: value,
        })
    }

    const onChangeSearchType = (e) => {
        const {name, value} = e.target;
        setSearch({
            ...search,
            [name]: value,
        })
    }
    
    // store에 있는 state와 dispatch 가져오는 작업
    const userInfo = useSelector(state => state.user.userInfo);
    const boardList = useSelector(state => state.board.boardList);
    const selectedBoard = useSelector(state => state.board.selectedBoard);
    const commentList = useSelector(state => state.board.commentList);
    const dispatch = useDispatch();
    
    useEffect(() => {
        getBoardList();
    }, [detail]);
    
    useEffect(() => {
        if(detail){
            getBoardCommentList();
        }
    }, [ selectedBoard ]);

    const closeDetail = () => {
        setDetail(false);
    }

    /*
    api 요청 보내는 함수
    */
   // 공지사항 전체 조회 --------------------------------------------------------
   const getBoardList = async (search) => {
       try {
           await dispatch(BoardAction.getBoardList(search))
        } catch(e) {
            console.log(e);
        }
    };
    
    // 특정 공지사항 조회
    const getBoard = async (boardId) => {
        try {
            await dispatch(BoardAction.getBoard({ boardId }));
        } catch(e) {
            console.log(e);
        }
    };

    // 공지사항 등록
    const registerBoard = async (title, content) => {
        try {
            // email, title, content
            await dispatch(BoardAction.registerBoard({ 
                email:userInfo.email, title, content
            }));
        } catch(e) {
            console.log(e);
        }
    };
    
    // 공지사항 수정
    const modifyBoard = async (title, content) => {
        try {
            // boardId, email, title, content
            await dispatch(BoardAction.modifyBoard({
                boardId: selectedBoard.boardId, email: userInfo.email, title, content
            }));
            // 수정 후 처리?
        } catch(e) {
            console.log(e);
        }
    };

    // 공지사항 삭제
    const deleteBoard = async () => {
        // boardId
        try {
            await dispatch(BoardAction.deleteBoard({
                boardId: selectedBoard.boardId
            }));
        } catch(e) {
            console.log(e);
        }
    };

    // 공지사항 댓글 리스트 조회
    const getBoardCommentList = async () => {
        // boardId
        try {
            await dispatch(BoardAction.getBoardCommentList({ boardId: selectedBoard.boardId }));
        } catch(e) {
            console.log(e);
        }
    };
    
    // 공지사항 댓글 작성
    const registerBoardComment = async (comment) => {
        // boardId, email, content
        try {
            await dispatch(BoardAction.registerBoardComment({
                email: userInfo.email, boardId: selectedBoard.boardId, comment
            }));
            getBoardCommentList();
        } catch(e) {
            console.log(e);
        }
    };

    // 공지사항 댓글 수정
    const modifyBoardComment = async (id, comment) => {
        // boardId, commentId, content
        try {
            await dispatch(BoardAction.modifyBoardComment({
                boardId: selectedBoard.boardId, commentId: id, email:userInfo.email, comment
            }));
            getBoardCommentList();
        } catch(e) {
            console.log(e);
        }
    };

    // 공지사항 댓글 삭제
    const deleteBoardComment = async (id) => {
        // boardId, commentId
        try {
            await dispatch(BoardAction.deleteBoardComment({
                boardId: selectedBoard.boardId, commentId: id
            }));
            getBoardCommentList();
        } catch(e) {
            console.log(e);
        }
    };

    return (<>
        <Nav type="board"/>
        { detail
        ? <><BoardDetail 
                selectedBoard={selectedBoard}
                userInfo={userInfo.email}
                closeDetail={closeDetail}
                onModify={modifyBoard}
                onDelete={deleteBoard}/>
            <CommentForm
                userInfo={userInfo.email}
                commentList={commentList}
                setComment={registerBoardComment}
                modifyComment={modifyBoardComment}
                deleteComment={deleteBoardComment}/>
            </>
        :  <>
                <SearchType
                    onChangeSearchType={onChangeSearchType}/>
                <SearchForm
                    onChangeSearch={onChangeSearch}
                    onChangeSearchType={onChangeSearchType}
                    onClickEnter={onClickEnter}
                    search={search}/> 
                <BoardList
                    onCreate={registerBoard}
                    getDetail={getBoard}
                    detail={detail}
                    selectedBoard={selectedBoard}
                    userInfo={userInfo.email}
                    list={boardList}
                    setOpenDetail={setDetail}/>
            </>
        }
    </>);
}

export default BoardContainer;